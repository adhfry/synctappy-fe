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

// Localized SEO (defaults in nuxt.config.ts are the English fallback)
useSeoMeta({
  title: () => t.value.meta.title,
  description: () => t.value.meta.description,
  ogTitle: () => t.value.meta.title,
  ogDescription: () => t.value.meta.description,
  ogLocale: () => t.value.meta.ogLocale,
  twitterTitle: () => t.value.meta.title,
  twitterDescription: () => t.value.meta.description,
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
