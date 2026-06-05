# Eagle Valley Sitters — CMS Plan

Owner-facing content management system built into the existing Nuxt 3 site.
Accessible at `/portal` during development, `portal.eaglevalleysitters.com` in production.

---

## Architecture

- **Auth:** Firebase Authentication — Google login only, email whitelist enforced via Firestore
- **Data:** Firestore — stores pricing, and eventually all editable content
- **Hosting:** Same Firebase Hosting site as the main site
- **Access:** Only whitelisted Google accounts can log in — no self-registration

### Allowed Users
- todd@dub-low.consulting (admin/developer)
- cat@eaglevalleysitters.com (owner)

---

## Phase 1 — Auth + Pricing Editor ✅ IN PROGRESS

**Goal:** Cat can log in with her Google account and update all pricing numbers without touching code.

### Deliverables
- [ ] Firebase Auth configured (Google provider, whitelist enforced)
- [ ] `/portal` login page (Google sign-in button)
- [ ] `/portal/dashboard` — protected, redirects to login if not authenticated
- [ ] `/portal/edit-rates` — form to edit all pricing fields, saves to Firestore
- [ ] `Rates.vue` reads pricing from Firestore (falls back to defaults if unavailable)
- [ ] Firestore security rules — only whitelisted users can write
- [ ] DNS: `portal.eaglevalleysitters.com` CNAME pointing to Firebase Hosting

### Pricing fields stored in Firestore
**Babysitting:**
- 1 child rate, 2 children rate, 3 children rate, 4 children rate
- Booking fee (per day)
- Minimum booking hours
- Last minute fee
- Credit card processing fee %

**Pet Sitting:**
- Hourly rate
- Overnight rate

---

## Phase 2 — Inline Text & Image Editing

**Goal:** Cat can browse the live site in "edit mode" and click any text or image to change it.

### Deliverables
- [ ] Edit mode toggle in portal navbar (visible only when logged in)
- [ ] Clicking any editable text shows an inline text editor
- [ ] Clicking any image shows an image upload/replace dialog
- [ ] All editable content stored in Firestore, loaded at runtime
- [ ] Changes are live immediately after saving
- [ ] Covers: Services, About, Team, Activities, Callout sections

---

## Phase 3 — Hero Slider Management

**Goal:** Cat can add, remove, and reorder slides on the homepage hero slider.

### Deliverables
- [ ] Slider editor in portal — upload image, set caption/CTA text, set order
- [ ] Images stored in Firebase Storage
- [ ] Slider data stored in Firestore
- [ ] Live site pulls slides from Firestore

---

## Phase 4 — Reviews Management

**Goal:** Cat can add, edit, remove, and feature reviews shown on the site.

### Deliverables
- [ ] Reviews editor in portal — add review text, reviewer name, rating, date
- [ ] Toggle which reviews are shown on the live site
- [ ] Reviews stored in Firestore
- [ ] Live site pulls active reviews from Firestore

---

## Tech Stack Notes

- Nuxt 3 + Vue 3 + Vuetify 3
- Firebase Auth (Google provider)
- Firestore (free Spark tier — well within limits for this use case)
- Firebase Hosting (same site, multi-domain)
- No separate backend — all reads/writes go directly to Firestore from the client with security rules

---

## DNS Setup (end of Phase 1)

Add a CNAME record in Google Domains / Squarespace DNS:

| Type | Host | Value |
|------|------|-------|
| CNAME | portal | eagle-valley-sitters.web.app |

Then add `portal.eaglevalleysitters.com` as a custom domain in Firebase Hosting console.
