<script setup lang="ts">
const { public: { siteUrl } } = useRuntimeConfig()
const { t, locale } = useLocale()

useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: () => JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      'name': 'Synctappy',
      'applicationCategory': 'BusinessApplication',
      'operatingSystem': 'Web',
      'inLanguage': locale.value,
      'description': t.value.meta.description,
      'url': siteUrl,
      'publisher': { '@type': 'Organization', 'name': 'Synvora' },
    }),
  }],
})
</script>

<template>
  <main id="main">
    <!-- 01 --> <HeroSection />
    <div class="relative z-10 -mt-10 overflow-hidden rounded-t-[2rem] bg-white shadow-[0_-20px_50px_-30px_rgb(13_20_64/0.25)] md:-mt-14 md:rounded-t-[2.75rem]">
      <!-- 02 --> <SectionsProblemSection />
      <!-- 03 --> <SectionsSolutionSection />
      <!-- 04 --> <SectionsHowItWorks />
      <!-- 05 --> <SectionsGoogleReviewSection />
      <!-- 06 --> <SectionsMultiLinkSection />
      <!-- 07 --> <SectionsSmartProfileSection />
      <!-- 08 --> <SectionsDynamicLinkSection />
      <!-- 09 --> <SectionsAnalyticsSection />
      <!-- 10 --> <SectionsCampaignSection />
      <!-- 11 --> <SectionsHardwareSection />
      <!-- 12 --> <SectionsUseCasesSection />
      <!-- 13 --> <SectionsWhySection />
      <!-- 14 --> <SectionsPricingSection />
    </div>
    <!-- 15 --> <SectionsFinalCTA />
  </main>
</template>
