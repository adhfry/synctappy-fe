<script setup lang="ts">
const { t } = useLocale()
const active = ref<string | null>(null)
</script>

<template>
  <section id="multi-link" class="section-y" aria-labelledby="multilink-title">
    <div class="container-x grid items-center gap-16 lg:grid-cols-[1fr_auto] lg:gap-20">
      <div>
        <UiSectionHeading
          id="multilink-title"
          :eyebrow="t.multiLink.eyebrow"
          :title="t.multiLink.title"
          :highlight="t.multiLink.highlight"
          :description="t.multiLink.description"
        />

        <ul class="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3" :aria-label="t.multiLink.listLabel">
          <li v-for="(d, i) in t.destinations" :key="d.id" v-reveal="i * 40">
            <button
              type="button"
              class="flex w-full items-center gap-3 rounded-2xl border bg-white p-3 text-left text-sm font-semibold transition-all duration-300"
              :class="active === d.id ? 'border-brand-500/50 text-ink-900 shadow-[var(--shadow-lift)] -translate-y-0.5' : 'border-line text-ink-800 hover:border-brand-500/30'"
              :aria-pressed="active === d.id"
              @mouseenter="active = d.id"
              @focus="active = d.id"
              @click="active = d.id"
            >
              <UiDestinationIcon :destination="d" size="sm" />
              <span class="truncate">{{ d.label }}</span>
            </button>
          </li>
        </ul>
        <p class="mt-5 text-xs text-ink-400">{{ t.multiLink.more }}</p>
      </div>

      <div v-reveal="150" class="relative mx-auto w-[280px] sm:w-[300px]" @mouseleave="active = null">
        <UiGlowOrb tone="mixed" class="-inset-24 opacity-80" />
        <UiDeviceMockup :label="t.multiLink.phoneLabel" class="relative">
          <MockupsProfileScreen :links="t.destinations" :active-id="active" :show-promo="false" compact />
        </UiDeviceMockup>
      </div>
    </div>
  </section>
</template>
