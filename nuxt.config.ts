import tailwindcss from '@tailwindcss/vite'

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://synctappy.biz.id'
const title = 'Synctappy — Smart Touchpoint Platform'
const description = 'Turn every tap and scan into a digital experience with Synctappy.'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
    public: {
      // Production domain (override with NUXT_PUBLIC_SITE_URL)
      siteUrl,
      // Leave empty until an official contact channel exists; the UI hides the link when empty.
      contactHref: process.env.NUXT_PUBLIC_CONTACT_HREF || '',
    },
  },

  app: {
    head: {
      // English fallbacks only; per-page + localized tags come from
      // app.vue (site-wide) and usePageSeo() (per page).
      htmlAttrs: { lang: 'en' },
      title,
      meta: [{ name: 'description', content: description }],
      link: [
        // Self-hosted fonts (no third-party request — see scripts/fetch-fonts.mjs)
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/plus-jakarta-sans-latin-1.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/space-grotesk-latin-3.woff2', crossorigin: '' },
      ],
    },
  },

  routeRules: {
    // Security headers for every response
    '/**': {
      headers: {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'SAMEORIGIN',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
        'Strict-Transport-Security': 'max-age=31536000',
      },
    },
    // Long-lived caching for static assets (rename a font file if its content changes)
    '/fonts/**': { headers: { 'Cache-Control': 'public, max-age=31536000' } },
    '/images/**': { headers: { 'Cache-Control': 'public, max-age=2592000, stale-while-revalidate=86400' } },
    '/brand/**': { headers: { 'Cache-Control': 'public, max-age=2592000, stale-while-revalidate=86400' } },
    '/favicon.ico': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/favicon-32.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/favicon-192.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/favicon-512.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
    '/apple-touch-icon.png': { headers: { 'Cache-Control': 'public, max-age=604800' } },
  },
})
