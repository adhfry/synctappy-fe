<script setup lang="ts">
import type { IconKey } from '~/utils/icons'

defineProps<{ icon: IconKey, title: string, description: string }>()
</script>

<template>
  <article
    class="card group relative h-full p-6 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-brand-500/30 hover:shadow-[var(--shadow-lift)]"
  >
    <span class="grid size-11 place-items-center rounded-xl bg-mist-100 text-brand-600 transition-colors duration-500 group-hover:bg-brand-gradient group-hover:text-white">
      <UiIcon :name="icon" class="size-5" />
    </span>
    <h3 class="mt-5 text-lg font-semibold">{{ title }}</h3>
    <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ description }}</p>
    <slot />
  </article>
</template>
