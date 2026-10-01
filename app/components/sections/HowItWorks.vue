<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="how-it-works" class="section-y" aria-labelledby="how-title">
    <div class="container-x">
      <UiSectionHeading
        id="how-title"
        align="center"
        stack
        :eyebrow="t.how.eyebrow"
        :title="t.how.title"
        :highlight="t.how.highlight"
        :description="t.how.description"
      />

      <ol v-reveal="{ variant: 'fade' }" class="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <!-- progress line (desktop) -->
        <li class="pointer-events-none absolute left-[12.5%] right-[12.5%] top-8 hidden h-0.5 lg:block" aria-hidden="true">
          <span class="absolute inset-0 rounded-full bg-line" />
          <span class="absolute inset-0 origin-left scale-x-0 rounded-full bg-brand-gradient transition-transform delay-300 duration-[1600ms] ease-out in-[.is-visible]:scale-x-100" />
        </li>

        <li
          v-for="(step, i) in t.how.steps"
          :key="step.number"
          v-reveal="i * 140"
          class="relative flex flex-col items-center text-center"
        >
          <div class="relative z-10 grid size-16 place-items-center rounded-2xl bg-white shadow-[var(--shadow-lift)] ring-1 ring-line">
            <span class="grid size-11 place-items-center rounded-xl bg-brand-gradient text-white">
              <UiIcon :name="step.icon" class="size-5" />
            </span>
          </div>
          <p class="mt-6 font-display text-sm font-bold tracking-[0.2em] text-brand-600">{{ step.number }}</p>
          <h3 class="mt-2 text-xl font-bold uppercase tracking-wide">{{ step.title }}</h3>
          <p class="mt-3 max-w-[16rem] text-sm leading-relaxed text-ink-500">{{ step.description }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
