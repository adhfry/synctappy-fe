<script setup lang="ts">
import { MapPin, Utensils } from 'lucide-vue-next'

/**
 * CSS/SVG rebuild of the real Synctappy acrylic stand (KopiKu demo edition),
 * matched to the stand in hero_banner_synctappy.png.
 * All sizes use container-query units (cqw) so the stand scales with the
 * parent width — set a width on the parent.
 */
const tiles = [
  { id: 'menu', label: 'Lihat Menu' },
  { id: 'whatsapp', label: 'WhatsApp' },
  { id: 'location', label: 'Lokasi' },
  { id: 'instagram', label: 'Instagram' },
] as const
</script>

<template>
  <div class="@container relative w-full select-none" aria-hidden="true">
    <!-- acrylic plate -->
    <div
      class="relative z-0 mx-auto w-[93%] rounded-t-[5cqw] rounded-b-[1cqw] bg-[linear-gradient(105deg,rgb(255_255_255/0.95)_0%,rgb(225_232_245/0.55)_8%,rgb(255_255_255/0.35)_50%,rgb(225_232_245/0.55)_92%,rgb(255_255_255/0.95)_100%)] p-[1.6cqw] pb-[7cqw] shadow-[0_3cqw_8cqw_-3cqw_rgb(13_20_64/0.35),inset_0_0_0_0.35cqw_rgb(255_255_255/0.9),inset_0.8cqw_0_1.2cqw_-0.6cqw_rgb(255_255_255/0.9)] ring-1 ring-[rgb(170_185_215/0.55)]"
    >
      <!-- printed card -->
      <div class="relative flex flex-col items-center overflow-hidden rounded-t-[3.8cqw] rounded-b-[0.6cqw] bg-white pt-[6cqw] shadow-[inset_0_0_0_0.2cqw_rgb(13_20_64/0.05)]">
        <!-- business header -->
        <svg viewBox="0 0 64 36" class="w-[17cqw]">
          <g fill="#3b2314">
            <ellipse cx="20" cy="18" rx="13" ry="17" transform="rotate(28 20 18)" />
            <ellipse cx="44" cy="20" rx="12" ry="15.5" transform="rotate(28 44 20)" />
          </g>
          <g fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round">
            <path d="M14 7c8 6 2 16 11 23" />
            <path d="M39 9c7 6 2 14 10 20" />
          </g>
        </svg>
        <p class="mt-[0.4cqw] font-serif text-[10.5cqw] font-bold leading-none tracking-[-0.02em] text-[#3b2314]">KopiKu</p>
        <p class="mt-[1cqw] text-[2.5cqw] font-semibold tracking-[0.22em] text-[#3b2314]">COFFEE &amp; EATERY</p>

        <!-- Google review row -->
        <div class="mt-[5cqw] flex w-full items-center justify-center gap-[3cqw] px-[5cqw]">
          <span class="grid size-[21cqw] shrink-0 place-items-center rounded-full bg-white shadow-[0_0.6cqw_2cqw_rgb(13_20_64/0.18)]">
            <UiBrandIcon name="google" class="size-[16cqw]" />
          </span>
          <div class="min-w-0 leading-none">
            <p class="whitespace-nowrap text-[7.6cqw] font-bold tracking-[-0.02em] text-ink-900">Review kami</p>
            <p class="mt-[0.6cqw] whitespace-nowrap text-[6.6cqw] text-ink-800">di Google</p>
            <div class="mt-[1.6cqw] flex gap-[0.8cqw] text-[#f5b301]">
              <svg v-for="i in 5" :key="i" viewBox="0 0 24 24" class="w-[6.2cqw] fill-current"><path d="m12 2.2 2.95 6.1 6.7.95-4.85 4.7 1.15 6.65L12 17.45 6.05 20.6 7.2 13.95 2.35 9.25l6.7-.95z" /></svg>
            </div>
          </div>
        </div>

        <!-- QR + tap row -->
        <div class="mt-[5cqw] grid w-full grid-cols-[1.45fr_1fr] items-center gap-[3cqw] px-[8cqw]">
          <div class="relative rounded-[1.4cqw] bg-white p-[2.4cqw] shadow-[0_0.4cqw_1.6cqw_rgb(13_20_64/0.12)]">
            <!-- Google-coloured corner brackets -->
            <span class="absolute left-0 top-0 size-[6cqw] rounded-tl-[1.4cqw] border-l-[0.9cqw] border-t-[0.9cqw] border-[#ea4335]" />
            <span class="absolute right-0 top-0 size-[6cqw] rounded-tr-[1.4cqw] border-r-[0.9cqw] border-t-[0.9cqw] border-[#4285f4]" />
            <span class="absolute bottom-0 left-0 size-[6cqw] rounded-bl-[1.4cqw] border-b-[0.9cqw] border-l-[0.9cqw] border-[#34a853]" />
            <span class="absolute bottom-0 right-0 size-[6cqw] rounded-br-[1.4cqw] border-b-[0.9cqw] border-r-[0.9cqw] border-[#fbbc05]" />
            <UiQrGlyph :seed="11" color="#111111" class="block w-full" />
          </div>
          <div class="flex flex-col items-center text-[#111]">
            <!-- hand holding phone + NFC waves -->
            <svg viewBox="0 0 48 54" class="w-[17cqw]" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">
              <rect x="12" y="7" width="17" height="30" rx="3.2" />
              <path d="M33 7.5a9 9 0 0 1 2.5 11M37.5 3a15 15 0 0 1 4 19" />
              <path d="M12.5 22c-3.4.6-5 3.6-4.2 6.6l2.6 9.2c1 3.6 4.4 6.2 8.2 6.2h5.6c4.6 0 8.3-3.7 8.3-8.3V35" />
              <path d="M29 24.5h3a2.4 2.4 0 0 1 0 4.8h-3M29 29.3h3.6a2.4 2.4 0 0 1 0 4.8H29M29 34.1h2.6a2.2 2.2 0 0 1 0 4.4" />
            </svg>
            <p class="mt-[1.4cqw] text-[6cqw] font-extrabold leading-none">TAP</p>
            <p class="mt-[0.6cqw] text-[4.6cqw] leading-none">di sini</p>
          </div>
        </div>

        <!-- quick links -->
        <div class="mt-[5cqw] grid w-full grid-cols-4 gap-[2cqw] px-[5cqw]">
          <div
            v-for="t in tiles"
            :key="t.id"
            class="flex flex-col items-center gap-[1.8cqw] rounded-[2.6cqw] bg-white px-[0.6cqw] py-[3cqw] shadow-[0_0.4cqw_1.6cqw_rgb(13_20_64/0.12)] ring-1 ring-[rgb(13_20_64/0.05)]"
          >
            <Utensils v-if="t.id === 'menu'" class="size-[7.6cqw] text-[#111]" :stroke-width="2.2" />
            <UiBrandIcon v-else-if="t.id === 'whatsapp'" name="whatsapp" class="size-[7.6cqw]" />
            <MapPin v-else-if="t.id === 'location'" class="size-[7.6cqw] fill-[#ea4335] text-[#ea4335] [&>circle]:fill-white [&>circle]:stroke-white" />
            <UiBrandIcon v-else name="instagram" class="size-[7.6cqw]" />
            <span class="whitespace-nowrap text-[3cqw] font-medium leading-none text-[#222]">{{ t.label }}</span>
          </div>
        </div>

        <!-- Google-coloured wave band -->
        <svg viewBox="0 0 300 95" preserveAspectRatio="none" class="mt-[4cqw] h-[19cqw] w-full">
          <defs>
            <linearGradient id="stand-band" x1="0" x2="1">
              <stop offset="0" stop-color="#2f6fe8" />
              <stop offset="0.36" stop-color="#4285f4" />
              <stop offset="0.52" stop-color="#e8345a" />
              <stop offset="0.66" stop-color="#f4511e" />
              <stop offset="0.76" stop-color="#fbbc05" />
              <stop offset="0.88" stop-color="#34a853" />
              <stop offset="1" stop-color="#2e9d4c" />
            </linearGradient>
            <linearGradient id="stand-band-top" x1="0" y1="0" x2="0.7" y2="1">
              <stop offset="0" stop-color="#4285f4" />
              <stop offset="1" stop-color="#4285f4" stop-opacity="0" />
            </linearGradient>
          </defs>
          <!-- main ribbon: sags in the middle, rises to the right -->
          <path d="M0 26C55 14 115 46 175 46S255 24 300 2V64C245 84 160 96 95 92S25 84 0 90Z" fill="url(#stand-band)" />
          <!-- blue swoosh folding over the left half -->
          <path d="M0 26C55 14 115 46 175 46C140 60 95 66 55 64S10 58 0 60Z" fill="url(#stand-band-top)" opacity="0.9" />
        </svg>

        <!-- footer -->
        <div class="flex items-center gap-[2cqw] pb-[4cqw] pt-[1cqw]">
          <span class="text-[2.9cqw] font-medium text-[#222]">Powered by</span>
          <UiLogo class="h-[6cqw]" />
        </div>
      </div>
    </div>

    <!-- acrylic base (plate is slotted into it) -->
    <div class="relative z-10 mx-auto -mt-[7cqw] h-[11cqw] w-full">
      <!-- top face -->
      <div class="absolute inset-x-[2%] top-0 h-[42%] bg-[linear-gradient(180deg,rgb(255_255_255/0.75),rgb(214_224_242/0.45))] [clip-path:polygon(4%_0,96%_0,100%_100%,0_100%)]" />
      <!-- slot line -->
      <div class="absolute left-[7%] right-[7%] top-[18%] h-[0.5cqw] rounded-full bg-[rgb(170_185_215/0.6)]" />
      <!-- front face -->
      <div class="absolute inset-x-0 bottom-0 h-[58%] rounded-[0.8cqw] bg-[linear-gradient(180deg,rgb(255_255_255/0.85),rgb(230_236_248/0.55)_60%,rgb(255_255_255/0.8))] shadow-[0_2.4cqw_4cqw_-1.6cqw_rgb(13_20_64/0.4),inset_0_0.3cqw_0_rgb(255_255_255/0.95)] ring-1 ring-[rgb(170_185_215/0.6)]" />
    </div>
  </div>
</template>
