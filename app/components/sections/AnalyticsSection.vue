<script setup lang="ts">
import { CalendarDays, Check, LayoutDashboard, Link2, Megaphone, Settings, Smartphone } from 'lucide-vue-next'
import { analyticsSeries } from '~/content/shared'

const { t, locale } = useLocale()

// Line chart geometry (viewBox 0 0 W H)
const W = 480
const H = 140
const pad = 8
const max = Math.max(...analyticsSeries) * 1.08
const min = Math.min(...analyticsSeries) * 0.85
const pts = analyticsSeries.map((v, i) => [
  pad + (i * (W - pad * 2)) / (analyticsSeries.length - 1),
  H - pad - ((v - min) / (max - min)) * (H - pad * 2),
] as const)

// Smooth path via Catmull-Rom → Bézier
const linePath = pts.reduce((d, [x, y], i, a) => {
  if (i === 0) return `M${x},${y}`
  const [x0, y0] = a[i - 2] ?? a[i - 1]!
  const [x1, y1] = a[i - 1]!
  const [x3, y3] = a[i + 1] ?? [x, y]
  const c1 = [x1 + (x - x0) / 6, y1 + (y - y0) / 6]
  const c2 = [x - (x3 - x1) / 6, y - (y3 - y1) / 6]
  return `${d} C${c1[0]},${c1[1]} ${c2[0]},${c2[1]} ${x},${y}`
}, '')
const areaPath = `${linePath} L${W - pad},${H} L${pad},${H} Z`
const peak = pts[pts.length - 1]!
const peakValue = analyticsSeries[analyticsSeries.length - 1]!

// Donut
const R = 15.9155
const donut = computed(() => {
  let offset = 0
  return t.value.analytics.sources.map((s) => {
    const seg = { ...s, dash: `${s.share} ${100 - s.share}`, offset: -offset }
    offset += s.share
    return seg
  })
})

const navIcons = [LayoutDashboard, Smartphone, Link2, Megaphone, Settings]
const nav = computed(() => t.value.analytics.nav.map((label, i) => ({ icon: navIcons[i], label, active: i === 0 })))
const peakLabel = computed(() => peakValue.toLocaleString(locale.value === 'id' ? 'id-ID' : 'en-US'))
const days = ['1', '3', '5', '7', '9', '11', '14']
</script>

