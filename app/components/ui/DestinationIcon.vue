<script setup lang="ts">
import type { Destination } from '~/types/content'

withDefaults(defineProps<{
  destination: Pick<Destination, 'icon' | 'brand' | 'tone'>
  size?: 'sm' | 'md'
}>(), { size: 'md' })

const tones: Record<Destination['tone'], string> = {
  blue: 'bg-brand-100 text-brand-600',
  green: 'bg-emerald-50 text-emerald-600',
  red: 'bg-rose-50 text-rose-500',
  violet: 'bg-violet-100 text-violet-600',
  amber: 'bg-amber-50 text-amber-600',
  cyan: 'bg-sky-50 text-sky-600',
  pink: 'bg-pink-50 text-pink-600',
  slate: 'bg-mist-100 text-ink-600',
}
</script>

<template>
  <span
    class="inline-grid shrink-0 place-items-center"
    :class="[
      size === 'sm' ? 'size-7 rounded-lg' : 'size-10 rounded-xl',
      destination.brand ? 'bg-white shadow-[0_1px_3px_rgb(13_20_64/0.1)]' : tones[destination.tone],
    ]"
  >
    <UiBrandIcon v-if="destination.brand" :name="destination.brand" :class="size === 'sm' ? 'size-4' : 'size-5'" />
    <UiIcon v-else :name="destination.icon" :class="size === 'sm' ? 'size-3.5' : 'size-[18px]'" />
  </span>
</template>
