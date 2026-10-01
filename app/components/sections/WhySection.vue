<script setup lang="ts">
import { Check, Minus } from 'lucide-vue-next'

const { t } = useLocale()
</script>

<template>
  <section id="why" class="section-y" aria-labelledby="why-title">
    <div class="container-x">
      <UiSectionHeading
        id="why-title"
        align="center"
        stack
        :eyebrow="t.why.eyebrow"
        :title="t.why.title"
        :highlight="t.why.highlight"
      />

      <ul class="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(b, i) in t.why.benefits" :key="b.title" v-reveal="i * 90">
          <UiFeatureCard :icon="b.icon" :title="b.title" :description="b.description" />
        </li>
      </ul>

      <!-- visual comparison -->
      <div v-reveal="120" class="mt-8 grid overflow-hidden rounded-[var(--radius-panel)] border border-line md:grid-cols-2">
        <div class="bg-mist-50 p-7 sm:p-9">
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-ink-400">{{ t.why.typicalLabel }}</p>
          <ul class="mt-5 space-y-3.5">
            <li v-for="item in t.why.typical" :key="item" class="flex items-center gap-3 text-[0.95rem] text-ink-500">
              <span class="grid size-6 place-items-center rounded-full bg-white text-ink-400 ring-1 ring-line"><Minus class="size-3.5" aria-hidden="true" /></span>
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="relative overflow-hidden bg-white p-7 sm:p-9">
          <UiGlowOrb tone="blue" class="-right-20 -top-20 size-64 opacity-50" />
          <p class="relative flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600">
            <UiLogoMark class="size-5" /> Synctappy
          </p>
          <ul class="relative mt-5 space-y-3.5">
            <li v-for="item in t.why.synctappy" :key="item" class="flex items-center gap-3 text-[0.95rem] font-semibold text-ink-900">
              <span class="grid size-6 place-items-center rounded-full bg-brand-gradient text-white"><Check class="size-3.5" stroke-width="3" aria-hidden="true" /></span>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
