# Staging vs Production Firebase Setup

**Goal:** Separate Firebase environments so staging edits never touch production data.

---

## Recommended Approach — Separate Firebase Projects (Option A)

### Step 1 — Create staging Firebase project
1. Go to console.firebase.google.com
2. Click **Add project** → name it `eagle-valley-sitters-staging`
3. Enable **Google Analytics** → skip (not needed)
4. Click **Create project**

### Step 2 — Enable Google Auth on staging project
- Build → Authentication → Get started → Google → Enable
- Add authorized domains: `localhost`, `nuxt-version.web.app`

### Step 3 — Enable Firestore on staging project
- Build → Firestore Database → Create database → Production mode → us-central1

### Step 4 — Add Firestore security rules on staging project
- Firestore → Rules tab → paste same rules as production → Publish

### Step 5 — Get staging Firebase config
- Project Settings → Your apps → Add web app → get config keys

### Step 6 — Create .env.staging locally
```
NUXT_PUBLIC_FIREBASE_API_KEY=staging_key_here
NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN=eagle-valley-sitters-staging.firebaseapp.com
NUXT_PUBLIC_FIREBASE_PROJECT_ID=eagle-valley-sitters-staging
NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET=eagle-valley-sitters-staging.appspot.com
NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=staging_sender_id
NUXT_PUBLIC_FIREBASE_APP_ID=staging_app_id
```

### Step 7 — Add staging secrets to GitHub
Run these with the staging project values:
```
gh secret set NUXT_PUBLIC_FIREBASE_API_KEY_STAGING --body "..."
gh secret set NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN_STAGING --body "..."
gh secret set NUXT_PUBLIC_FIREBASE_PROJECT_ID_STAGING --body "..."
gh secret set NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET_STAGING --body "..."
gh secret set NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_STAGING --body "..."
gh secret set NUXT_PUBLIC_FIREBASE_APP_ID_STAGING --body "..."
```

### Step 8 — Update GitHub Actions workflow
Update `.github/workflows/deploy.yml` staging build step to use staging secrets:
```yaml
- name: Build
  run: npm run generate
  env:
    NUXT_PUBLIC_FIREBASE_API_KEY: ${{ github.ref == 'refs/heads/staging' && secrets.NUXT_PUBLIC_FIREBASE_API_KEY_STAGING || secrets.NUXT_PUBLIC_FIREBASE_API_KEY }}
    NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN: ${{ github.ref == 'refs/heads/staging' && secrets.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN_STAGING || secrets.NUXT_PUBLIC_FIREBASE_AUTH_DOMAIN }}
    NUXT_PUBLIC_FIREBASE_PROJECT_ID: ${{ github.ref == 'refs/heads/staging' && secrets.NUXT_PUBLIC_FIREBASE_PROJECT_ID_STAGING || secrets.NUXT_PUBLIC_FIREBASE_PROJECT_ID }}
    NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET: ${{ github.ref == 'refs/heads/staging' && secrets.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET_STAGING || secrets.NUXT_PUBLIC_FIREBASE_STORAGE_BUCKET }}
    NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: ${{ github.ref == 'refs/heads/staging' && secrets.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID_STAGING || secrets.NUXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID }}
    NUXT_PUBLIC_FIREBASE_APP_ID: ${{ github.ref == 'refs/heads/staging' && secrets.NUXT_PUBLIC_FIREBASE_APP_ID_STAGING || secrets.NUXT_PUBLIC_FIREBASE_APP_ID }}
```

---

## Alternative — Same Project, Prefixed Collections (Option B)

Simpler but shares quotas. Staging reads/writes to `staging-content/*`, production uses `content/*`.

Update `nuxt.config.ts` to expose an env var:
```
NUXT_PUBLIC_CONTENT_PREFIX=staging-   # staging
NUXT_PUBLIC_CONTENT_PREFIX=           # production (empty = no prefix)
```

Then in `useRates` and `useContent`, prefix all collection paths:
```ts
const prefix = useRuntimeConfig().public.contentPrefix
doc(getDb(), `${prefix}content`, 'rates')
```

---

## Decision
- **Option A** — cleanest, fully isolated, both projects on free tier. Recommended.
- **Option B** — faster to set up, fine for small teams, slight risk of confusion.
