<script setup lang="ts">
const { open } = useCtaModal()
const { t } = useLocale()
const { openSettings } = useConsent()
const route = useRoute()
const href = (hash: string) => (route.path === '/' ? hash : `/${hash}`)
const year = 2026
</script>

<template>
  <footer class="relative z-10 -mt-8 rounded-t-[2rem] bg-white pt-16 md:-mt-10 md:rounded-t-[2.5rem]">
    <div class="container-x">
      <div class="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-[1.4fr_1fr_1fr_1fr] md:gap-12">
        <div class="col-span-2 md:col-span-1">
          <UiLogo class="h-14" />
          <p class="mt-5 max-w-xs text-sm leading-relaxed text-ink-500">
            {{ t.footer.about }}
          </p>
        </div>
        <nav v-for="column in t.footer.columns" :key="column.title" :aria-label="column.title">
          <h2 class="font-sans text-sm font-bold text-ink-900">{{ column.title }}</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="link in column.links" :key="link.href">
              <a :href="href(link.href)" class="text-sm text-ink-500 transition-colors hover:text-brand-600">{{ link.label }}</a>
            </li>
          </ul>
        </nav>
        <div class="col-span-2 sm:col-span-1">
          <h2 class="font-sans text-sm font-bold text-ink-900">{{ t.footer.company }}</h2>
          <ul class="mt-4 space-y-3">
            <li>
              <button type="button" class="text-sm text-ink-500 transition-colors hover:text-brand-600" @click="open('contact')">
                {{ t.common.talkToSynvora }}
              </button>
            </li>
            <li><NuxtLink to="/privacy" class="text-sm text-ink-500 transition-colors hover:text-brand-600">{{ t.footer.privacy }}</NuxtLink></li>
            <li>
              <button type="button" class="text-sm text-ink-500 transition-colors hover:text-brand-600" @click="openSettings">
                {{ t.footer.cookieSettings }}
              </button>
            </li>
            <li><span class="text-sm text-ink-400">{{ t.footer.terms }} <small class="text-[10px]">{{ t.footer.soon }}</small></span></li>
          </ul>
        </div>
      </div>

      <div class="mt-14 flex flex-col items-start justify-between gap-3 border-t border-line py-7 text-xs text-ink-400 sm:flex-row sm:items-center">
        <p>© {{ year }} {{ t.footer.rights }}</p>
        <p>{{ t.footer.madeIn }}</p>
      </div>
    </div>
  </footer>
</template>
