<script setup lang="ts">
import { Music } from 'lucide-vue-next'
const { open } = useCtaModal()
const { t } = useLocale()
</script>

<template>
  <section id="campaign" class="section-y bg-mist-50" aria-labelledby="campaign-title">
    <div class="container-x grid items-center gap-14 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
      <div>
        <UiSectionHeading
          id="campaign-title"
          :eyebrow="t.campaign.eyebrow"
          :title="t.campaign.title"
          :highlight="t.campaign.highlight"
          :description="t.campaign.description"
        />
        <ul v-reveal="160" class="mt-7 flex flex-wrap gap-2" :aria-label="t.campaign.ideasLabel">
          <li v-for="type in t.campaign.types" :key="type" class="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-semibold text-ink-600">{{ type }}</li>
        </ul>
        <div v-reveal="220" class="mt-9">
          <UiButton arrow @click="open('trial')">{{ t.common.startTrial }}</UiButton>
        </div>
      </div>

      <div class="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 no-scrollbar sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0 sm:pb-0">
        <article
          v-for="(c, i) in t.campaign.items"
          :key="c.id"
          v-reveal="i * 100"
          class="group relative flex aspect-[3/4.3] w-[72vw] max-w-[260px] shrink-0 snap-center flex-col overflow-hidden rounded-[1.5rem] p-5 shadow-[var(--shadow-lift)] transition-transform duration-500 hover:-translate-y-1.5 sm:w-auto sm:max-w-none"
          :class="{
            'bg-white text-ink-900': c.kind === 'promo',
            'bg-[linear-gradient(160deg,#0f5a8a_0%,#0b2f5c_100%)] text-white': c.kind === 'menu',
            'bg-[linear-gradient(160deg,#2a1a5e_0%,#0b0a24_100%)] text-white': c.kind === 'event',
          }"
        >
          <!-- art -->
          <template v-if="c.kind === 'promo'">
            <svg viewBox="0 0 200 90" preserveAspectRatio="none" class="absolute inset-x-0 top-0 h-[34%] w-full" aria-hidden="true">
              <path d="M0 0H200V52C150 78 110 30 60 52S10 70 0 62Z" fill="#e5252a" />
              <path d="M0 62C10 70 30 74 60 52S150 78 200 52V70C150 96 110 48 60 70S10 88 0 80Z" fill="#f4f4f6" />
            </svg>
          </template>
          <template v-else-if="c.kind === 'menu'">
            <div class="absolute bottom-[20%] right-[12%] h-[34%] w-[26%] rounded-b-[40%] rounded-t-md bg-[linear-gradient(180deg,rgb(255_255_255/0.25)_0%,#ffb347_18%,#ff8a1f_100%)] shadow-[inset_0_0_0_2px_rgb(255_255_255/0.35)] transition-transform duration-700 group-hover:-rotate-3" aria-hidden="true">
              <span class="absolute -top-[30%] left-[55%] h-[45%] w-1.5 rotate-12 rounded-full bg-white/80" />
            </div>
          </template>
          <template v-else>
            <div class="absolute inset-0 bg-[conic-gradient(from_200deg_at_50%_0%,transparent_0deg,rgb(123_92_255/0.45)_20deg,transparent_40deg,rgb(43_196_242/0.3)_60deg,transparent_80deg)]" aria-hidden="true" />
            <Music class="absolute bottom-[26%] right-[14%] size-16 text-white/20" aria-hidden="true" />
          </template>

          <div class="relative flex h-full flex-col">
            <span
              class="self-start rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider"
              :class="c.kind === 'promo' ? 'mt-auto mb-2 bg-mist-100 text-ink-500' : 'bg-white/15 text-white/80'"
            >{{ c.eyebrow }}</span>
            <div :class="c.kind === 'promo' ? '' : 'mt-3'">
              <h3
                class="font-display font-bold leading-tight"
                :class="c.kind === 'promo' ? 'text-xl text-[#d61f26]' : 'text-xl text-white'"
              >{{ c.title }}</h3>
              <p
                class="mt-1 font-display text-3xl font-bold leading-none"
                :class="c.kind === 'promo' ? 'text-ink-900' : 'text-white'"
              >{{ c.highlight }}</p>
              <p class="mt-2 text-[11px]" :class="c.kind === 'promo' ? 'text-ink-500' : 'text-white/60'">{{ c.caption }}</p>
            </div>
            <span
              class="mt-auto rounded-full py-2.5 text-center text-xs font-bold"
              :class="c.kind === 'promo' ? 'bg-brand-gradient text-white' : 'bg-white text-ink-900'"
              :style="c.kind === 'promo' ? 'margin-top: 1rem' : ''"
            >{{ c.cta }}</span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
