<script setup lang="ts">
import { Check, ChevronDown } from 'lucide-vue-next'
import type { Locale } from '~/types/content'

/**
 * EN / ID language menu with flags. Default language follows the device;
 * a manual pick is remembered (cookie) — see composables/useLocale.ts.
 */
withDefaults(defineProps<{ compact?: boolean }>(), { compact: false })

const { locale, setLocale, t } = useLocale()
const open = ref(false)
const root = ref<HTMLElement | null>(null)
const menuId = useId()

const options: { code: Locale, flag: 'us' | 'id', short: string }[] = [
  { code: 'en', flag: 'us', short: 'EN' },
  { code: 'id', flag: 'id', short: 'ID' },
]
const current = computed(() => options.find(o => o.code === locale.value)!)

const choose = (code: Locale) => {
  setLocale(code)
  open.value = false
}

const onDocClick = (e: MouseEvent) => {
  if (root.value && !root.value.contains(e.target as Node)) open.value = false
}
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') open.value = false
}
onMounted(() => {
  document.addEventListener('click', onDocClick)
  document.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  document.removeEventListener('click', onDocClick)
  document.removeEventListener('keydown', onKey)
})
</script>

<template>
  <div ref="root" class="relative">
    <button
      type="button"
      class="flex items-center gap-2 rounded-xl border border-line bg-white/80 font-semibold text-ink-800 transition-colors hover:border-brand-500/40 hover:bg-white"
      :class="compact ? 'h-11 px-2.5 text-xs' : 'h-10 px-3 text-sm'"
      :aria-label="`${t.language.label}: ${t.language.names[locale]}`"
      aria-haspopup="menu"
      :aria-expanded="open"
      :aria-controls="menuId"
      @click="open = !open"
    >
      <UiFlagIcon :code="current.flag" class="h-3.5 w-[21px]" />
      <span>{{ current.short }}</span>
      <ChevronDown class="size-3.5 text-ink-400 transition-transform duration-300" :class="open && 'rotate-180'" aria-hidden="true" />
    </button>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-1 scale-[0.98]"
      leave-active-class="transition duration-150 ease-in"
      leave-to-class="opacity-0 -translate-y-1"
    >
      <ul
        v-show="open"
        :id="menuId"
        role="menu"
        :aria-label="t.language.label"
        class="absolute right-0 top-[calc(100%+0.5rem)] z-50 w-56 overflow-hidden rounded-2xl border border-line bg-white p-1.5 shadow-[var(--shadow-lift)]"
      >
        <li v-for="o in options" :key="o.code" role="none">
          <button
            type="button"
            role="menuitemradio"
            :aria-checked="o.code === locale"
            :lang="o.code"
            class="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors hover:bg-mist-100"
            :class="o.code === locale ? 'font-semibold text-ink-900' : 'text-ink-600'"
            @click="choose(o.code)"
          >
            <UiFlagIcon :code="o.flag" class="h-4 w-6" />
            <span class="flex-1">{{ t.language.names[o.code] }}</span>
            <Check v-if="o.code === locale" class="size-4 text-brand-600" aria-hidden="true" />
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>
