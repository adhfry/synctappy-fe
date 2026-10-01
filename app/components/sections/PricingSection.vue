<script setup lang="ts">
import { Building2, Check } from 'lucide-vue-next'
const { open } = useCtaModal()
const { t } = useLocale()
</script>

<template>
  <section id="pricing" class="section-y relative overflow-hidden bg-mist-50" aria-labelledby="pricing-title">
    <UiGlowOrb tone="mixed" class="left-1/2 top-0 size-[50rem] -translate-x-1/2 opacity-50" />
    <div class="container-x relative">
      <UiSectionHeading
        id="pricing-title"
        align="center"
        stack
        :eyebrow="t.pricing.eyebrow"
        :title="t.pricing.title"
        :highlight="t.pricing.highlight"
        :description="t.pricing.description"
      />

      <div class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:items-stretch">
        <article
          v-for="(plan, i) in t.pricing.plans"
          :key="plan.id"
          v-reveal="i * 90"
          class="relative flex flex-col rounded-[var(--radius-panel)] p-7 transition-transform duration-500 hover:-translate-y-1"
          :class="plan.highlighted
            ? 'bg-ink-950 text-white shadow-[0_30px_60px_-30px_rgb(35_86_245/0.7)] lg:-my-3 lg:py-10'
            : 'border border-line bg-white shadow-[var(--shadow-soft)]'"
        >
          <span v-if="plan.highlighted" class="absolute right-6 top-6 rounded-full bg-brand-gradient px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{{ t.pricing.recommended }}</span>
          <h3 class="text-xl font-bold" :class="plan.highlighted && 'text-white'">{{ plan.name }}</h3>
          <p class="mt-1 text-sm" :class="plan.highlighted ? 'text-white/60' : 'text-ink-500'">{{ plan.audience }}</p>

          <div class="mt-7">
            <p class="font-display text-3xl font-bold" :class="plan.highlighted ? 'text-white' : 'text-ink-900'">{{ plan.priceLabel }}</p>
            <p class="mt-1 text-xs" :class="plan.highlighted ? 'text-white/50' : 'text-ink-400'">{{ plan.priceNote }} · {{ plan.devices }}</p>
          </div>

          <ul class="mt-7 space-y-3 border-t pt-6" :class="plan.highlighted ? 'border-white/10' : 'border-line'">
            <li v-for="f in plan.features" :key="f" class="flex items-start gap-2.5 text-sm" :class="plan.highlighted ? 'text-white/85' : 'text-ink-600'">
              <Check class="mt-0.5 size-4 shrink-0" :class="plan.highlighted ? 'text-cyan-400' : 'text-brand-600'" stroke-width="2.5" aria-hidden="true" />
              {{ f }}
            </li>
          </ul>

          <div class="mt-auto pt-8">
            <UiButton
              block
              :variant="plan.id === 'trial' || plan.highlighted ? 'primary' : 'secondary'"
              @click="open(plan.id === 'trial' ? 'trial' : 'contact')"
            >{{ plan.cta }}</UiButton>
          </div>
        </article>
      </div>

      <div v-reveal class="mt-8 flex flex-col items-start justify-between gap-5 rounded-[var(--radius-panel)] border border-line bg-white p-6 sm:flex-row sm:items-center sm:p-7">
        <div class="flex items-start gap-4">
          <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-mist-100 text-brand-600">
            <Building2 class="size-5" aria-hidden="true" />
          </span>
          <div>
            <p class="font-display text-lg font-bold text-ink-900">{{ t.pricing.enterpriseTitle }}</p>
            <p class="text-sm text-ink-500">{{ t.pricing.enterpriseBody }}</p>
          </div>
        </div>
        <UiButton variant="secondary" arrow @click="open('contact')">{{ t.common.talkToSynvora }}</UiButton>
      </div>
    </div>
  </section>
</template>
