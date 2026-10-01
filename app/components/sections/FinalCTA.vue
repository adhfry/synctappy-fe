<script setup lang="ts">
const { open } = useCtaModal()
const { t } = useLocale()
</script>

<template>
  <section id="get-started" class="relative overflow-hidden bg-ink-950 pb-28 pt-20 text-white md:pb-36 md:pt-24" aria-labelledby="cta-final-title">
    <div class="pointer-events-none absolute inset-0" aria-hidden="true">
      <UiGlowOrb tone="blue" class="-left-40 top-0 size-[40rem] opacity-50" />
    </div>

    <div class="container-x relative grid items-center gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-6">
      <div class="relative z-10">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">{{ t.finalCta.eyebrow }}</p>
        <h2 id="cta-final-title" v-reveal="60" class="mt-5 text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[0.98] tracking-[-0.035em] text-white">
          {{ t.finalCta.titleLead }}<br><span class="text-gradient [background-image:linear-gradient(95deg,#2bc4f2,#5b7cff_45%,#a07bff)]">{{ t.finalCta.titleHighlight }}</span>
        </h2>
        <p v-reveal="120" class="mt-6 max-w-md text-lg leading-relaxed text-white/70">
          {{ t.finalCta.subtitle }}
        </p>
        <div v-reveal="180" class="mt-9 flex flex-col gap-3 sm:flex-row">
          <UiButton size="lg" arrow @click="open('trial')">{{ t.common.startTrial }}</UiButton>
          <UiButton size="lg" variant="outline-light" @click="open('contact')">{{ t.common.talkToSynvora }}</UiButton>
        </div>
      </div>

      <!-- Original PNG supplied by the user, used directly (no WebP derivatives, edits, blending or masking) -->
      <div v-reveal="{ delay: 100, variant: 'fade' }" class="relative overflow-hidden rounded-[1.25rem] md:rounded-[1.75rem]">
        <img
          src="/images/synctappy/tap-connect-grow.png"
          width="1536"
          height="1024"
          loading="lazy"
          decoding="async"
          :alt="t.finalCta.imageAlt"
          class="block aspect-[3/2] w-full"
        >
      </div>
    </div>
  </section>
</template>
