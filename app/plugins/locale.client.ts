import { detectLocale } from '~/composables/useLocale'

/**
 * Static/prerendered fallback: when the HTML was rendered without the
 * visitor's Accept-Language (e.g. `nuxt generate`), switch to the device's
 * primary language after hydration — unless the user already chose one.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const { locale, hasExplicitChoice } = useLocale()

  nuxtApp.hook('app:mounted', () => {
    if (hasExplicitChoice.value) return
    const device = detectLocale(navigator.languages)
    if (device !== locale.value) locale.value = device
  })
})
