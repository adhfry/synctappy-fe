<script setup lang="ts">
/**
 * Official Synctappy "S" mark (from public/brand/Logo-S-nobg.png).
 * Decorative by default — size it with width/size classes.
 */
withDefaults(defineProps<{ alt?: string }>(), { alt: '' })
</script>

<template>
  <picture class="inline-block aspect-square shrink-0">
    <source type="image/webp" srcset="/brand/web/mark.webp 256w, /brand/web/mark-512.webp 512w" sizes="128px">
    <img
      src="/brand/web/mark.png"
      :alt="alt"
      width="256"
      height="256"
      class="block size-full object-contain"
      decoding="async"
      :aria-hidden="alt ? undefined : 'true'"
    >
  </picture>
</template>
