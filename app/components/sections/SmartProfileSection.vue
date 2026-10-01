<script setup lang="ts">
const { t } = useLocale()
const links = computed(() => t.value.destinations.filter(d => ['review', 'menu', 'whatsapp', 'location'].includes(d.id)))
const left = computed(() => t.value.profile.anatomy.slice(0, 3))
const right = computed(() => t.value.profile.anatomy.slice(3))
</script>

<template>
  <section id="smart-profile" class="section-y relative overflow-hidden bg-[linear-gradient(180deg,#f7f9ff_0%,#eef3ff_100%)]" aria-labelledby="profile-title">
    <div class="container-x">
      <UiSectionHeading
        id="profile-title"
        align="center"
        :eyebrow="t.profile.eyebrow"
        :title="t.profile.title"
        :highlight="t.profile.highlight"
        :description="t.profile.description"
      />

      <div class="mt-16 grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-12">
        <ul class="order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1">
          <li v-for="(item, i) in left" :key="item.title" v-reveal="i * 90" class="flex items-start gap-4 lg:flex-row-reverse lg:text-right">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-[var(--shadow-soft)] ring-1 ring-line">
              <UiIcon :name="item.icon" class="size-5" />
            </span>
            <span>
              <span class="block font-display text-lg font-bold text-ink-900">{{ item.title }}</span>
              <span class="mt-1 block text-sm text-ink-500">{{ item.description }}</span>
            </span>
          </li>
        </ul>

        <div v-reveal="120" class="relative order-1 mx-auto w-[270px] lg:order-2">
          <UiGlowOrb tone="violet" class="-inset-20 opacity-70" />
          <UiDeviceMockup :label="t.profile.phoneLabel" class="relative">
            <MockupsProfileScreen :links="links" />
          </UiDeviceMockup>
        </div>

        <ul class="order-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <li v-for="(item, i) in right" :key="item.title" v-reveal="i * 90 + 60" class="flex items-start gap-4">
            <span class="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-brand-600 shadow-[var(--shadow-soft)] ring-1 ring-line">
              <UiIcon :name="item.icon" class="size-5" />
            </span>
            <span>
              <span class="block font-display text-lg font-bold text-ink-900">{{ item.title }}</span>
              <span class="mt-1 block text-sm text-ink-500">{{ item.description }}</span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
