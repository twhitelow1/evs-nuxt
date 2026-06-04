# Eagle Valley Sitters — Nuxt 3 Site

The marketing site for [eaglevalleysitters.com](https://eaglevalleysitters.com), built with Nuxt 3 and hosted on Firebase Hosting.

- **Production**: [eaglevalleysitters.com](https://eaglevalleysitters.com) (also reachable at [eagle-valley-sitters.web.app](https://eagle-valley-sitters.web.app))
- **Staging**: [nuxt-version.web.app](https://nuxt-version.web.app)

---

## Quick Reference

| Task | Command |
| --- | --- |
| Install deps | `npm install` |
| Run dev server | `npx nuxt dev` (or `npm run dev`) |
| Build static site | `npx nuxt generate` |
| Deploy to **staging** | `npx firebase deploy --only hosting:staging` |
| Deploy to **production** | `npx firebase deploy --only hosting:production` |

---

## First-time setup

### 1. Clone and install

```bash
git clone https://github.com/twhitelow1/evs-nuxt.git
cd evs-nuxt
npm install
```

### 2. Install Firebase CLI (one-time, global)

```bash
npm install -g firebase-tools
firebase login
```

The Firebase project is `eagle-valley-sitters` and is already wired into `.firebaserc`. Make sure your Google account has access to that Firebase project — ping the project owner if not.

### 3. Bind Firebase deploy targets (one-time, per machine)

Hosting deploys use named targets (`production`, `staging`) that map to the two Firebase Hosting sites in this project. The mapping lives in `.firebaserc`, but if it isn't there yet on your machine, run:

```bash
firebase target:apply hosting production eagle-valley-sitters
firebase target:apply hosting staging nuxt-version
```

Verify with:

```bash
cat .firebaserc
```

You should see a `targets` block mapping `production` → `eagle-valley-sitters` and `staging` → `nuxt-version`.

---

## Local development

Start the dev server with hot reload on `http://localhost:3000`:

```bash
npx nuxt dev
```

If you ever see weird hydration errors or cached old code, nuke the caches:

```bash
rm -rf .nuxt .output node_modules/.cache node_modules/.vite
npx nuxt dev
```

---

## Deployment workflow

> **Current state**: deploys are **manual** — there is no GitHub Actions / CI auto-deploy yet. See the "CI/CD (planned)" section at the bottom.

### Standard release flow

1. **Work on a branch** (never commit directly to `main`):

   ```bash
   git checkout -b fix/something
   # ...make changes...
   git add -A && git commit -m "..."
   git push -u origin fix/something
   ```

2. **Open a PR** into `main` on GitHub. Self-review or get a review.

3. **Merge to `main`** once the PR is approved.

4. **Pull `main` locally and deploy to staging first**:

   ```bash
   git checkout main
   git pull origin main
   npx nuxt generate
   npx firebase deploy --only hosting:staging
   ```

5. **Verify on staging**: open [nuxt-version.web.app](https://nuxt-version.web.app) in an Incognito window and click through the site. Confirm:
   - Slider on the homepage loads and animates
   - Navigation logo shows correctly on desktop AND mobile (resize browser below 990px)
   - Rates, FAQ, contact form, etc. all render
   - No new errors in the browser DevTools console

6. **Once staging looks good, deploy to production**:

   ```bash
   npx firebase deploy --only hosting:production
   ```

   This publishes to [eaglevalleysitters.com](https://eaglevalleysitters.com).

### Rolling back

If a bad build hits production, roll back in the Firebase console:

1. Go to [Firebase Hosting → eagle-valley-sitters](https://console.firebase.google.com/project/eagle-valley-sitters/hosting/sites/eagle-valley-sitters).
2. In the "Release history" table, find the previous good release and click "Rollback".

That swaps live traffic back to the previous version instantly — no rebuild needed.

---

## Project structure

```
app.vue                  Root component — global nav + footer
layouts/default.vue      Layout shell — loads global CSS/JS via useHead
pages/                   File-based routes (index.vue = home, faq.vue, etc.)
components/              Vue components
  Slider.vue             LayerSlider hero (loads jQuery + plugin serially)
  Rates.vue              Babysitting + pet sitting + nanny placement rates
public/                  Static assets (img, css, js, layerslider/)
firebase.json            Hosting config with `production` and `staging` targets
.firebaserc              Project + target bindings (committed)
nuxt.config.ts           Nuxt 3 config
```

### Where to update rates

All babysitting rates live in `components/Rates.vue`. Holiday rates and additional pricing live in `pages/faq.vue`.

### LayerSlider notes

The hero slider is a legacy jQuery LayerSlider plugin. Because Nuxt's `useHead` does not reliably preserve script execution order with `defer: true`, `components/Slider.vue` loads its dependencies itself in a strict serial chain:

1. `jquery.min.js` (only if `window.$` isn't already defined)
2. `greensock.js`
3. `layerslider.transitions.js`
4. `layerslider.kreaturamedia.jquery.js`

After all four resolve, it calls `$('#layerslider').layerSlider({...})`. Do NOT add LayerSlider scripts back to `layouts/default.vue` — it will break the init order.

The `public/layerslider/js/layerslider.load.js` file has been intentionally emptied to a comment-only stub. Don't put auto-init code back there.

---

## Troubleshooting

### Deploy fails with "content hash doesn't match content"

Transient Firebase upload bug. Just retry:

```bash
npx firebase deploy --only hosting:staging
```

If it keeps failing, rebuild from scratch:

```bash
rm -rf .output .nuxt
npx nuxt generate
npx firebase deploy --only hosting:staging
```

### Deploy fails with "site with no site name or target name"

Your `.firebaserc` is missing the target bindings. Re-run:

```bash
firebase target:apply hosting production eagle-valley-sitters
firebase target:apply hosting staging nuxt-version
```

### "HTTP Error: 401, Request had invalid authentication credentials"

Your Firebase OAuth token expired. Re-auth:

```bash
firebase login --reauth
```

### Slider is blank or "$(...).layerSlider is not a function"

You probably touched `components/Slider.vue` or `layouts/default.vue`. See the "LayerSlider notes" section above. The init order must be: jQuery → greensock → transitions → kreaturamedia → init.

---

## CI/CD (planned)

There is **no GitHub Actions auto-deploy yet**. Every push to `main` does NOT automatically build or deploy. Deploys are entirely manual via the commands above.

The plan is to add two GitHub Actions workflows:

1. **`.github/workflows/firebase-hosting-pull-request.yml`**
   On every PR, build the site and deploy it to a **Firebase preview channel**. Bot comments the unique throwaway preview URL on the PR. URL auto-expires after 7 days.

2. **`.github/workflows/firebase-hosting-merge.yml`**
   On every push to `main`, build and deploy to **production** at [eaglevalleysitters.com](https://eaglevalleysitters.com).

Optionally, the staging site (`nuxt-version`) can be wired up to auto-deploy from a `staging` or `develop` branch.

Once CI/CD is set up, the manual `npx firebase deploy ...` commands above will no longer be needed for the standard flow — they'll remain useful only for one-off manual deploys or hotfixes.

---

## Tech stack

- [Nuxt 3](https://nuxt.com/) (static site generation via `nuxt generate`)
- [Vue 3](https://vuejs.org/) (Composition API + `<script setup>`)
- [Vuetify 3](https://vuetifyjs.com/) for select UI components
- Legacy: jQuery + LayerSlider for the hero slider, Bootstrap for the nav grid
- [Firebase Hosting](https://firebase.google.com/docs/hosting) for production + staging
