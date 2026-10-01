<script setup lang="ts">
const { t } = useLocale()
</script>

<template>
  <section id="hardware" class="section-y" aria-labelledby="hardware-title">
    <div class="container-x">
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <UiSectionHeading
          id="hardware-title"
          :eyebrow="t.hardware.eyebrow"
          :title="t.hardware.title"
          :highlight="t.hardware.highlight"
          :description="t.hardware.description"
        />
        <p v-reveal="160" class="max-w-xs text-sm text-ink-500 md:text-right">
          {{ t.hardware.customNote }}
        </p>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-3">
        <article
          v-for="(p, i) in t.hardware.products"
          :key="p.id"
          v-reveal="i * 110"
          class="card group flex flex-col overflow-hidden transition-[transform,box-shadow] duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
        >
          <div class="relative grid h-72 place-items-center overflow-hidden bg-[radial-gradient(80%_70%_at_50%_40%,#ffffff_0%,#eef3ff_70%,#e4ebff_100%)] px-10">
            <div class="absolute bottom-6 left-1/2 h-6 w-2/3 -translate-x-1/2 rounded-[50%] bg-ink-900/10 blur-md" aria-hidden="true" />
            <div v-if="p.id === 'stand'" class="relative w-40 transition-transform duration-700 group-hover:-translate-y-1"><MockupsStandMockup /></div>
            <div v-else-if="p.id === 'card'" class="relative w-56"><MockupsCardMockup /></div>
            <div v-else class="relative w-48"><MockupsTagMockup /></div>
          </div>
          <div class="flex flex-1 flex-col p-6">
            <p class="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-600">{{ p.type }}</p>
            <h3 class="mt-2 text-xl font-bold">{{ p.name }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-ink-500">{{ p.description }}</p>
            <ul class="mt-auto flex flex-wrap gap-2 pt-5">
              <li v-for="pl in p.placements" :key="pl" class="rounded-full bg-mist-100 px-2.5 py-1 text-[11px] font-semibold text-ink-600">{{ pl }}</li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
