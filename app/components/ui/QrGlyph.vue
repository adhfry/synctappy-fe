<script setup lang="ts">
/**
 * Decorative QR-style pattern (not a scannable code). Deterministic so SSR
 * and client markup match.
 */
const props = withDefaults(defineProps<{ seed?: number, color?: string }>(), { seed: 7, color: '#0d1440' })

const N = 21
const cells = computed(() => {
  let s = props.seed
  const rand = () => ((s = (s * 1103515245 + 12345) % 2147483648) / 2147483648)
  const inFinder = (x: number, y: number) =>
    (x < 8 && y < 8) || (x > N - 9 && y < 8) || (x < 8 && y > N - 9)
  const out: string[] = []
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (inFinder(x, y)) continue
      if (rand() > 0.52) out.push(`M${x} ${y}h1v1h-1z`)
    }
  }
  return out.join('')
})
const finders = [[0, 0], [N - 7, 0], [0, N - 7]] as const
</script>

<template>
  <svg :viewBox="`-1 -1 ${N + 2} ${N + 2}`" shape-rendering="crispEdges" aria-hidden="true">
    <rect x="-1" y="-1" :width="N + 2" :height="N + 2" fill="#fff" />
    <path :d="cells" :fill="color" />
    <g v-for="([fx, fy], i) in finders" :key="i" :fill="color">
      <path :d="`M${fx} ${fy}h7v7h-7zM${fx + 1} ${fy + 1}v5h5v-5z`" fill-rule="evenodd" />
      <rect :x="fx + 2" :y="fy + 2" width="3" height="3" />
    </g>
  </svg>
</template>
