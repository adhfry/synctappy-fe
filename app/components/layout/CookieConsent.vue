<script setup lang="ts">
import { Cookie, X } from 'lucide-vue-next'

/**
 * Non-intrusive cookie notice: card bottom-right (desktop, clear of the hero CTAs), no overlay, no scroll
 * lock, appears shortly after load and only until a choice is made.
 * Reopen it with useConsent().openSettings() (footer "Cookie settings").
 */
const { t } = useLocale()
const { decided, allowPreferences, panelOpen, acceptAll, essentialOnly, save } = useConsent()

const mounted = ref(false)
const ready = ref(false)
const prefsToggle = ref(false)

const visible = computed(() => mounted.value && (panelOpen.value || (!decided.value && ready.value)))
const settings = ref(false)

watch(panelOpen, (open) => {
  if (open) {
    settings.value = true
    prefsToggle.value = allowPreferences.value
  }
})

onMounted(() => {
  mounted.value = true
  // Let the page settle first — never block the first impression
  setTimeout(() => (ready.value = true), 1500)
})

const close = () => {
  // Closing without choosing = essential only (no non-essential cookies)
  if (!decided.value) essentialOnly()
  panelOpen.value = false
  settings.value = false
}

const categories = computed(() => {
  const c = t.value.cookies.categories
  return [
    { key: 'essential', ...c.essential, state: 'on' as const },
    { key: 'preferences', ...c.preferences, state: 'toggle' as const },
    { key: 'analytics', ...c.analytics, state: 'unused' as const },
    { key: 'marketing', ...c.marketing, state: 'unused' as const },
  ]
})
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-out"
    enter-from-class="opacity-0 translate-y-4"
    leave-active-class="transition duration-200 ease-in"
    leave-to-class="opacity-0 translate-y-2"
  >
    <section
      v-if="visible"
      role="region"
      :aria-label="t.cookies.title"
      class="ring-gradient fixed inset-x-3 bottom-3 z-[55] rounded-[1.5rem] bg-white/97 p-5 shadow-[0_30px_70px_-20px_rgb(13_20_64/0.45)] backdrop-blur-xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[460px] sm:p-6"
    >
      <button
        type="button"
        class="absolute right-4 top-4 z-10 grid size-9 place-items-center rounded-lg text-ink-400 hover:bg-mist-100 hover:text-ink-900"
        :aria-label="t.modal.close"
        @click="close"
      >
        <X class="size-5" aria-hidden="true" />
      </button>

      <div class="flex items-start gap-4 pr-9">
        <span class="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-gradient text-white shadow-[0_10px_24px_-10px_rgb(35_86_245/0.7)]">
          <Cookie class="size-6" aria-hidden="true" />
        </span>
        <div>
          <p class="font-display text-lg font-bold leading-tight text-ink-900">{{ t.cookies.title }}</p>
          <p class="mt-1.5 text-sm leading-relaxed text-ink-500">
            {{ t.cookies.body }}
            <NuxtLink to="/privacy#cookies" class="font-semibold text-brand-600 underline-offset-2 hover:underline">{{ t.cookies.policyLink }}</NuxtLink>
          </p>
        </div>
      </div>

      <!-- category settings -->
      <ul v-if="settings" class="mt-5 space-y-3 border-t border-line pt-5">
        <li v-for="c in categories" :key="c.key" class="flex items-start justify-between gap-3">
          <div class="min-w-0">
            <p class="text-sm font-bold text-ink-900">{{ c.title }}</p>
            <p class="text-xs leading-snug text-ink-500">{{ c.description }}</p>
          </div>
          <span v-if="c.state === 'on'" class="shrink-0 rounded-full bg-mist-100 px-2 py-0.5 text-[10px] font-semibold text-ink-600">{{ t.cookies.alwaysOn }}</span>
          <span v-else-if="c.state === 'unused'" class="shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold text-ink-400 ring-1 ring-line">{{ t.cookies.notUsed }}</span>
          <button
            v-else
            type="button"
            role="switch"
            :aria-checked="prefsToggle"
            :aria-label="c.title"
            class="relative h-6 w-10 shrink-0 rounded-full transition-colors duration-300"
            :class="prefsToggle ? 'bg-brand-600' : 'bg-mist-200'"
            @click="prefsToggle = !prefsToggle"
          >
            <span class="absolute top-0.5 size-5 rounded-full bg-white shadow transition-transform duration-300" :class="prefsToggle ? 'translate-x-[18px]' : 'translate-x-0.5'" />
          </button>
        </li>
      </ul>

      <div class="mt-5 flex flex-wrap items-center gap-2.5">
        <template v-if="settings">
          <UiButton class="flex-1" @click="save(prefsToggle); settings = false">{{ t.cookies.save }}</UiButton>
        </template>
        <template v-else>
          <UiButton class="flex-1" @click="acceptAll">{{ t.cookies.acceptAll }}</UiButton>
          <UiButton variant="secondary" class="flex-1" @click="essentialOnly">{{ t.cookies.accept }}</UiButton>
          <button type="button" class="w-full pt-1 text-center text-sm font-semibold text-ink-500 underline-offset-2 hover:text-ink-900 hover:underline sm:w-auto sm:px-2 sm:pt-0" @click="settings = true; prefsToggle = allowPreferences">
            {{ t.cookies.customize }}
          </button>
        </template>
      </div>
    </section>
  </Transition>
</template>
