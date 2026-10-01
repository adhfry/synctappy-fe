<script setup lang="ts">
import { ArrowLeft, Info, List } from 'lucide-vue-next'
import type { LegalDocument } from '~/types/legal'

/** Renders a structured legal document with a table of contents. */
defineProps<{ doc: LegalDocument }>()
const { t } = useLocale()
</script>

<template>
  <article class="pb-24 pt-[104px] md:pt-[128px]">
    <div class="container-x">
      <NuxtLink to="/" class="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 hover:text-brand-600">
        <ArrowLeft class="size-4" aria-hidden="true" /> {{ t.legal.backHome }}
      </NuxtLink>

      <header class="mt-8 max-w-3xl">
        <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">{{ doc.subtitle }}</p>
        <h1 class="mt-3 text-[clamp(2.2rem,4.5vw,3.5rem)] font-bold leading-[1.05]">{{ doc.title }}</h1>
        <dl class="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
          <div class="flex gap-2"><dt class="text-ink-400">{{ doc.effectiveLabel }}:</dt><dd class="font-semibold text-ink-800">{{ doc.effective }}</dd></div>
          <div class="flex gap-2"><dt class="text-ink-400">{{ doc.updatedLabel }}:</dt><dd class="font-semibold text-ink-800">{{ doc.updated }}</dd></div>
        </dl>
        <p v-if="doc.draftNotice" class="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
          <Info class="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {{ doc.draftNotice }}
        </p>
      </header>

      <div class="mt-12 grid grid-cols-[minmax(0,1fr)] gap-10 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-16">
        <!-- table of contents -->
        <nav :aria-label="t.legal.onThisPage" class="lg:sticky lg:top-24 lg:max-h-[calc(100vh-7rem)] lg:self-start lg:overflow-y-auto">
          <details class="group rounded-2xl border border-line bg-mist-50 p-4 lg:border-0 lg:bg-transparent lg:p-0" open>
            <summary class="flex cursor-pointer list-none items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-ink-400 lg:pointer-events-none">
              <List class="size-4" aria-hidden="true" /> {{ t.legal.onThisPage }}
            </summary>
            <ol class="mt-3 space-y-1 text-sm">
              <li v-for="s in doc.sections" :key="s.id">
                <a :href="`#${s.id}`" class="block rounded-lg px-2 py-1.5 text-ink-500 transition-colors hover:bg-mist-100 hover:text-ink-900">{{ s.title }}</a>
              </li>
            </ol>
          </details>
        </nav>

        <!-- body -->
        <div class="legal max-w-3xl">
          <template v-for="(b, i) in doc.intro" :key="`intro-${i}`">
            <LegalBlocks :block="b" />
          </template>

          <section v-for="s in doc.sections" :id="s.id" :key="s.id" class="mt-12 scroll-mt-28 border-t border-line pt-10 first-of-type:mt-10">
            <h2 class="text-2xl font-bold">{{ s.title }}</h2>
            <template v-for="(b, i) in s.blocks" :key="`${s.id}-${i}`">
              <LegalBlocks :block="b" />
            </template>
          </section>
        </div>
      </div>
    </div>
  </article>
</template>
