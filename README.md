# Synctappy — Landing Page

**Synctappy by Synvora** · Smart Touchpoint Platform · *Tap. Connect. Grow.*

Production landing page for Synctappy, the platform that turns an NFC tap or QR scan on a physical touchpoint (stand, card, tag) into a digital experience (review page, multi-link profile, promo), then records the action for analytics.

> **Stage:** Phase 1, frontend landing page only. There is no backend yet: auth, trial signup, dashboard, billing and the analytics API are planned for a later Laravel phase. Every CTA opens a pre-launch dialog instead of a fake form.

## Stack

| | |
|---|---|
| Framework | Nuxt 4 (Vue 3.5, `<script setup lang="ts">`) |
| Styling | Tailwind CSS v4 via `@tailwindcss/vite` (tokens in `app/assets/css/main.css`) |
| Icons | `lucide-vue-next` + custom brand SVGs (`UiBrandIcon`) |
| Fonts | Space Grotesk (headings), Plus Jakarta Sans (body/UI), **self-hosted** WOFF2 in `public/fonts/` (`node scripts/fetch-fonts.mjs`) |
| Rendering | SSR, `/` prerendered (`nitro.prerender`) |

No UI kit, no animation library. Motion is CSS plus one small IntersectionObserver directive.

## Getting started

```bash
npm install          # also runs `nuxt prepare`
npm run dev          # http://localhost:3000
npm run typecheck    # vue-tsc via nuxt typecheck
npm run build        # production build → .output/
npm run generate     # static output → .output/public
npm run preview
```

Requires Node 20+. Optional environment variables (see `.env.example`):

| Variable | Purpose | Default |
|---|---|---|
| `NUXT_PUBLIC_SITE_URL` | canonical + Open Graph base URL | `https://synctappy.id` (**placeholder**) |
| `NUXT_PUBLIC_CONTACT_HREF` | "Talk to Synvora" link (mailto:, wa.me, form URL) | empty, so the button is hidden |

## Asset pipelines

```bash
npm run images               # python scripts/prepare-images.py  (needs Pillow)
python scripts/prepare-brand.py   # web logo + favicons from the official logo PNGs in public/brand/
node scripts/qa-screenshot.mjs http://localhost:3000/ .qa 1440 1024 768 390
```

* `prepare-images.py` copies the original PNGs from the project root into `public/images/synctappy/` and generates responsive WebP variants (640–1672w) plus `og-image.jpg`. Originals are never modified.
* `prepare-brand.py` trims and resizes the **official logo files** in `public/brand/` (supplied by Synvora) into `public/brand/web/` and generates favicons. Originals are never modified.
* `qa-screenshot.mjs` takes a full-page screenshot per width and reports horizontal overflow, broken images, unrevealed elements and console/network errors.

## Project structure

```text
app/
  app.vue                  # shell: skip link, navbar, page, footer, CTA dialog
  pages/index.vue          # section order (the storytelling sequence)
  assets/css/main.css      # design tokens (@theme), base, components, reveal CSS
  components/
    layout/                # Navbar, Footer, CtaModal
    hero/HeroSection.vue
    sections/              # 14 story sections (Problem → FinalCTA)
    ui/                    # Button, SectionHeading, FeatureCard, GlowOrb, DeviceMockup,
                           # Logo, LogoMark, Icon, BrandIcon, DestinationIcon, QrGlyph
    mockups/               # StandMockup, CardMockup, TagMockup, ProfileScreen (CSS/SVG renders)
  composables/             # useLocale (EN/ID), useConsent (cookies), useCtaModal, usePrefersReducedMotion
  pages/privacy.vue        # Privacy Policy (EN/ID)
  plugins/                 # reveal directive, locale.client (device-language fallback)
  content/en.ts, id.ts     # ALL page copy per locale (same LandingContent shape)
  content/shared.ts        # locale-independent data (chart series)
  content/legal/           # privacy.id.ts (source) + privacy.en.ts — structured legal docs
  types/content.ts         # content contracts incl. LandingContent
  utils/icons.ts           # string → Lucide icon registry
  plugins/reveal.ts        # v-reveal scroll directive
public/
  images/synctappy/        # optimized hero + final CTA assets, og-image
  brand/                   # OFFICIAL logo PNGs (source) + web/ optimized derivatives
  favicon.ico, favicon-*.png, apple-touch-icon.png
scripts/                   # image, brand and QA tooling
```

Reference material (kept untouched in the root): `Gambaran_Landing_Synctappy.png` (visual reference), `hero_banner_synctappy.png`, `synctappy_tapconnectgrow.png`, `index_synctappy.html` (old prototype), `SyncTap_Master_Product_Blueprint_Synvora.docx` (product blueprint).

## Languages (EN / ID)

The page is bilingual. The default follows the visitor's device language (Indonesian → ID, otherwise EN), detected on the server from `Accept-Language` and on the client from `navigator.languages`. Visitors can switch with the flag menu in the navbar; their choice is stored in the `synctappy_lang` cookie for a year. All copy lives in `app/content/en.ts` and `app/content/id.ts`, which share the `LandingContent` type.

## Cookies & privacy

The site sets only two cookies: `synctappy_consent` (essential, stores the visitor's choice) and `synctappy_lang` (preference, stored only with consent). The consent card is deliberately small and non-blocking. The Privacy Policy at `/privacy` is a **draft pending legal review**.

## Connecting the backend later

Content lives in `app/content/{en,id}.ts` as one typed `LandingContent` object per locale. To move it to Laravel, expose `GET /api/v1/landing?locale=xx` with the same shape and load it in `useLocale()` (e.g. with `useFetch`). Icons travel as string keys (`utils/icons.ts`), so payloads stay serializable. CTAs call `useCtaModal().open(intent)`; swap those calls for real routes (`/register`, `/login`, contact form) once they exist.

See **DESIGN.md** for the design system and **CLAUDE.md** for working rules and project status.
