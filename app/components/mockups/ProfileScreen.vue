<script setup lang="ts">
import type { Destination } from '~/types/content'

/**
 * Phone screen: the Synctappy smart profile a customer lands on after a tap.
 * "KopiKu Coffee & Eatery" is the demo business used across the brand assets.
 * `compact` shrinks the cover so long link lists (up to 9) fit the screen.
 */
withDefaults(defineProps<{
  links: Destination[]
  activeId?: string | null
  showPromo?: boolean
  compact?: boolean
}>(), { activeId: null, showPromo: true, compact: false })

const { t } = useLocale()
</script>

<template>
  <div class="absolute inset-0 flex flex-col overflow-hidden text-left">
    <!-- cover -->
    <div
      class="relative shrink-0 bg-[radial-gradient(120%_90%_at_30%_10%,#6b4a33_0%,#2b1c14_60%,#150e0a_100%)]"
      :class="compact ? 'h-[17%]' : 'h-[24%]'"
    >
      <div class="absolute inset-0 bg-[radial-gradient(40%_50%_at_75%_40%,rgb(255_196_120/0.35),transparent)]" />
      <div class="absolute inset-x-0 bottom-0 flex translate-y-1/2 justify-center">
        <span
          class="grid place-items-center rounded-full border-[3px] border-white bg-[#2b1c14] font-display font-bold text-amber-100 shadow-lg"
          :class="compact ? 'size-11 text-base' : 'size-14 text-lg'"
        >K</span>
      </div>
    </div>
    <div class="px-4 text-center" :class="compact ? 'pt-7' : 'pt-9'">
      <p class="font-display text-[15px] font-bold text-ink-900">KopiKu</p>
      <p class="text-[10px] text-ink-500">{{ t.profileScreen.demoProfile }}</p>
    </div>
    <ul class="flex flex-col px-3.5" :class="compact ? 'mt-2.5 gap-1' : 'mt-3 gap-1.5'">
      <li
        v-for="(link, i) in links"
        :key="link.id"
        class="flex items-center gap-2.5 rounded-xl border px-2 text-[11px] font-semibold transition-all duration-300"
        :class="[
          compact ? 'py-1' : 'py-1.5',
          activeId === link.id
            ? 'scale-[1.04] border-brand-500/60 bg-white text-ink-900 shadow-[0_8px_20px_-8px_rgb(35_86_245/0.55)]'
            : i === 0 && !activeId
              ? 'border-transparent bg-brand-gradient text-white shadow-md'
              : 'border-line bg-white text-ink-800',
        ]"
      >
        <UiDestinationIcon :destination="link" size="sm" />
        <span class="truncate">{{ link.id === 'review' ? t.profileScreen.shareOnGoogle : link.label }}</span>
        <svg viewBox="0 0 24 24" class="ml-auto size-3 shrink-0 opacity-60" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 6 6 6-6 6" /></svg>
      </li>
    </ul>
    <div v-if="showPromo" class="mx-3.5 mt-2 flex items-center gap-2 overflow-hidden rounded-xl bg-[linear-gradient(120deg,#3a2417,#7a4b2a)] p-2.5 text-white">
      <div class="min-w-0">
        <p class="text-[8px] uppercase tracking-widest text-amber-200/80">{{ t.profileScreen.thisWeek }}</p>
        <p class="truncate font-display text-[12px] font-semibold">{{ t.profileScreen.featured }}</p>
      </div>
      <span class="ml-auto grid size-6 shrink-0 place-items-center rounded-full bg-white/90 text-[#3a2417]">
        <svg viewBox="0 0 24 24" class="size-3" fill="none" stroke="currentColor" stroke-width="3"><path d="m9 6 6 6-6 6" /></svg>
      </span>
    </div>
    <p class="mt-auto pb-3 pt-2 text-center text-[8px] font-medium text-ink-400">{{ t.profileScreen.poweredBy }}</p>
  </div>
</template>
