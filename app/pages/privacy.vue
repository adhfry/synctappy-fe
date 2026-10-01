<script setup lang="ts">
import { privacyEn } from '~/content/legal/privacy.en'
import { privacyId } from '~/content/legal/privacy.id'

const { locale, t } = useLocale()
const doc = computed(() => (locale.value === 'id' ? privacyId : privacyEn))

usePageSeo({
  path: '/privacy',
  title: () => `${doc.value.title} | Synctappy`,
  description: () => t.value.legal.privacyDescription,
  breadcrumb: () => [{ name: doc.value.title, path: '/privacy' }],
})
</script>

<template>
  <main id="main">
    <LegalDocument :doc="doc" />
  </main>
</template>
