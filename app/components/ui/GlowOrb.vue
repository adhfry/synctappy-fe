<script setup lang="ts">
/** Soft, blurred color aura used sparingly behind key visuals. */
withDefaults(defineProps<{ tone?: 'blue' | 'violet' | 'cyan' | 'mixed' }>(), { tone: 'mixed' })

const gradients = {
  blue: 'radial-gradient(closest-side at center, rgb(59 108 255 / 0.35), transparent)',
  violet: 'radial-gradient(closest-side at center, rgb(123 92 255 / 0.3), transparent)',
  cyan: 'radial-gradient(closest-side at center, rgb(43 196 242 / 0.28), transparent)',
  mixed: 'radial-gradient(closest-side at 40% 45%, rgb(59 108 255 / 0.3), rgb(123 92 255 / 0.16) 55%, transparent)',
}
</script>

<template>
  <div class="pointer-events-none absolute rounded-full" :style="{ background: gradients[tone] }" aria-hidden="true" />
</template>
