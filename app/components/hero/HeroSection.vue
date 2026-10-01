<script setup lang="ts">
import { Nfc, Play } from 'lucide-vue-next'
const { open } = useCtaModal()
const { t, locale } = useLocale()
const heroSrcset = [640, 960, 1280, 1672]
  .map(w => `/images/synctappy/hero-banner-${w}.webp ${w}w`)
  .join(', ')

useHead({
  link: [{
    rel: 'preload', as: 'image', type: 'image/webp',
    imagesrcset: heroSrcset, imagesizes: '(min-width: 1024px) 58vw, 100vw',
    fetchpriority: 'high',
  }],
})
</script>

<template>
  <section id="top" class="relative overflow-hidden pb-24 pt-[104px] md:pb-32 lg:pt-[128px]" aria-labelledby="hero-title">
    <!-- background aura -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,#f3f6ff_0%,#f7f9ff_60%,#eef3ff_100%)]" />
      <UiGlowOrb tone="mixed" class="-right-[10%] -top-[20%] size-[60rem] opacity-90" />
      <UiGlowOrb tone="cyan" class="-left-[15%] top-[30%] size-[36rem] opacity-60" />
      <div class="absolute inset-0 bg-[radial-gradient(rgb(13_20_64/0.05)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:radial-gradient(70%_60%_at_70%_30%,#000,transparent)]" />
    </div>

    <div class="container-x grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-14">
      <!-- copy -->
      <div class="max-w-2xl">
        <p class="hero-in inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-white/80 px-3.5 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-600 shadow-[var(--shadow-soft)]">
          <span class="relative flex size-2" aria-hidden="true">
            <span class="absolute inline-flex size-full animate-pulse-ring rounded-full bg-brand-500" />
            <span class="relative inline-flex size-2 rounded-full bg-brand-gradient" />
          </span>
          {{ t.hero.eyebrow }}
        </p>

        <h1
          id="hero-title"
          class="hero-in mt-6 font-bold leading-[1.02] tracking-[-0.035em]"
          :class="locale === 'id' ? 'text-[clamp(2.4rem,4.4vw,4.3rem)]' : 'text-[clamp(2.6rem,5.3vw,5.1rem)]'"
          style="--d: 80ms"
        >
          {{ t.hero.titleLead }} <span class="text-gradient">{{ t.hero.titleHighlight }}</span>
        </h1>

        <p class="hero-in mt-6 max-w-xl text-lg leading-relaxed text-ink-500 md:text-xl" style="--d: 160ms">
          {{ t.hero.subtitle }}
        </p>

        <div class="hero-in mt-9 flex flex-col gap-3 sm:flex-row" style="--d: 240ms">
          <UiButton size="lg" arrow @click="open('trial')">{{ t.hero.ctaPrimary }}</UiButton>
          <UiButton size="lg" variant="secondary" href="#how-it-works">
            <template #icon>
              <span class="grid size-6 place-items-center rounded-full bg-brand-100 text-brand-600">
                <Play class="size-3 fill-current" aria-hidden="true" />
              </span>
            </template>
            {{ t.hero.ctaSecondary }}
          </UiButton>
        </div>

        <ul class="hero-in mt-12 grid max-w-xl grid-cols-2 gap-x-6 gap-y-5 border-t border-ink-900/8 pt-7" style="--d: 320ms">
          <li v-for="item in t.hero.highlights" :key="item.title" class="flex items-center gap-3">
            <span class="grid size-10 shrink-0 place-items-center rounded-full bg-white text-brand-600 shadow-[var(--shadow-soft)] ring-1 ring-line">
              <UiIcon :name="item.icon" class="size-[18px]" />
            </span>
            <span class="leading-tight">
              <span class="block text-sm font-bold text-ink-900">{{ item.title }}</span>
              <span class="block text-xs text-ink-500">{{ item.description }}</span>
            </span>
          </li>
        </ul>
      </div>

      <!-- product visual -->
      <div class="hero-in relative lg:-mr-4 2xl:-mr-12" style="--d: 200ms">
        <UiGlowOrb tone="blue" class="-inset-10 opacity-70" />
        <div class="ring-gradient relative overflow-hidden rounded-[1.5rem] bg-ink-900 shadow-[var(--shadow-device)] md:rounded-[2rem]">
          <picture>
            <source type="image/webp" :srcset="heroSrcset" sizes="(min-width: 1024px) 58vw, 100vw">
            <img
              src="/images/synctappy/hero-banner.png"
              width="1672"
              height="941"
              :alt="t.hero.imageAlt"
              class="block aspect-[1672/941] w-full object-cover"
              fetchpriority="high"
              decoding="async"
            >
          </picture>
        </div>

        <!-- callouts -->
        <div class="absolute -top-5 left-4 flex animate-float items-center gap-3 rounded-2xl border border-white/70 bg-white/90 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur-md sm:left-8 md:-top-7">
          <span class="grid size-9 place-items-center rounded-xl bg-brand-gradient text-white">
            <Nfc class="size-[18px]" aria-hidden="true" />
          </span>
          <span class="text-xs leading-tight">
            <span class="block font-bold text-ink-900">{{ t.hero.tapTitle }}</span>
            <span class="block text-ink-500">{{ t.hero.tapSubtitle }}</span>
          </span>
        </div>

        <div class="absolute -bottom-6 right-4 hidden items-center gap-3 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[var(--shadow-lift)] backdrop-blur-md sm:flex md:right-8">
          <UiBrandIcon name="google" class="size-7" />
          <span class="text-xs leading-tight">
            <span class="block font-semibold text-ink-400">go.synctappy.biz.id/kopiku</span>
            <span class="block font-bold text-ink-900">{{ t.hero.reviewCallout }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
