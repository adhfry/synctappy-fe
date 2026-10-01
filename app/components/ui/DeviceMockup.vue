<script setup lang="ts">
/**
 * Phone frame. Width is controlled by the parent (e.g. class="w-[280px]");
 * the screen keeps a 9:19.5 aspect ratio so there is no layout shift.
 */
withDefaults(defineProps<{ label?: string, dark?: boolean }>(), { dark: false })
</script>

<template>
  <figure
    class="relative rounded-[2.75rem] bg-gradient-to-b from-[#2a3052] to-[#0c1030] p-[9px] shadow-[var(--shadow-device)]"
    :aria-label="label"
  >
    <!-- side buttons -->
    <span class="absolute -left-[2px] top-[22%] h-10 w-[3px] rounded-l bg-[#1b2045]" aria-hidden="true" />
    <span class="absolute -right-[2px] top-[28%] h-16 w-[3px] rounded-r bg-[#1b2045]" aria-hidden="true" />
    <div
      class="relative aspect-[9/19.5] overflow-hidden rounded-[2.2rem]"
      :class="dark ? 'bg-ink-950' : 'bg-mist-50'"
    >
      <div
        class="absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between px-6 text-[10px] font-semibold"
        :class="dark ? 'text-white' : 'text-ink-900'"
        aria-hidden="true"
      >
        <span>9:41</span>
        <span class="absolute left-1/2 top-2 h-[18px] w-[76px] -translate-x-1/2 rounded-full bg-black" />
        <span class="flex items-center gap-1">
          <span class="flex items-end gap-[1.5px]">
            <i class="block h-1 w-[2.5px] rounded-sm bg-current" /><i class="block h-1.5 w-[2.5px] rounded-sm bg-current" /><i class="block h-2 w-[2.5px] rounded-sm bg-current" />
          </span>
          <span class="ml-0.5 inline-block h-[9px] w-[17px] rounded-[3px] border border-current p-[1px]"><i class="block h-full w-3/4 rounded-[1px] bg-current" /></span>
        </span>
      </div>
      <slot />
    </div>
  </figure>
</template>
