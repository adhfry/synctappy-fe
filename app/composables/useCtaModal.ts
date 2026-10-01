/**
 * Shared state for the pre-launch CTA dialog.
 * Backend (auth, trial signup, contact) is not built yet — every CTA opens
 * this dialog instead of a fake form. Replace `open()` call sites with real
 * routes once the Laravel API exists.
 */
export type CtaIntent = 'trial' | 'signin' | 'contact'

export function useCtaModal() {
  const intent = useState<CtaIntent | null>('cta-modal-intent', () => null)

  const open = (value: CtaIntent) => {
    intent.value = value
  }
  const close = () => {
    intent.value = null
  }

  return { intent, open, close }
}
