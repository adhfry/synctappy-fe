<script setup lang="ts">
import type { BrandIconKey } from '~/types/content'

/**
 * Simplified brand glyphs used only as destination indicators
 * (the destinations themselves are third-party services).
 */
defineProps<{ name: BrandIconKey }>()
const gid = useId()
</script>

<template>
  <svg v-if="name === 'google'" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#4285F4" d="M22.6 12.3c0-.8-.1-1.5-.2-2.3H12v4.3h5.9a5 5 0 0 1-2.2 3.3v2.8h3.6c2.1-2 3.3-4.8 3.3-8.1z" />
    <path fill="#34A853" d="M12 23c3 0 5.5-1 7.3-2.7l-3.6-2.8c-1 .7-2.2 1.1-3.7 1.1-2.9 0-5.3-1.9-6.2-4.5H2.1v2.9A11 11 0 0 0 12 23z" />
    <path fill="#FBBC05" d="M5.8 14.1a6.6 6.6 0 0 1 0-4.2V7H2.1a11 11 0 0 0 0 10l3.7-2.9z" />
    <path fill="#EA4335" d="M12 5.4c1.6 0 3.1.6 4.2 1.7l3.2-3.2A11 11 0 0 0 2.1 7l3.7 2.9C6.7 7.3 9.1 5.4 12 5.4z" />
  </svg>
  <svg v-else-if="name === 'whatsapp'" viewBox="0 0 24 24" aria-hidden="true">
    <path fill="#25D366" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2z" />
    <path fill="#fff" d="M17.3 14.6c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a7 7 0 0 1-3.5-3c-.3-.5.3-.4.7-1.4.1-.2 0-.3 0-.5l-.9-2c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.1 5.1 0 0 0 1.1 2.7 11.7 11.7 0 0 0 4.5 4c1.7.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.3-.3-.4-.6-.5z" />
  </svg>
  <svg v-else viewBox="0 0 24 24" aria-hidden="true">
    <defs>
      <linearGradient :id="`${gid}-ig`" x1="2" y1="22" x2="22" y2="2">
        <stop offset="0" stop-color="#FEDA75" />
        <stop offset="0.35" stop-color="#FA7E1E" />
        <stop offset="0.6" stop-color="#D62976" />
        <stop offset="1" stop-color="#4F5BD5" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="6" :fill="`url(#${gid}-ig)`" />
    <circle cx="12" cy="12" r="4.4" fill="none" stroke="#fff" stroke-width="2" />
    <circle cx="17.3" cy="6.7" r="1.3" fill="#fff" />
  </svg>
</template>
