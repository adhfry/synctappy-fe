<script setup lang="ts">
const { t, locale } = useLocale()

useHead({
  htmlAttrs: { lang: locale },
  script: [{
    // Enables scroll-reveal styles before first paint (only when JS runs
    // and the user hasn't asked for reduced motion).
    innerHTML: `if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reveal-ready')`,
    tagPriority: 'critical',
  }],
})

// Site-wide head tags. Page-specific SEO (title, description, canonical,
// hreflang, Open Graph, Twitter, JSON-LD) lives in usePageSeo() per page.
useSeoMeta({
  applicationName: 'Synctappy',
  appleMobileWebAppTitle: 'Synctappy',
  author: 'Synvora Teknologi Indonesia',
  creator: 'Synvora Teknologi Indonesia',
  publisher: 'Synvora Teknologi Indonesia',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  themeColor: '#ffffff',
  colorScheme: 'light',
  formatDetection: 'telephone=no',
  referrer: 'strict-origin-when-cross-origin',
  ogSiteName: 'Synctappy by Synvora',
})

useHead({
  link: [
    { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
})
</script>

<template>
  <div>
    <a
      href="#main"
      class="fixed left-4 top-3 z-[60] -translate-y-20 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white transition-transform focus:translate-y-0"
    >{{ t.common.skipToContent }}</a>
    <LayoutNavbar />
    <NuxtPage />
    <LayoutFooter />
    <LayoutCtaModal />
    <LayoutCookieConsent />
  </div>
</template>
