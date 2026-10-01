<script setup lang="ts">
import { ArrowRight, CircleX } from 'lucide-vue-next'

const { t } = useLocale()
</script>

<template>
  <section id="problem" class="section-y" aria-labelledby="problem-title">
    <div class="container-x grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-10">
      <div class="lg:col-span-5">
        <UiSectionHeading
          id="problem-title"
          :eyebrow="t.problem.eyebrow"
          :title="t.problem.title"
          :highlight="t.problem.highlight"
          :description="t.problem.description"
        />
      </div>

      <ul class="grid gap-3 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
        <li
          v-for="(item, i) in t.problem.items"
          :key="item"
          v-reveal="i * 60"
          class="flex items-start gap-3 rounded-2xl border border-line bg-white px-4 py-3.5 text-sm font-medium text-ink-800"
        >
          <CircleX class="mt-0.5 size-[18px] shrink-0 text-rose-500" aria-hidden="true" />
          {{ item }}
        </li>
      </ul>

      <div v-reveal="200" class="lg:col-span-3">
        <a
          href="#solution"
          class="ring-gradient group relative block overflow-hidden rounded-[var(--radius-panel)] bg-[linear-gradient(160deg,#ffffff_0%,#eef3ff_100%)] p-7 shadow-[var(--shadow-lift)] transition-transform duration-500 hover:-translate-y-1"
        >
          <UiGlowOrb tone="violet" class="-right-16 -top-16 size-56" />
          <UiLogoMark class="relative size-14" />
          <p class="relative mt-5 font-display text-2xl font-bold leading-tight text-ink-900">
            {{ t.problem.cardLead }} <span class="text-gradient">{{ t.problem.cardHighlight }}</span>
          </p>
          <p class="relative mt-3 text-sm leading-relaxed text-ink-500">
            {{ t.problem.cardBody }}
          </p>
          <span class="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
            {{ t.problem.cardCta }}
            <ArrowRight class="size-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
