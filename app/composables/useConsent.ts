/**
 * Cookie consent state (UU PDP-friendly, non-intrusive).
 *
 * Cookies actually used by this site today:
 *  - synctappy_consent  essential   → stores this decision
 *  - synctappy_lang     preferences → remembers a manually chosen language
 * There are NO analytics or marketing cookies yet. If you add any, add a
 * category here, gate the script on it, and update the Privacy Policy
 * (content/legal/privacy.*.ts §10) and DESIGN.md.
 */
import { LOCALE_COOKIE } from './useLocale'

export interface ConsentState {
  v: 1
  preferences: boolean
  /** ISO date of the decision (kept as a record of consent) */
  at: string
}

export const CONSENT_COOKIE = 'synctappy_consent'

export function useConsent() {
  const cookie = useCookie<ConsentState | null>(CONSENT_COOKIE, {
    maxAge: 60 * 60 * 24 * 180, // ask again after ~6 months
    sameSite: 'lax',
    default: () => null,
  })
  /** Settings panel visibility (e.g. reopened from the footer) */
  const panelOpen = useState('consent-panel', () => false)

  const decided = computed(() => cookie.value?.v === 1)
  const allowPreferences = computed(() => cookie.value?.preferences === true)

  const localeCookie = useCookie<string | null>(LOCALE_COOKIE, { maxAge: 60 * 60 * 24 * 365, sameSite: 'lax' })
  const manualLocale = useState('locale-manual', () => false)
  const locale = useState<string>('locale')

  const save = (preferences: boolean) => {
    cookie.value = { v: 1, preferences, at: new Date().toISOString() }
    panelOpen.value = false
    if (preferences) {
      // Persist a language the visitor already picked in this session
      if (manualLocale.value && locale.value) localeCookie.value = locale.value
    }
    else {
      // Withdrawing preference consent removes the preference cookie
      localeCookie.value = null
    }
  }

  return {
    decided,
    allowPreferences,
    panelOpen,
    acceptAll: () => save(true),
    essentialOnly: () => save(false),
    save,
    openSettings: () => (panelOpen.value = true),
  }
}
