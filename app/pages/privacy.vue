<script setup lang="ts">
import { privacyEn } from '~/content/legal/privacy.en'
import { privacyId } from '~/content/legal/privacy.id'

const { locale } = useLocale()
const doc = computed(() => (locale.value === 'id' ? privacyId : privacyEn))

useSeoMeta({
  title: () => `${doc.value.title} — Synctappy`,
  description: () => (locale.value === 'id'
    ? 'Bagaimana Synctappy by Synvora mengumpulkan, menggunakan, dan melindungi Data Pribadi sesuai UU PDP.'
    : 'How Synctappy by Synvora collects, uses and protects Personal Data under Indonesia’s PDP Law.'),
  ogTitle: () => `${doc.value.title} — Synctappy`,
})
</script>

<template>
  <main id="main">
    <LegalDocument :doc="doc" />
  </main>
</template>
