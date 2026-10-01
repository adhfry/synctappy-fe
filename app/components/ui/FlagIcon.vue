<script setup lang="ts">
/**
 * Small rounded flag glyphs for the language switcher.
 *   id → Indonesia (Merah Putih), us → United States (English).
 * Decorative: the switcher always shows the language name as text too.
 */
defineProps<{ code: 'id' | 'us' }>()
const uid = useId()
</script>

<template>
  <svg
    viewBox="0 0 30 20"
    class="block shrink-0 overflow-hidden rounded-[3px] shadow-[0_0_0_1px_rgb(13_20_64/0.12)]"
    aria-hidden="true"
  >
    <template v-if="code === 'id'">
      <rect width="30" height="10" fill="#E70011" />
      <rect y="10" width="30" height="10" fill="#FFFFFF" />
    </template>
    <template v-else>
      <defs>
        <pattern :id="`${uid}-stars`" width="2.4" height="2.15" patternUnits="userSpaceOnUse">
          <circle cx="1.2" cy="1.05" r="0.42" fill="#FFFFFF" />
        </pattern>
      </defs>
      <rect width="30" height="20" fill="#FFFFFF" />
      <!-- 7 red stripes of 13 -->
      <rect v-for="i in 7" :key="i" :y="(i - 1) * (20 / 13) * 2" width="30" :height="20 / 13" fill="#B22234" />
      <!-- canton -->
      <rect width="12" :height="(20 / 13) * 7" fill="#3C3B6E" />
      <rect x="0.3" y="0.1" width="11.6" :height="(20 / 13) * 7 - 0.2" :fill="`url(#${uid}-stars)`" />
    </template>
  </svg>
</template>
