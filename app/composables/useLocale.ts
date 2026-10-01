import { en } from '~/content/en'
import { id } from '~/content/id'
import type { LandingContent, Locale } from '~/types/content'

export const LOCALES: Locale[] = ['en', 'id']
export const LOCALE_COOKIE = 'synctappy_lang'

const contents: Record<Locale, LandingContent> = { en, id }

/**
 * Picks a locale from a language preference list (Accept-Language header or
 * navigator.languages). Only the device's PRIMARY language decides:
 * Indonesian ("id", or legacy "in") → 'id', anything else → 'en'.
 */
export function detectLocale(preferences: string | readonly string[] | undefined): Locale {
  const first = (Array.isArray(preferences) ? preferences[0] : String(preferences ?? '').split(',')[0]) ?? ''
  const primary = first.trim().toLowerCase().split(/[-_;]/)[0]
  return primary === 'id' || primary === 'in' ? 'id' : 'en'
}

export const isLocale = (v: unknown): v is Locale => v === 'en' || v === 'id'

/**
 * Current locale + its content. Priority:
 *  1. `?lang=en|id` in the URL — gives each language its own indexable URL
 *     (used by hreflang/sitemap; see usePageSeo),
 *  2. explicit user choice (cookie),
 *  3. the device's primary language (server: Accept-Language, client
 *     fallback in plugins/locale.client.ts: navigator.languages).
 */
export function useLocale() {
  const cookie = useCookie<Locale | null>(LOCALE_COOKIE, { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', default: () => null })

  const route = useRoute()
  const queryLocale = computed(() => (isLocale(route.query.lang) ? route.query.lang : null))

  const locale = useState<Locale>('locale', () => {
    if (queryLocale.value) return queryLocale.value
    if (isLocale(cookie.value)) return cookie.value
    if (import.meta.server) return detectLocale(useRequestHeaders(['accept-language'])['accept-language'])
    return detectLocale(navigator.languages)
  })

  /** Manual pick in this session (used when preference cookies aren't allowed) */
  const manual = useState('locale-manual', () => false)

  /**
   * User picked a language. It is persisted only with preference-cookie
   * consent; otherwise it lasts for this session (see useConsent).
   */
  const setLocale = (value: Locale) => {
    locale.value = value
    manual.value = true
    if (useConsent().allowPreferences.value) cookie.value = value
    // Drop a ?lang= override so the URL matches what the visitor now sees
    if (queryLocale.value && queryLocale.value !== value) {
      const { lang: _lang, ...query } = route.query
      navigateTo({ path: route.path, query, hash: route.hash }, { replace: true })
    }
  }

  const t = computed(() => contents[locale.value])

  return {
    locale,
    setLocale,
    t,
    hasExplicitChoice: computed(() => manual.value || !!queryLocale.value || isLocale(cookie.value)),
  }
}
