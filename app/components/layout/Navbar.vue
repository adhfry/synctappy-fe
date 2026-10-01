<script setup lang="ts">
import { Menu, X } from 'lucide-vue-next'
const { open } = useCtaModal()
const { t } = useLocale()
const route = useRoute()
/** In-page anchors must point back to the home page from other routes */
const href = (hash: string) => (route.path === '/' ? hash : `/${hash}`)
const scrolled = ref(false)
const menuOpen = ref(false)

const onScroll = () => {
  scrolled.value = window.scrollY > 12
}
const onKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') menuOpen.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})

const openCta = (intent: 'trial' | 'signin') => {
  menuOpen.value = false
  open(intent)
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,border-color] duration-500"
    :class="scrolled || menuOpen
      ? 'border-b border-line/80 bg-white/80 shadow-[0_8px_30px_-20px_rgb(13_20_64/0.35)] backdrop-blur-xl'
      : 'border-b border-transparent bg-transparent'"
  >
    <nav class="container-x flex h-[72px] items-center justify-between gap-6" :aria-label="t.nav.main">
      <a :href="href('#top')" class="rounded-lg" :aria-label="t.nav.backToTop">
        <UiLogo class="h-11 sm:h-12" />
      </a>

      <ul class="hidden items-center gap-1 lg:flex">
        <li v-for="link in t.nav.links" :key="link.href">
          <a
            :href="href(link.href)"
            class="rounded-lg px-3.5 py-2 text-sm font-medium text-ink-600 transition-colors hover:bg-mist-100 hover:text-ink-900"
          >{{ link.label }}</a>
        </li>
      </ul>

      <div class="hidden items-center gap-2 lg:flex">
        <UiLanguageSwitcher />
        <UiButton variant="ghost" size="sm" @click="openCta('signin')">{{ t.common.signIn }}</UiButton>
        <UiButton size="sm" arrow @click="openCta('trial')">{{ t.common.startTrial }}</UiButton>
      </div>

      <div class="flex items-center gap-2 lg:hidden">
        <UiLanguageSwitcher compact />
        <button
        type="button"
        class="grid size-11 place-items-center rounded-xl border border-line bg-white/80 text-ink-900"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        :aria-label="menuOpen ? t.nav.closeMenu : t.nav.openMenu"
        @click="menuOpen = !menuOpen"
      >
        <X v-if="menuOpen" class="size-5" aria-hidden="true" />
        <Menu v-else class="size-5" aria-hidden="true" />
        </button>
      </div>
    </nav>

    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-show="menuOpen" id="mobile-menu" class="border-t border-line bg-white lg:hidden">
        <ul class="container-x flex flex-col py-3">
          <li v-for="link in t.nav.links" :key="link.href">
            <a
              :href="href(link.href)"
              class="flex h-12 items-center rounded-lg px-2 text-base font-medium text-ink-800 hover:bg-mist-100"
              @click="menuOpen = false"
            >{{ link.label }}</a>
          </li>
        </ul>
        <div class="container-x grid grid-cols-2 gap-3 pb-5">
          <UiButton variant="secondary" @click="openCta('signin')">{{ t.common.signIn }}</UiButton>
          <UiButton @click="openCta('trial')">{{ t.common.startTrial }}</UiButton>
        </div>
      </div>
    </Transition>
  </header>
</template>
