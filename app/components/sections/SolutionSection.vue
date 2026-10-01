<script setup lang="ts">
const { t } = useLocale()
const pick = (ids: string[]) => computed(() => t.value.destinations.filter(d => ids.includes(d.id)))
const previewLinks = pick(['review', 'menu', 'whatsapp', 'location'])
const actions = pick(['review', 'whatsapp', 'menu', 'booking'])
</script>

<template>
  <section id="solution" class="section-y relative overflow-hidden bg-mist-50" aria-labelledby="solution-title">
    <UiGlowOrb tone="mixed" class="left-1/2 top-1/3 size-[56rem] -translate-x-1/2 opacity-60" />
    <div class="container-x relative">
      <UiSectionHeading
        id="solution-title"
        align="center"
        stack
        :eyebrow="t.solution.eyebrow"
        :title="t.solution.title"
        :highlight="t.solution.highlight"
        :description="t.solution.description"
      />

      <!-- visual flow: stand → signal → phone → actions -->
      <div class="mt-16 grid items-center gap-10 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1.05fr_auto_1fr] lg:gap-6">
        <div v-reveal class="mx-auto w-full max-w-[240px]">
          <MockupsStandMockup />
          <p class="mt-5 text-center text-sm font-semibold text-ink-900">{{ t.solution.touchpoint }}</p>
        </div>

        <!-- connector: touchpoint → phone -->
        <UiFlowConnector v-reveal="120" icon="nfc" :label="t.solution.tapScan" pulse />

        <div v-reveal="200" class="mx-auto w-[248px] md:col-start-3 lg:col-start-auto">
          <UiDeviceMockup :label="t.solution.phoneLabel">
            <MockupsProfileScreen :links="previewLinks" />
          </UiDeviceMockup>
        </div>

        <!-- connector: phone → actions (desktop only; on smaller screens the list sits below) -->
        <div v-reveal="260" class="hidden lg:block">
          <UiFlowConnector icon="click" :label="t.solution.takeAction" />
        </div>

        <ul v-reveal="320" class="mx-auto grid w-full max-w-xs gap-3 md:col-span-3 md:max-w-none md:grid-cols-4 lg:col-span-1 lg:max-w-xs lg:grid-cols-1">
          <li
            v-for="a in actions"
            :key="a.id"
            class="flex items-center gap-3 rounded-2xl border border-line bg-white p-3 shadow-[var(--shadow-soft)]"
          >
            <UiDestinationIcon :destination="a" />
            <span class="text-sm font-semibold text-ink-900">{{ a.label }}</span>
          </li>
        </ul>
      </div>

      <!-- core concept strip -->
      <ol class="mt-20 grid gap-px overflow-hidden rounded-[var(--radius-panel)] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        <li v-for="(f, i) in t.solution.flow" :key="f.title" v-reveal="i * 80" class="bg-white p-6">
          <p class="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-600">{{ f.label }}</p>
          <p class="mt-2 font-display text-xl font-bold text-ink-900">{{ f.title }}</p>
          <p class="mt-1.5 text-sm text-ink-500">{{ f.text }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
