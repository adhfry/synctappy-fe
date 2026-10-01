import type { IconKey } from '~/utils/icons'

/**
 * Content contracts for the landing page.
 * Shapes are intentionally flat + serializable so each list can later be
 * served by the Laravel API (e.g. GET /api/v1/landing/pricing-plans).
 */

export type BrandIconKey = 'google' | 'whatsapp' | 'instagram'

export interface NavLink {
  label: string
  href: string
}

export interface IconItem {
  icon: IconKey
  title: string
  description: string
}

export interface Step extends IconItem {
  number: string
}

export interface Destination {
  id: string
  label: string
  /** Lucide icon key, or a brand glyph key when `brand` is set */
  icon: IconKey
  brand?: BrandIconKey
  tone: 'blue' | 'green' | 'red' | 'violet' | 'amber' | 'cyan' | 'pink' | 'slate'
}

export interface AnalyticsStat {
  id: string
  label: string
  value: string
  delta: string
  icon: IconKey
}

export interface Campaign {
  id: string
  kind: 'promo' | 'menu' | 'event'
  eyebrow: string
  title: string
  highlight: string
  caption: string
  cta: string
}

export interface HardwareProduct {
  id: 'stand' | 'card' | 'tag'
  name: string
  type: string
  description: string
  placements: string[]
}

export interface UseCase {
  id: string
  icon: IconKey
  name: string
  description: string
  scenario: string
  destinations: string[]
}

export interface PricingPlan {
  id: 'trial' | 'basic' | 'pro' | 'premium'
  name: string
  audience: string
  /** Display label until final pricing is validated — never a real price. */
  priceLabel: string
  priceNote: string
  devices: string
  features: string[]
  cta: string
  highlighted?: boolean
}

/* ------------------------------------------------------------------ */
/* Localized landing content (one object per locale: content/en, id)   */
/* ------------------------------------------------------------------ */

export type Locale = 'en' | 'id'

/** Standard section heading copy (see UiSectionHeading). */
export interface Heading {
  eyebrow: string
  title: string
  highlight: string
  description?: string
}

export interface DynamicTarget {
  id: string
  label: string
  path: string
  note: string
}

export interface CtaCopy {
  eyebrow: string
  title: string
  body: string
}

export interface LandingContent {
  meta: { title: string, description: string, ogLocale: string }
  common: { startTrial: string, talkToSynvora: string, signIn: string, skipToContent: string }
  language: { label: string, names: Record<Locale, string> }
  nav: { links: NavLink[], main: string, backToTop: string, openMenu: string, closeMenu: string }
  /** Shared destination catalogue (labels are localized) */
  destinations: Destination[]
  profileScreen: { demoProfile: string, shareOnGoogle: string, thisWeek: string, featured: string, poweredBy: string }
  cardMockup: { tapToConnect: string }

  hero: {
    eyebrow: string
    titleLead: string
    titleHighlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    highlights: IconItem[]
    imageAlt: string
    tapTitle: string
    tapSubtitle: string
    reviewCallout: string
  }
  problem: Heading & { items: string[], cardLead: string, cardHighlight: string, cardBody: string, cardCta: string }
  solution: Heading & {
    touchpoint: string
    tapScan: string
    takeAction: string
    phoneLabel: string
    flow: { label: string, title: string, text: string }[]
  }
  how: Heading & { steps: Step[] }
  review: Heading & {
    points: string[]
    compliance: string
    tapScan: string
    phoneLabel: string
    googleReviews: string
    postingPublicly: string
    placeholder: string
    post: string
  }
  multiLink: Heading & { listLabel: string, more: string, phoneLabel: string }
  profile: Heading & { anatomy: IconItem[], phoneLabel: string }
  dynamic: Heading & {
    staysSame: string
    destination: string
    chooseLabel: string
    nowRedirecting: string
    targets: DynamicTarget[]
  }
  analytics: Heading & {
    capabilities: string[]
    figureLabel: string
    nav: string[]
    overview: string
    scope: string
    sampleData: string
    period: string
    stats: AnalyticsStat[]
    chartTitle: string
    chartSubtitle: string
    chartLabel: string
    today: string
    day: string
    source: string
    sources: { label: string, share: number, color: string }[]
    engagementLabel: string
    engagement: string
    topDestinations: string
    topLinks: { label: string, share: number }[]
    caption: string
  }
  campaign: Heading & { ideasLabel: string, types: string[], items: Campaign[] }
  hardware: Heading & { customNote: string, products: HardwareProduct[] }
  useCases: Heading & { tablistLabel: string, scenarioLabel: string, destinationsLabel: string, items: UseCase[] }
  why: Heading & { benefits: IconItem[], typicalLabel: string, typical: string[], synctappy: string[] }
  pricing: Heading & { recommended: string, plans: PricingPlan[], enterpriseTitle: string, enterpriseBody: string }
  finalCta: { eyebrow: string, titleLead: string, titleHighlight: string, subtitle: string, imageAlt: string }
  footer: {
    about: string
    columns: { title: string, links: NavLink[] }[]
    company: string
    privacy: string
    terms: string
    cookieSettings: string
    soon: string
    rights: string
    madeIn: string
  }
  modal: { trial: CtaCopy, signin: CtaCopy, contact: CtaCopy, close: string, gotIt: string, noContact: string }
  cookies: {
    title: string
    body: string
    /** Accept all categories (incl. preferences) */
    acceptAll: string
    /** Accept essential cookies only */
    accept: string
    customize: string
    save: string
    policyLink: string
    settingsLink: string
    alwaysOn: string
    notUsed: string
    categories: { essential: CookieCategory, preferences: CookieCategory, analytics: CookieCategory, marketing: CookieCategory }
  }
  legal: { backHome: string, onThisPage: string }
}

export interface CookieCategory {
  title: string
  description: string
}
