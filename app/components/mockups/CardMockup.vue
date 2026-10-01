<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <div class="relative w-full select-none [perspective:900px]" aria-hidden="true">
    <div class="relative mx-auto aspect-[1.586] w-full rotate-x-[18deg] -rotate-z-6 overflow-hidden rounded-[7%/11%] bg-[linear-gradient(135deg,#0d1440_0%,#1d2a8a_48%,#5b3fe0_100%)] p-[7%] text-white shadow-[0_40px_60px_-28px_rgb(13_20_64/0.6)] transition-transform duration-700 ease-out group-hover:-rotate-z-3 group-hover:rotate-x-[10deg]">
      <div class="absolute -right-[20%] -top-[40%] size-[80%] rounded-full bg-cyan-400/25 blur-2xl" />
      <div class="relative flex h-full flex-col justify-between">
        <div class="flex items-start justify-between">
          <UiLogo inverted class="h-7" />
          <svg viewBox="0 0 24 24" class="size-6 text-white/80" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
            <path d="M8.5 7a7 7 0 0 1 0 10M12 4.5a11 11 0 0 1 0 15M5 9.5a3.5 3.5 0 0 1 0 5" />
          </svg>
        </div>
        <div>
          <p class="font-display text-sm font-semibold tracking-wide">{{ t.cardMockup.tapToConnect }}</p>
          <p class="text-[10px] text-white/60">go.synctappy.id/you</p>
        </div>
      </div>
    </div>
  </div>
</template>
