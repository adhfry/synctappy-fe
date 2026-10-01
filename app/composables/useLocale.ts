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

const isLocale = (v: unknown): v is Locale => v === 'en' || v === 'id'

/**
 * Current locale + its content.
 *  1. explicit user choice (cookie) wins,
 *  2. otherwise the device's primary language (server: Accept-Language,
 *     client fallback in plugins/locale.client.ts: navigator.languages).
 */
export function useLocale() {
  const cookie = useCookie<Locale | null>(LOCALE_COOKIE, { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax', default: () => null })

  const locale = useState<Locale>('locale', () => {
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
  }

  const t = computed(() => contents[locale.value])

  return {
    locale,
    setLocale,
    t,
    hasExplicitChoice: computed(() => manual.value || isLocale(cookie.value)),
  }
}
