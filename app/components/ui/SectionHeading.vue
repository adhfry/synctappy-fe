<script setup lang="ts">
/**
 * Section eyebrow + H2 + lead. Put the highlighted phrase in the `highlight`
 * prop; it renders after `title` in the brand gradient.
 */
withDefaults(defineProps<{
  eyebrow: string
  title: string
  highlight?: string
  description?: string
  align?: 'left' | 'center'
  inverted?: boolean
  /** Put the highlight on its own line */
  stack?: boolean
  id?: string
}>(), { align: 'left', inverted: false, stack: false })
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'">
    <p
      v-reveal
      class="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em]"
      :class="inverted ? 'border-white/20 text-cyan-400' : 'border-brand-500/25 bg-white text-brand-600'"
    >
      <span class="size-1.5 rounded-full bg-brand-gradient" aria-hidden="true" />
      {{ eyebrow }}
    </p>
    <h2
      :id="id"
      v-reveal="60"
      class="mt-5 text-[clamp(2rem,4.2vw,3.25rem)] font-bold leading-[1.06]"
      :class="inverted && 'text-white'"
    >
      {{ title }}<template v-if="highlight">
        {{ ' ' }}<span class="text-gradient" :class="stack && 'block'">{{ highlight }}</span>
      </template>
    </h2>
    <p
      v-if="description || $slots.default"
      v-reveal="120"
      class="mt-5 text-base leading-relaxed md:text-lg"
      :class="inverted ? 'text-white/70' : 'text-ink-500'"
    >
      <slot>{{ description }}</slot>
    </p>
  </div>
</template>