<template>
  <section id="analytics" class="section-y relative overflow-hidden" aria-labelledby="analytics-title">
    <div class="container-x grid items-center gap-14 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] lg:gap-12">
      <div>
        <UiSectionHeading
          id="analytics-title"
          :eyebrow="t.analytics.eyebrow"
          :title="t.analytics.title"
          :highlight="t.analytics.highlight"
          :description="t.analytics.description"
        />
        <ul class="mt-8 space-y-3.5">
          <li v-for="(c, i) in t.analytics.capabilities" :key="c" v-reveal="140 + i * 60" class="flex items-center gap-3 text-[0.95rem] font-medium text-ink-800">
            <span class="grid size-6 shrink-0 place-items-center rounded-full bg-brand-gradient text-white">
              <Check class="size-3.5" stroke-width="3" aria-hidden="true" />
            </span>
            {{ c }}
          </li>
        </ul>
      </div>

      <!-- dashboard mockup -->
      <figure v-reveal="120" class="relative" :aria-label="t.analytics.figureLabel">
        <UiGlowOrb tone="mixed" class="-inset-16 opacity-80" />
        <div class="ring-gradient relative flex overflow-hidden rounded-[1.75rem] bg-white shadow-[var(--shadow-device)]">
          <!-- sidebar -->
          <aside class="hidden w-44 shrink-0 flex-col border-r border-line bg-mist-50/70 p-4 md:flex" aria-hidden="true">
            <UiLogo class="h-9" />
            <ul class="mt-7 space-y-1">
              <li
                v-for="n in nav" :key="n.label"
                class="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-semibold"
                :class="n.active ? 'bg-white text-brand-600 shadow-[var(--shadow-soft)]' : 'text-ink-500'"
              >
                <component :is="n.icon" class="size-4" /> {{ n.label }}
              </li>
            </ul>
          </aside>

          <div class="min-w-0 flex-1 p-4 sm:p-6">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p class="font-display text-lg font-bold text-ink-900">{{ t.analytics.overview }}</p>
                <p class="text-[11px] text-ink-400">{{ t.analytics.scope }}</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700 ring-1 ring-amber-200">{{ t.analytics.sampleData }}</span>
                <span class="hidden items-center gap-1.5 rounded-lg border border-line px-2.5 py-1.5 text-[11px] font-medium text-ink-600 sm:flex">
                  <CalendarDays class="size-3.5" aria-hidden="true" /> {{ t.analytics.period }}
                </span>
              </div>
            </div>

            <!-- KPIs -->
            <div class="mt-5 grid grid-cols-2 gap-3 xl:grid-cols-4">
              <div v-for="s in t.analytics.stats" :key="s.id" class="rounded-2xl border border-line p-3.5">
                <div class="flex items-center justify-between text-ink-400">
                  <p class="text-[11px] font-medium">{{ s.label }}</p>
                  <UiIcon :name="s.icon" class="size-3.5" />
                </div>
                <p class="mt-1.5 font-display text-xl font-bold text-ink-900 sm:text-2xl">{{ s.value }}</p>
                <p class="mt-0.5 text-[11px] font-semibold text-emerald-600">{{ s.delta }}</p>
              </div>
            </div>

            <div class="mt-3 grid gap-3">
              <!-- line chart -->
              <div class="rounded-2xl border border-line p-4">
                <div class="flex items-center justify-between">
                  <p class="text-xs font-bold text-ink-900">{{ t.analytics.chartTitle }}</p>
                  <p class="text-[10px] text-ink-400">{{ t.analytics.chartSubtitle }}</p>
                </div>
                <div class="relative mt-3">
                  <svg :viewBox="`0 0 ${W} ${H}`" class="h-auto w-full overflow-visible" role="img" :aria-label="t.analytics.chartLabel">
                    <defs>
                      <linearGradient id="an-area" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stop-color="#3b6cff" stop-opacity="0.22" />
                        <stop offset="1" stop-color="#3b6cff" stop-opacity="0" />
                      </linearGradient>
                      <linearGradient id="an-line" x1="0" x2="1">
                        <stop offset="0" stop-color="#2356f5" /><stop offset="1" stop-color="#7b5cff" />
                      </linearGradient>
                    </defs>
                    <g stroke="#e3e8f6" stroke-dasharray="3 5">
                      <line v-for="g in 4" :key="g" x1="0" :x2="W" :y1="(H / 4) * g - 1" :y2="(H / 4) * g - 1" />
                    </g>
                    <path :d="areaPath" fill="url(#an-area)" />
                    <path
                      :d="linePath" fill="none" stroke="url(#an-line)" stroke-width="3" stroke-linecap="round"
                      pathLength="1" class="[stroke-dasharray:1] [stroke-dashoffset:1] transition-[stroke-dashoffset] delay-300 duration-[1800ms] ease-out in-[.is-visible]:[stroke-dashoffset:0]"
                    />
                    <circle :cx="peak[0]" :cy="peak[1]" r="5" fill="#fff" stroke="#6a45f0" stroke-width="3" />
                  </svg>
                  <span
                    class="absolute -translate-x-full -translate-y-[130%] rounded-lg bg-ink-900 px-2 py-1 text-[10px] font-semibold whitespace-nowrap text-white"
                    :style="{ left: `${(peak[0] / W) * 100}%`, top: `${(peak[1] / H) * 100}%` }"
                  >{{ peakLabel }} {{ t.analytics.today }}</span>
                </div>
                <div class="mt-2 flex justify-between text-[10px] text-ink-400" aria-hidden="true">
                  <span v-for="d in days" :key="d">{{ t.analytics.day }} {{ d }}</span>
                </div>
              </div>

              <div class="grid gap-3 sm:grid-cols-2">
                <!-- donut -->
                <div class="flex items-center gap-4 rounded-2xl border border-line p-4">
                  <svg viewBox="0 0 36 36" class="size-20 shrink-0 -rotate-90" aria-hidden="true">
                    <circle cx="18" cy="18" :r="R" fill="none" stroke="#eef3ff" stroke-width="4.5" />
                    <circle
                      v-for="d in donut" :key="d.label" cx="18" cy="18" :r="R" fill="none"
                      :stroke="d.color" stroke-width="4.5" :stroke-dasharray="d.dash" :stroke-dashoffset="d.offset"
                    />
                  </svg>
                  <div class="min-w-0 space-y-1.5">
                    <p class="text-xs font-bold text-ink-900">{{ t.analytics.source }}</p>
                    <p v-for="d in donut" :key="d.label" class="flex items-center gap-2 text-[11px] text-ink-500">
                      <span class="size-2 rounded-full" :style="{ background: d.color }" /> {{ d.label }}
                      <span class="font-semibold text-ink-800">{{ d.share }}%</span>
                    </p>
                    <p class="text-[11px] text-ink-500">{{ t.analytics.engagementLabel }} <span class="font-semibold text-ink-800">{{ t.analytics.engagement }}</span></p>
                  </div>
                </div>
                <!-- top links -->
                <div class="rounded-2xl border border-line p-4">
                  <p class="text-xs font-bold text-ink-900">{{ t.analytics.topDestinations }}</p>
                  <ul class="mt-3 space-y-2.5">
                    <li v-for="(l, i) in t.analytics.topLinks" :key="l.label" class="text-[11px]">
                      <div class="flex justify-between text-ink-600">
                        <span>{{ l.label }}</span><span class="font-semibold text-ink-900">{{ l.share }}%</span>
                      </div>
                      <div class="mt-1 h-1.5 overflow-hidden rounded-full bg-mist-100">
                        <div
                          class="h-full origin-left scale-x-0 rounded-full bg-brand-gradient transition-transform duration-1000 ease-out in-[.is-visible]:scale-x-100"
                          :style="{ width: `${l.share * 2.2}%`, transitionDelay: `${500 + i * 120}ms` }"
                        />
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figcaption class="relative mt-4 text-center text-xs text-ink-400">{{ t.analytics.caption }}</figcaption>
      </figure>
    </div>
  </section>
</template>
