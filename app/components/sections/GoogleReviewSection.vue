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
          <div class="pb-8 sm:pb-10">
            <MockupsStandMockup />
            <div class="mx-auto mt-4 flex w-fit items-center justify-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 text-[10px] font-semibold text-ink-800 shadow-[var(--shadow-soft)] sm:mt-5 sm:text-[11px]">
              <UiIcon name="nfc" class="size-3 text-brand-600 sm:size-3.5" />
              {{ t.review.tapScan }}
              <span class="text-ink-400">→</span>
              <UiBrandIcon name="google" class="size-3 sm:size-3.5" />
            </div>
          </div>

          <UiDeviceMockup :label="t.review.phoneLabel">
            <!-- Screen content scales with the phone width (cqw) so it never crowds -->
            <div class="@container absolute inset-0">
            <div class="flex h-full flex-col bg-white px-[7cqw] pb-[7cqw] pt-[17cqw]">
              <div class="flex items-center gap-[2.5cqw]">
                <UiBrandIcon name="google" class="size-[8cqw]" />
                <span class="text-[4.6cqw] font-semibold text-ink-500">{{ t.review.googleReviews }}</span>
              </div>
              <div class="mt-[6cqw] flex items-center gap-[3.5cqw]">
                <span class="grid size-[14cqw] shrink-0 place-items-center rounded-full bg-[#2b1c14] font-display text-[5.5cqw] font-bold text-amber-100">K</span>
                <div class="min-w-0">
                  <p class="truncate text-[5.2cqw] font-bold leading-tight text-ink-900">KopiKu Coffee & Eatery</p>
                  <p class="truncate text-[3.8cqw] leading-tight text-ink-400">{{ t.review.postingPublicly }}</p>
                </div>
              </div>
              <div class="mt-[7cqw] flex justify-center gap-[2.5cqw]" aria-hidden="true">
                <svg v-for="n in 5" :key="n" viewBox="0 0 24 24" class="size-[10cqw] fill-none stroke-ink-400" stroke-width="1.6" stroke-linejoin="round">
                  <path d="m12 2.5 2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
                </svg>
              </div>
              <!-- review box grows to fill the screen, like the real Google sheet -->
              <div class="mt-[7cqw] min-h-[30cqw] flex-1 rounded-[4cqw] border border-line bg-mist-50 p-[4cqw] text-[3.9cqw] leading-snug text-ink-400">
                {{ t.review.placeholder }}
              </div>
              <span class="mt-[5cqw] self-end rounded-full bg-g-blue px-[6cqw] py-[2.4cqw] text-[4.2cqw] font-semibold text-white">{{ t.review.post }}</span>
              <div class="mt-[6cqw] flex h-[1.2cqw] min-h-[3px] overflow-hidden rounded-full" aria-hidden="true">
                <span class="flex-1 bg-g-blue" /><span class="flex-1 bg-g-red" /><span class="flex-1 bg-g-yellow" /><span class="flex-1 bg-g-green" />
              </div>
            </div>
            </div>
          </UiDeviceMockup>
        </div>
      </div>
    </div>
  </section>
</template>
