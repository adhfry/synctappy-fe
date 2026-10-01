<template>
  <div class="@container relative mx-auto grid aspect-square w-[72%] place-items-center select-none" aria-hidden="true">
    <div class="absolute inset-[6%] rounded-full bg-brand-gradient opacity-20 blur-xl" />
    <div class="relative grid aspect-square w-full place-items-center rounded-full bg-white shadow-[0_30px_50px_-24px_rgb(13_20_64/0.45)] ring-1 ring-line transition-transform duration-700 ease-out group-hover:rotate-6">
      <div class="absolute inset-[5%] rounded-full border border-dashed border-brand-500/25" />
      <div class="flex w-[62%] flex-col items-center gap-[6%]">
        <UiLogoMark class="w-[34%]" />
        <UiQrGlyph :seed="23" class="w-[62%]" />
        <span class="font-display text-[6.5cqw] font-bold tracking-[0.2em] text-ink-900">TAP · SCAN</span>
      </div>
    </div>
  </div>
</template>
