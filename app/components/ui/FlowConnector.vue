<script setup lang="ts">
import type { IconKey } from '~/utils/icons'

/**
 * Step connector for flow diagrams: gradient icon node + label, with a
 * dashed line that "flows" left → right on desktop (static under
 * reduced motion).
 */
withDefaults(defineProps<{ icon: IconKey, label: string, pulse?: boolean }>(), { pulse: false })
</script>

<template>
  <div class="relative flex flex-col items-center gap-3 lg:w-28">
    <!-- flowing dashed line behind the node (desktop, horizontal flow) -->
    <span
      class="absolute left-[-1.5rem] right-[-1.5rem] top-8 hidden h-0.5 -translate-y-1/2 animate-dash-flow bg-[repeating-linear-gradient(90deg,var(--color-brand-500)_0_8px,transparent_8px_16px)] opacity-60 lg:block"
      aria-hidden="true"
    />
    <div class="relative grid size-16 place-items-center">
      <span v-if="pulse" class="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/30" aria-hidden="true" />
      <span class="relative grid size-12 place-items-center rounded-full bg-brand-gradient text-white shadow-[0_10px_24px_-8px_rgb(35_86_245/0.7)] ring-4 ring-white">
        <UiIcon :name="icon" class="size-5" />
      </span>
    </div>
    <span class="relative whitespace-nowrap rounded-full bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-ink-600 shadow-[var(--shadow-soft)]">{{ label }}</span>
  </div>
</template>
