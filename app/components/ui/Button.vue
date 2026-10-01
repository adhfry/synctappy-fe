<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline-light'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  arrow?: boolean
  block?: boolean
}>(), { variant: 'primary', size: 'md', arrow: false, block: false })

defineEmits<{ click: [event: MouseEvent] }>()

const variants = {
  'primary':
    'bg-brand-gradient text-white shadow-[0_10px_24px_-10px_rgb(35_86_245/0.7)] hover:shadow-[0_16px_32px_-12px_rgb(90_80_255/0.75)] hover:-translate-y-0.5',
  'secondary':
    'bg-white text-ink-900 border border-line shadow-[var(--shadow-soft)] hover:border-brand-500/40 hover:-translate-y-0.5',
  'ghost':
    'text-ink-800 hover:bg-mist-100',
  'outline-light':
    'border border-white/25 text-white hover:bg-white/10 hover:border-white/45',
}
const sizes = {
  sm: 'h-10 px-4 text-sm gap-1.5',
  md: 'h-12 px-5 text-[0.95rem] gap-2',
  lg: 'h-14 px-7 text-base gap-2.5',
}

const classes = computed(() => [
  'group relative inline-flex items-center justify-center rounded-xl font-semibold whitespace-nowrap',
  'transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out active:translate-y-0 active:scale-[0.98]',
  variants[props.variant],
  sizes[props.size],
  props.block && 'w-full',
])
</script>

<template>
  <a v-if="href" :href="href" :class="classes" @click="$emit('click', $event)">
    <slot name="icon" />
    <slot />
    <ArrowRight v-if="arrow" class="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
  </a>
  <button v-else type="button" :class="classes" @click="$emit('click', $event)">
    <slot name="icon" />
    <slot />
    <ArrowRight v-if="arrow" class="size-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
  </button>
</template>
