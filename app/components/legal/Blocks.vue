<script setup lang="ts">
import type { LegalBlock } from '~/types/legal'

defineProps<{ block: LegalBlock }>()
</script>

<template>
  <p v-if="block.type === 'p'" class="mt-4 leading-relaxed text-ink-600">{{ block.text }}</p>

  <h3 v-else-if="block.type === 'h3'" class="mt-7 text-lg font-bold">{{ block.text }}</h3>

  <ul v-else-if="block.type === 'ul'" class="mt-4 list-disc space-y-1.5 pl-5 leading-relaxed text-ink-600 marker:text-brand-500">
    <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
  </ul>

  <ol v-else-if="block.type === 'ol'" class="mt-4 list-decimal space-y-1.5 pl-6 leading-relaxed text-ink-600 marker:font-semibold marker:text-brand-600">
    <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
  </ol>

  <blockquote v-else-if="block.type === 'quote'" class="mt-4 rounded-r-xl border-l-4 border-brand-500 bg-mist-50 px-4 py-3 font-semibold text-ink-900">
    {{ block.text }}
  </blockquote>

  <aside v-else-if="block.type === 'note'" class="mt-5 rounded-2xl border border-brand-500/20 bg-brand-100/50 p-5">
    <p v-if="block.title" class="text-xs font-bold uppercase tracking-[0.14em] text-brand-700">{{ block.title }}</p>
    <p class="leading-relaxed text-ink-800" :class="block.title && 'mt-2'">{{ block.text }}</p>
  </aside>

  <div v-else-if="block.type === 'table'" class="mt-5 overflow-x-auto rounded-2xl border border-line">
    <table class="w-full min-w-[520px] text-left text-sm">
      <thead class="bg-mist-50 text-xs uppercase tracking-wider text-ink-500">
        <tr><th v-for="h in block.head" :key="h" scope="col" class="px-4 py-3 font-bold">{{ h }}</th></tr>
      </thead>
      <tbody class="divide-y divide-line">
        <tr v-for="(row, r) in block.rows" :key="r">
          <td v-for="(cell, c) in row" :key="c" class="px-4 py-3 align-top text-ink-600" :class="c === 0 && 'font-mono text-xs font-semibold text-ink-900'">{{ cell }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <dl v-else-if="block.type === 'contact'" class="mt-5 grid gap-x-6 gap-y-2 rounded-2xl border border-line p-5 text-sm sm:grid-cols-[160px_1fr]">
    <template v-for="row in block.rows" :key="row.label">
      <dt class="text-ink-400">{{ row.label }}</dt>
      <dd class="font-semibold text-ink-900">{{ row.value }}</dd>
    </template>
  </dl>
</template>
