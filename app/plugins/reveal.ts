import type { Directive } from 'vue'

/**
 * v-reveal — scroll-triggered fade/slide in.
 *   v-reveal            → fade-up
 *   v-reveal="120"      → fade-up with 120ms delay
 *   v-reveal="{ delay: 80, variant: 'fade' }"
 *
 * `html.reveal-ready` is set by an inline head script (see app.vue) so
 * elements start hidden before first paint only when JS is available.
 */
type RevealValue = number | { delay?: number, variant?: 'up' | 'fade' } | undefined

function normalize(value: RevealValue) {
  if (typeof value === 'number') return { delay: value, variant: 'up' as const }
  return { delay: value?.delay ?? 0, variant: value?.variant ?? ('up' as const) }
}

export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | null = null

  const getObserver = () => {
    if (observer) return observer
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer?.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )
    return observer
  }

  const reveal: Directive<HTMLElement, RevealValue> = {
    getSSRProps(binding) {
      const { delay, variant } = normalize(binding.value)
      return {
        'data-reveal': variant,
        'style': delay ? `--reveal-delay:${delay}ms` : undefined,
      }
    },
    mounted(el, binding) {
      const { delay, variant } = normalize(binding.value)
      el.dataset.reveal = variant
      if (delay) el.style.setProperty('--reveal-delay', `${delay}ms`)
      if (!('IntersectionObserver' in window)) {
        el.classList.add('is-visible')
        return
      }
      getObserver().observe(el)
    },
    unmounted(el) {
      observer?.unobserve(el)
    },
  }

  nuxtApp.vueApp.directive('reveal', reveal)
})
