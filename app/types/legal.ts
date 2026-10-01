/** Structured legal documents (rendered by components/legal/LegalDocument.vue). */

export type LegalBlock =
  | { type: 'p', text: string }
  | { type: 'ul', items: string[] }
  | { type: 'ol', items: string[] }
  | { type: 'h3', text: string }
  | { type: 'quote', text: string }
  | { type: 'note', title?: string, text: string }
  | { type: 'table', head: string[], rows: string[][] }
  | { type: 'contact', rows: { label: string, value: string }[] }

export interface LegalSection {
  /** Anchor id (e.g. "cookies" → /privacy#cookies) */
  id: string
  title: string
  blocks: LegalBlock[]
}

export interface LegalDocument {
  title: string
  subtitle: string
  effectiveLabel: string
  effective: string
  updatedLabel: string
  updated: string
  /** Shown prominently until the document is final */
  draftNotice?: string
  intro: LegalBlock[]
  sections: LegalSection[]
}
