<script setup lang="ts">
import { X } from 'lucide-vue-next'

/**
 * Pre-launch dialog behind every CTA. No fake auth or signup: it explains
 * the current status and (when configured) links to the official contact.
 */
const { intent, close } = useCtaModal()
const { public: { contactHref } } = useRuntimeConfig()
const dialog = ref<HTMLDialogElement | null>(null)
const { t } = useLocale()

const content = computed(() => (intent.value ? t.value.modal[intent.value] : null))

watch(intent, (value) => {
  const el = dialog.value
  if (!el) return
  if (value && !el.open) el.showModal()
  if (!value && el.open) el.close()
})
</script>

<template>
  <dialog
    ref="dialog"
    class="m-auto w-[min(92vw,460px)] rounded-[var(--radius-panel)] border border-line bg-white p-0 text-ink-600 shadow-[0_40px_100px_-30px_rgb(13_20_64/0.5)] backdrop:bg-ink-950/45 backdrop:backdrop-blur-sm"
    aria-labelledby="cta-title"
    @close="close"
    @click.self="close"
  >
    <div v-if="content" class="relative p-7 sm:p-8">
      <div class="absolute inset-x-0 top-0 h-1 rounded-t-[var(--radius-panel)] bg-brand-gradient" aria-hidden="true" />
      <button
        type="button"
        class="absolute right-4 top-4 grid size-9 place-items-center rounded-lg text-ink-400 hover:bg-mist-100 hover:text-ink-900"
        :aria-label="t.modal.close"
        @click="close"
      >
        <X class="size-5" aria-hidden="true" />
      </button>
      <p class="text-xs font-bold uppercase tracking-[0.16em] text-brand-600">{{ content.eyebrow }}</p>
      <h2 id="cta-title" class="mt-3 text-2xl font-bold leading-tight">{{ content.title }}</h2>
      <p class="mt-3 text-sm leading-relaxed text-ink-500">{{ content.body }}</p>
      <div class="mt-7 flex flex-col gap-3 sm:flex-row">
        <UiButton v-if="contactHref" :href="contactHref" arrow>{{ t.common.talkToSynvora }}</UiButton>
        <UiButton variant="secondary" @click="close">{{ t.modal.gotIt }}</UiButton>
      </div>
      <p v-if="!contactHref" class="mt-4 text-xs text-ink-400">{{ t.modal.noContact }}</p>
    </div>
  </dialog>
</template>
