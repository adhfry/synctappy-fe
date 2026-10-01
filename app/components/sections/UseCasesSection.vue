<script setup lang="ts">
import { Quote } from 'lucide-vue-next'
const { t } = useLocale()
const useCases = computed(() => t.value.useCases.items)
const activeId = ref(useCases.value[0]!.id)
const active = computed(() => useCases.value.find(u => u.id === activeId.value)!)

const onKey = (e: KeyboardEvent) => {
  if (!['ArrowRight', 'ArrowDown', 'ArrowLeft', 'ArrowUp'].includes(e.key)) return
  e.preventDefault()
  const list = useCases.value
  const i = list.findIndex(u => u.id === activeId.value)
  const dir = e.key === 'ArrowRight' || e.key === 'ArrowDown' ? 1 : -1
  const next = list[(i + dir + list.length) % list.length]!
  activeId.value = next.id
  nextTick(() => document.getElementById(`uc-tab-${next.id}`)?.focus())
}
</script>

<template>
  <section id="use-cases" class="section-y bg-mist-50" aria-labelledby="usecases-title">
    <div class="container-x">
      <UiSectionHeading
        id="usecases-title"
        :eyebrow="t.useCases.eyebrow"
        :title="t.useCases.title"
        :highlight="t.useCases.highlight"
        :description="t.useCases.description"
      />

      <div class="mt-12 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-8">
        <div
          role="tablist"
          :aria-label="t.useCases.tablistLabel"
          aria-orientation="vertical"
          class="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-1"
          @keydown="onKey"
        >
          <button
            v-for="u in useCases"
            :id="`uc-tab-${u.id}`"
            :key="u.id"
            type="button"
            role="tab"
            :aria-selected="u.id === activeId"
            :aria-controls="`uc-panel`"
            :tabindex="u.id === activeId ? 0 : -1"
            class="flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-all duration-300"
            :class="u.id === activeId ? 'border-brand-500/40 bg-white shadow-[var(--shadow-lift)]' : 'border-transparent hover:border-line hover:bg-white/70'"
            @click="activeId = u.id"
          >
            <span
              class="grid size-10 shrink-0 place-items-center rounded-xl transition-colors duration-300"
              :class="u.id === activeId ? 'bg-brand-gradient text-white' : 'bg-white text-brand-600 ring-1 ring-line'"
            >
              <UiIcon :name="u.icon" class="size-[18px]" />
            </span>
            <span class="whitespace-nowrap text-sm font-semibold text-ink-900 sm:whitespace-normal">{{ u.name }}</span>
          </button>
        </div>

        <div
          id="uc-panel"
          role="tabpanel"
          :aria-labelledby="`uc-tab-${activeId}`"
          class="ring-gradient relative overflow-hidden rounded-[var(--radius-panel)] bg-white p-7 shadow-[var(--shadow-soft)] sm:p-10"
        >
          <UiGlowOrb tone="mixed" class="-right-24 -top-24 size-72 opacity-60" />
          <Transition mode="out-in" enter-active-class="transition duration-400 ease-out" enter-from-class="opacity-0 translate-y-2" leave-active-class="transition duration-150" leave-to-class="opacity-0">
            <div :key="active.id" class="relative">
              <span class="grid size-14 place-items-center rounded-2xl bg-brand-gradient text-white shadow-lg">
                <UiIcon :name="active.icon" class="size-6" />
              </span>
              <h3 class="mt-6 text-3xl font-bold">{{ active.name }}</h3>
              <p class="mt-3 text-base leading-relaxed text-ink-500">{{ active.description }}</p>

              <div class="mt-7 rounded-2xl bg-mist-50 p-5">
                <p class="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">
                  <Quote class="size-3.5" aria-hidden="true" /> {{ t.useCases.scenarioLabel }}
                </p>
                <p class="mt-2 text-[0.95rem] leading-relaxed text-ink-800">{{ active.scenario }}</p>
              </div>

              <p class="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-ink-400">{{ t.useCases.destinationsLabel }}</p>
              <ul class="mt-3 flex flex-wrap gap-2">
                <li v-for="d in active.destinations" :key="d" class="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-800">{{ d }}</li>
              </ul>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </section>
</template>
