<script setup lang="ts">
import { Lock, RefreshCw } from 'lucide-vue-next'
const { t } = useLocale()
const targets = computed(() => t.value.dynamic.targets)
const activeIndex = ref(0)
const active = computed(() => targets.value[activeIndex.value]!)
const reducedMotion = usePrefersReducedMotion()
const userPicked = ref(false)
const root = ref<HTMLElement | null>(null)
let timer: ReturnType<typeof setInterval> | undefined
let observer: IntersectionObserver | undefined

const start = () => {
  if (timer || reducedMotion.value || userPicked.value) return
  timer = setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % targets.value.length
  }, 3200)
}
const stop = () => {
  clearInterval(timer)
  timer = undefined
}
const pick = (i: number) => {
  userPicked.value = true
  stop()
  activeIndex.value = i
}

onMounted(() => {
  observer = new IntersectionObserver(([entry]) => (entry?.isIntersecting ? start() : stop()), { threshold: 0.35 })
  if (root.value) observer.observe(root.value)
})
onBeforeUnmount(() => {
  stop()
  observer?.disconnect()
})
</script>

<template>
  <section id="dynamic-link" ref="root" class="py-10 md:py-16" aria-labelledby="dynamic-title">
    <div class="container-x">
      <div class="relative overflow-hidden rounded-[2rem] bg-ink-950 px-6 py-14 sm:px-10 md:rounded-[2.5rem] lg:px-16 lg:py-20">
        <UiGlowOrb tone="blue" class="-left-40 -top-40 size-[36rem] opacity-60" />
        <UiGlowOrb tone="violet" class="-bottom-48 -right-32 size-[40rem] opacity-50" />
        <div class="absolute inset-0 bg-[radial-gradient(rgb(255_255_255/0.06)_1px,transparent_1px)] [background-size:26px_26px] [mask-image:radial-gradient(60%_70%_at_50%_50%,#000,transparent)]" aria-hidden="true" />

        <div class="relative grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <UiSectionHeading
            id="dynamic-title"
            inverted
            :eyebrow="t.dynamic.eyebrow"
            :title="t.dynamic.title"
            :highlight="t.dynamic.highlight"
            :description="t.dynamic.description"
          />

          <div v-reveal="120" class="grid gap-4 sm:grid-cols-[auto_1fr] sm:items-stretch">
            <!-- fixed touchpoint -->
            <div class="flex flex-col items-center justify-center gap-5 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:w-48">
              <div class="w-32 pt-2"><MockupsStandMockup /></div>
              <div class="text-center">
                <p class="flex items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-400">
                  <Lock class="size-3" aria-hidden="true" /> {{ t.dynamic.staysSame }}
                </p>
                <p class="mt-1.5 font-mono text-xs text-white/80">go.synctappy.id/kopiku</p>
              </div>
            </div>

            <!-- switchable destinations -->
            <div class="rounded-3xl border border-white/10 bg-white/[0.06] p-3 backdrop-blur-sm">
              <p class="flex items-center gap-2 px-3 pb-3 pt-2 text-[11px] font-bold uppercase tracking-widest text-white/50">
                <RefreshCw class="size-3.5" aria-hidden="true" /> {{ t.dynamic.destination }}
              </p>
              <div role="radiogroup" :aria-label="t.dynamic.chooseLabel" class="space-y-2">
                <button
                  v-for="(target, i) in targets"
                  :key="target.id"
                  type="button"
                  role="radio"
                  :aria-checked="i === activeIndex"
                  class="flex w-full items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left transition-all duration-500"
                  :class="i === activeIndex ? 'bg-white text-ink-900 shadow-[0_12px_30px_-12px_rgb(59_108_255/0.8)]' : 'text-white/70 hover:bg-white/5'"
                  @click="pick(i)"
                >
                  <span>
                    <span class="block text-sm font-semibold">{{ target.label }}</span>
                    <span class="block font-mono text-[11px]" :class="i === activeIndex ? 'text-ink-400' : 'text-white/40'">{{ target.path }}</span>
                  </span>
                  <span
                    class="shrink-0 rounded-full px-2.5 py-1 text-[10px] font-bold"
                    :class="i === activeIndex ? 'bg-brand-100 text-brand-700' : 'bg-white/10 text-white/50'"
                  >{{ target.note }}</span>
                </button>
              </div>
              <p class="px-3 pb-1 pt-4 text-xs text-white/50" :aria-live="userPicked ? 'polite' : 'off'">
                {{ t.dynamic.nowRedirecting }} <span class="font-semibold text-white">{{ active.label }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
