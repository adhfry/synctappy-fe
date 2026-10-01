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
      // Placeholder until the production domain is confirmed.
      siteUrl,
      // Leave empty until an official contact channel exists; the UI hides the link when empty.
      contactHref: process.env.NUXT_PUBLIC_CONTACT_HREF || '',
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#ffffff' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Synctappy by Synvora' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: `${siteUrl}/images/synctappy/og-image.jpg` },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:url', content: siteUrl },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: `${siteUrl}/images/synctappy/og-image.jpg` },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'canonical', href: siteUrl },
        // Self-hosted fonts (no third-party request — see scripts/fetch-fonts.mjs)
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/plus-jakarta-sans-latin-1.woff2', crossorigin: '' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/space-grotesk-latin-3.woff2', crossorigin: '' },
      ],
    },
  },
})
