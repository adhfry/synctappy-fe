<script setup lang="ts">
/**
 * Official Synctappy lockup (supplied by Synvora — see public/brand/).
 * Size it with a height class on the component, e.g. class="h-10".
 *   default  → dark text, for light backgrounds
 *   inverted → white text, for dark backgrounds
 */
withDefaults(defineProps<{ inverted?: boolean }>(), { inverted: false })
</script>

<template>
  <picture class="inline-block shrink-0">
    <source type="image/webp" :srcset="inverted ? '/brand/web/logo-dark.webp' : '/brand/web/logo-light.webp'">
    <img
      :src="inverted ? '/brand/web/logo-dark.png' : '/brand/web/logo-light.png'"
      alt="Synctappy by Synvora"
      width="640"
      :height="inverted ? 213 : 210"
      class="block h-full w-auto"
      decoding="async"
    >
  </picture>
</template>
