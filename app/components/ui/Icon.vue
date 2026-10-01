<script setup lang="ts">
import { icons, type IconKey } from '~/utils/icons'

/** Renders a Lucide icon from its registry key (see utils/icons.ts). */
const props = defineProps<{ name: IconKey }>()
const component = computed(() => icons[props.name])
</script>

<template>
  <component :is="component" aria-hidden="true" />
</template>
