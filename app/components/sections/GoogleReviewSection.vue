<script setup lang="ts">
import { Check, ShieldCheck } from 'lucide-vue-next'

const { t } = useLocale()
</script>

<template>
  <section id="google-review" class="section-y relative overflow-hidden bg-mist-50" aria-labelledby="review-title">
    <div class="container-x grid items-center gap-16 lg:grid-cols-2">
      <div>
        <UiSectionHeading
          id="review-title"
          :eyebrow="t.review.eyebrow"
          :title="t.review.title"
          :highlight="t.review.highlight"
          :description="t.review.description"
        />
        <ul class="mt-8 space-y-3">
          <li v-for="(p, i) in t.review.points" :key="p" v-reveal="140 + i * 70" class="flex items-start gap-3 text-[0.95rem] font-medium text-ink-800">
            <span class="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-600 text-white">
              <Check class="size-3" stroke-width="3" aria-hidden="true" />
            </span>
            {{ p }}
          </li>
        </ul>
        <p v-reveal="360" class="mt-8 flex max-w-lg items-start gap-3 rounded-2xl border border-line bg-white p-4 text-xs leading-relaxed text-ink-500">
          <ShieldCheck class="size-5 shrink-0 text-g-green" aria-hidden="true" />
          {{ t.review.compliance }}
        </p>
      </div>

      <!-- visual: stand → tap → Google review screen -->
      <div v-reveal="120" class="relative mx-auto w-full max-w-[520px]">
        <UiGlowOrb tone="blue" class="inset-0 scale-125 opacity-70" />
        <div class="relative grid grid-cols-[0.8fr_1fr] items-end gap-4 sm:gap-6">
          <div class="pb-10">
            <MockupsStandMockup />
            <div class="mt-5 flex items-center justify-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-bold text-ink-800 shadow-[var(--shadow-soft)]">
              <UiIcon name="nfc" class="size-4 text-brand-600" />
              {{ t.review.tapScan }}
              <span class="text-ink-400">→</span>
              <UiBrandIcon name="google" class="size-4" />
            </div>
          </div>

          <UiDeviceMockup :label="t.review.phoneLabel">
            <div class="absolute inset-0 flex flex-col bg-white px-4 pt-12">
              <div class="flex items-center gap-2">
                <UiBrandIcon name="google" class="size-6" />
                <span class="text-[11px] font-semibold text-ink-500">{{ t.review.googleReviews }}</span>
              </div>
              <div class="mt-5 flex items-center gap-3">
                <span class="grid size-11 place-items-center rounded-full bg-[#2b1c14] font-display font-bold text-amber-100">K</span>
                <div>
                  <p class="text-sm font-bold text-ink-900">KopiKu Coffee & Eatery</p>
                  <p class="text-[10px] text-ink-400">{{ t.review.postingPublicly }}</p>
                </div>
              </div>
              <div class="mt-6 flex justify-center gap-1.5" aria-hidden="true">
                <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" class="size-7 fill-none stroke-ink-400" stroke-width="1.6" stroke-linejoin="round">
                  <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                </svg>
              </div>
              <div class="mt-5 h-24 rounded-xl border border-line bg-mist-50 p-3 text-[10px] text-ink-400">
                {{ t.review.placeholder }}
              </div>
              <span class="mt-4 self-end rounded-full bg-g-blue px-5 py-2 text-[11px] font-semibold text-white">{{ t.review.post }}</span>
              <div class="mt-auto mb-5 flex h-1 overflow-hidden rounded-full" aria-hidden="true">
                <span class="flex-1 bg-g-blue" /><span class="flex-1 bg-g-red" /><span class="flex-1 bg-g-yellow" /><span class="flex-1 bg-g-green" />
              </div>
            </div>
          </UiDeviceMockup>
        </div>
      </div>
    </div>
  </section>
</template>
