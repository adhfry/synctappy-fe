import type { LandingContent } from '~/types/content'

/**
 * English landing content. `content/id.ts` must mirror this shape exactly
 * (enforced by the LandingContent type). Later this can be served by the
 * Laravel API, e.g. GET /api/v1/landing?locale=en.
 *
 * Honesty rules (see DESIGN.md §8): no final prices, analytics are SAMPLE
 * data, campaigns are TEMPLATES, no review incentives.
 */
export const en: LandingContent = {
  meta: {
    title: 'Synctappy — Smart Touchpoint Platform',
    description: 'Turn every tap and scan into a digital experience with Synctappy.',
    ogLocale: 'en_US',
  },
  common: { startTrial: 'Start Free Trial', talkToSynvora: 'Talk to Synvora', signIn: 'Sign In', skipToContent: 'Skip to content' },
  language: { label: 'Language', names: { en: 'English', id: 'Bahasa Indonesia' } },
  nav: {
    links: [
      { label: 'Product', href: '#solution' },
      { label: 'Solutions', href: '#use-cases' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
    ],
    main: 'Main',
    backToTop: 'Synctappy — back to top',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },
  destinations: [
    { id: 'review', label: 'Google Review', icon: 'star', brand: 'google', tone: 'blue' },
    { id: 'whatsapp', label: 'WhatsApp', icon: 'message', brand: 'whatsapp', tone: 'green' },
    { id: 'website', label: 'Website', icon: 'globe', tone: 'slate' },
    { id: 'menu', label: 'Digital Menu', icon: 'utensils', tone: 'amber' },
    { id: 'instagram', label: 'Instagram', icon: 'sparkles', brand: 'instagram', tone: 'pink' },
    { id: 'location', label: 'Location', icon: 'map-pin', tone: 'red' },
    { id: 'booking', label: 'Booking', icon: 'calendar-check', tone: 'violet' },
    { id: 'product', label: 'Product Catalog', icon: 'shopping-bag', tone: 'cyan' },
    { id: 'contact', label: 'Contact', icon: 'phone', tone: 'slate' },
  ],
  profileScreen: {
    demoProfile: 'Coffee & Eatery · Demo profile',
    shareOnGoogle: 'Share your experience on Google',
    thisWeek: 'This week',
    featured: 'Favorite menu picks',
    poweredBy: 'Powered by Synctappy',
  },
  cardMockup: { tapToConnect: 'Tap to connect' },

  hero: {
    eyebrow: 'Smart Touchpoint Platform',
    titleLead: 'Turn Every Touch Into a',
    titleHighlight: 'Digital Experience.',
    subtitle: 'Connect your customers to reviews, links, profiles, promotions, and more — with a simple tap or scan.',
    ctaPrimary: 'Try Synctappy Free',
    ctaSecondary: 'See How It Works',
    highlights: [
      { icon: 'nfc', title: 'Tap & Scan', description: 'NFC + QR Code' },
      { icon: 'link', title: 'Multi-Link', description: 'Every channel, one place' },
      { icon: 'chart', title: 'Analytics', description: 'See every interaction' },
      { icon: 'gift', title: 'Campaign', description: 'Promo & events' },
    ],
    imageAlt: 'A Synctappy acrylic stand for KopiKu Coffee & Eatery on a café counter with a Google Review QR code and NFC tap area, while a customer scans it with a smartphone.',
    tapTitle: 'Tap with NFC',
    tapSubtitle: 'or scan the QR code',
    reviewCallout: 'Opens the Google review page',
  },

  problem: {
    eyebrow: 'The problem',
    title: 'Your customers are already willing to connect.',
    highlight: 'Make it easier.',
    description: 'Most customers are happy to review, follow or come back. What stops them is friction — and what stops you is not knowing where they drop off.',
    items: [
      'Customers won’t type long links or search for your page',
      'Happy customers leave without ever finding your review page',
      'A plain QR code feels like homework, not an experience',
      'Your menu, WhatsApp, maps and socials live in different places',
      'Printed links go stale the moment something changes',
      'You can’t see which touchpoint actually drives engagement',
    ],
    cardLead: 'Synctappy is',
    cardHighlight: 'the shortcut.',
    cardBody: 'One tap turns every physical touchpoint into a measurable digital journey.',
    cardCta: 'See the solution',
  },

  solution: {
    eyebrow: 'The solution',
    title: 'One Touchpoint.',
    highlight: 'Endless Possibilities.',
    description: 'Synctappy connects a physical touchpoint to a digital experience you control — and turns every interaction into an action you can measure.',
    touchpoint: 'Your touchpoint',
    tapScan: 'Tap / Scan',
    takeAction: 'Take action',
    phoneLabel: 'Smart profile opened after a tap',
    flow: [
      { label: 'Physical', title: 'Touchpoint', text: 'Stand, card or tag with NFC + QR' },
      { label: 'Tap / Scan', title: 'Instant open', text: 'No app, straight to the browser' },
      { label: 'Digital', title: 'Experience', text: 'Profile, links, promos, reviews' },
      { label: 'Result', title: 'Action', text: 'Customers do what matters to you' },
    ],
  },

  how: {
    eyebrow: 'How it works',
    title: 'Simple for customers.',
    highlight: 'Powerful for you.',
    description: 'From a physical tap to a measurable result in four steps — no app for your customers to install.',
    steps: [
      { number: '01', icon: 'nfc', title: 'Tap / Scan', description: 'Customers tap their phone on the NFC chip or scan the QR code. No app needed.' },
      { number: '02', icon: 'smartphone', title: 'Connect', description: 'Synctappy instantly opens your destination or smart profile in the browser.' },
      { number: '03', icon: 'click', title: 'Take Action', description: 'They leave a review, open the menu, chat on WhatsApp, book or follow you.' },
      { number: '04', icon: 'chart', title: 'Analyze', description: 'Every tap, scan and click is recorded in your dashboard, per touchpoint.' },
    ],
  },

  review: {
    eyebrow: 'Google Review',
    title: 'Turn Happy Customers Into Your',
    highlight: 'Next Review.',
    description: 'The moment a customer is happiest is usually at your counter. Synctappy puts your Google review page one tap away — right then.',
    points: [
      'Opens your Google review page directly — no searching, no typing',
      'Works with NFC tap and QR scan on any modern smartphone',
      'Track how many customers reach your review page',
    ],
    compliance: 'Synctappy makes reviews easier to reach — it never filters, rewards or scripts them. Every customer is free to share their honest experience, in line with Google’s review policies.',
    tapScan: 'Tap / Scan',
    phoneLabel: 'Google review page opened from a Synctappy stand',
    googleReviews: 'Google Reviews',
    postingPublicly: 'Posting publicly · demo',
    placeholder: 'Share details of your own experience at this place',
    post: 'Post',
  },

  multiLink: {
    eyebrow: 'Multi-Link',
    title: 'One tap.',
    highlight: 'Every destination.',
    description: 'A single Synctappy opens a beautiful page with everything your customers need. You choose the order, labels and what shows today.',
    listLabel: 'Supported destinations',
    more: 'Plus TikTok, Facebook, marketplace, payment and any custom URL.',
    phoneLabel: 'Synctappy multi-link page preview',
  },

  profile: {
    eyebrow: 'Smart Profile',
    title: 'Your business,',
    highlight: 'beautifully in one page.',
    description: 'A mobile-first business profile that loads instantly after every tap — branded, organized and always up to date.',
    anatomy: [
      { icon: 'building', title: 'Brand header', description: 'Logo, cover and a short description.' },
      { icon: 'click', title: 'Primary CTA', description: 'The one action that matters most today.' },
      { icon: 'link', title: 'Links & socials', description: 'Menu, WhatsApp, Instagram and more.' },
      { icon: 'map-pin', title: 'Contact & location', description: 'Call, directions and opening hours.' },
      { icon: 'star', title: 'Review', description: 'A direct path to your Google review page.' },
      { icon: 'gift', title: 'Promo slot', description: 'Feature a campaign when you run one.' },
    ],
    phoneLabel: 'Smart profile example',
  },

  dynamic: {
    eyebrow: 'Dynamic Link',
    title: 'Change the Destination.',
    highlight: 'Keep the Touchpoint.',
    description: 'Your NFC chip and QR code point to a Synctappy link, not a fixed URL. Update where it goes from the dashboard — no reprinting, no new hardware.',
    staysSame: 'Stays the same',
    destination: 'Destination',
    chooseLabel: 'Choose a destination',
    nowRedirecting: 'Now redirecting to',
    targets: [
      { id: 'review', label: 'Google Review', path: 'g.page/kopiku/review', note: 'Weekday default' },
      { id: 'menu', label: 'Digital Menu', path: 'kopiku.id/menu', note: 'Lunch hours' },
      { id: 'promo', label: 'Weekend Promo', path: 'kopiku.id/promo', note: 'Scheduled campaign' },
      { id: 'whatsapp', label: 'WhatsApp Order', path: 'wa.me/…', note: 'Evening pre-orders' },
    ],
  },

  analytics: {
    eyebrow: 'Analytics',
    title: 'See what happens',
    highlight: 'after every tap.',
    description: 'Know which touchpoints work, which destinations customers choose and when they engage — per device and per location.',
    capabilities: [
      'Taps and scans per touchpoint',
      'Clicks per destination and link performance',
      'Device and location breakdown',
      'Peak hours and days',
      'Campaign performance',
    ],
    figureLabel: 'Synctappy analytics dashboard preview with sample data',
    nav: ['Overview', 'Devices', 'Destinations', 'Campaigns', 'Settings'],
    overview: 'Overview',
    scope: 'KopiKu · 3 locations · 12 devices',
    sampleData: 'Sample data',
    period: 'Last 14 days',
    // SAMPLE DATA — illustrative only, not from real Synctappy customers.
    stats: [
      { id: 'taps', label: 'Total Taps', value: '12,842', delta: '+12.4%', icon: 'nfc' },
      { id: 'scans', label: 'QR Scans', value: '8,421', delta: '+8.1%', icon: 'qr' },
      { id: 'reviews', label: 'Review Visits', value: '4,218', delta: '+15.2%', icon: 'star' },
      { id: 'whatsapp', label: 'WhatsApp Clicks', value: '1,892', delta: '+6.7%', icon: 'message' },
    ],
    chartTitle: 'Interactions per day',
    chartSubtitle: 'Taps + scans',
    chartLabel: 'Sample line chart trending upward over 14 days',
    today: 'today',
    day: 'Day',
    source: 'Source',
    sources: [
      { label: 'NFC tap', share: 60, color: 'var(--color-brand-600)' },
      { label: 'QR scan', share: 40, color: 'var(--color-violet-500)' },
    ],
    engagementLabel: 'Link engagement',
    engagement: '68.4%',
    topDestinations: 'Top destinations',
    topLinks: [
      { label: 'Google Review', share: 38 },
      { label: 'Digital Menu', share: 27 },
      { label: 'WhatsApp', share: 19 },
      { label: 'Instagram', share: 16 },
    ],
    caption: 'Dashboard preview with illustrative sample data.',
  },

  campaign: {
    eyebrow: 'Campaign & Promo',
    title: 'Turn every touchpoint into a',
    highlight: 'marketing channel.',
    description: 'Schedule promos, seasonal menus and event pages by date, location or device. When the campaign ends, your touchpoint returns to its default destination.',
    ideasLabel: 'Campaign ideas',
    types: ['Seasonal promos', 'Discounts', 'Independence Day', 'Ramadan', 'Local events', 'Business anniversary'],
    // TEMPLATES shown as examples — not live promotions.
    items: [
      { id: 'independence', kind: 'promo', eyebrow: 'Seasonal template', title: 'PROMO KEMERDEKAAN', highlight: '20% OFF', caption: 'All drinks · example campaign', cta: 'View promo' },
      { id: 'seasonal-menu', kind: 'menu', eyebrow: 'Menu launch', title: 'Seasonal Drink', highlight: 'New menu', caption: 'Limited season · example', cta: 'See menu' },
      { id: 'live-event', kind: 'event', eyebrow: 'Local event', title: 'Friday Live Music', highlight: '7 PM', caption: 'Reserve a table · example', cta: 'Details' },
    ],
  },

  hardware: {
    eyebrow: 'Hardware',
    title: 'Physical products.',
    highlight: 'Digital gateways.',
    description: 'Premium NFC + QR hardware designed to be touched. Every device links to your Synctappy workspace and can be managed from the dashboard.',
    customNote: 'Custom branded designs available for businesses and multi-location brands.',
    products: [
      { id: 'stand', name: 'Synctappy Stand', type: 'Acrylic stand · NFC + QR', description: 'A premium countertop display for tables, cashiers and reception desks.', placements: ['Tables', 'Cashier', 'Reception'] },
      { id: 'card', name: 'Synctappy Card', type: 'NFC card · QR on back', description: 'Portable touchpoint for staff, sales teams and on-the-go service.', placements: ['Staff', 'Sales', 'Delivery'] },
      { id: 'tag', name: 'Synctappy Tag', type: 'NFC / QR sticker tag', description: 'Compact tag for walls, doors, packaging, vehicles and product shelves.', placements: ['Doors', 'Packaging', 'Shelves'] },
    ],
  },

  useCases: {
    eyebrow: 'Use cases',
    title: 'Built for every business',
    highlight: 'with a front desk.',
    description: 'Wherever customers meet your business in person, Synctappy turns that moment into a digital connection.',
    tablistLabel: 'Industries',
    scenarioLabel: 'Example scenario',
    destinationsLabel: 'Typical destinations',
    items: [
      { id: 'restaurants', icon: 'utensils', name: 'Restaurants & Cafés', description: 'Turn every table into a menu, a review moment and a reorder channel.', scenario: 'A guest taps the table stand after lunch, browses the menu, then shares their experience on Google.', destinations: ['Digital Menu', 'Google Review', 'WhatsApp'] },
      { id: 'hotels', icon: 'hotel', name: 'Hotels', description: 'Give guests one touchpoint for Wi-Fi info, services and feedback.', scenario: 'A guest scans the room card to see breakfast hours, request housekeeping and leave a review at checkout.', destinations: ['Guest Info', 'WhatsApp', 'Google Review'] },
      { id: 'clinics', icon: 'stethoscope', name: 'Clinics', description: 'Make booking, directions and feedback effortless for patients.', scenario: 'A patient taps at reception to book a follow-up and get directions to the pharmacy.', destinations: ['Booking', 'Location', 'Contact'] },
      { id: 'salons', icon: 'scissors', name: 'Salons & Barbershops', description: 'Show your portfolio and let clients rebook before they leave.', scenario: 'A client taps the mirror tag, views the latest styles on Instagram and books their next visit.', destinations: ['Booking', 'Instagram', 'Google Review'] },
      { id: 'retail', icon: 'store', name: 'Retail', description: 'Connect shelves and checkout to your catalog, promos and socials.', scenario: 'A shopper scans a shelf tag to see product details and this week’s bundle offer.', destinations: ['Product Catalog', 'Promo', 'Instagram'] },
      { id: 'events', icon: 'ticket', name: 'Events', description: 'One tag for schedules, registration, contacts and sponsors.', scenario: 'An attendee taps the booth stand to register, save the contact and follow the organizer.', destinations: ['Registration', 'Contact', 'Website'] },
      { id: 'services', icon: 'briefcase', name: 'Professional Services', description: 'A smart business card that always shows your latest profile.', scenario: 'A consultant hands over a Synctappy Card; the client saves the contact and opens the portfolio.', destinations: ['Smart Profile', 'Contact', 'Website'] },
    ],
  },

  why: {
    eyebrow: 'Why Synctappy',
    title: 'More than an NFC stand.',
    highlight: 'A touchpoint platform.',
    benefits: [
      { icon: 'hand', title: 'Simple', description: 'Tap or scan. No app, no typing, no searching.' },
      { icon: 'route', title: 'Flexible', description: 'One touchpoint, multiple destinations — changeable any time.' },
      { icon: 'chart-line', title: 'Measurable', description: 'See what customers actually do after every tap.' },
      { icon: 'layers', title: 'Scalable', description: 'Grow from one table to many locations and devices.' },
    ],
    typicalLabel: 'Typical QR sticker',
    typical: ['One fixed link', 'Reprint to change anything', 'No idea who scanned', 'QR only'],
    synctappy: ['Multiple destinations', 'Change targets from the dashboard', 'Taps, scans & clicks per device', 'NFC + QR in one touchpoint'],
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Start free.',
    highlight: 'Grow when you’re ready.',
    description: 'Every plan combines Synctappy hardware with the cloud platform. Final pricing will be announced at launch.',
    recommended: 'Recommended',
    // Plans follow blueprint §10; prices there are a pilot hypothesis → "Coming soon".
    plans: [
      { id: 'trial', name: 'Free Trial', audience: 'Try Synctappy risk-free', priceLabel: 'Free', priceNote: '14-day trial', devices: '1 device', features: ['1 smart profile', 'QR + NFC destination', 'Basic analytics'], cta: 'Start Free Trial' },
      { id: 'basic', name: 'Basic', audience: 'For small businesses', priceLabel: 'Coming soon', priceNote: 'Monthly plan', devices: 'Up to 3 devices', features: ['Multi-link profile', 'Basic analytics', 'Standard templates'], cta: 'Get notified' },
      { id: 'pro', name: 'Pro', audience: 'For growing businesses', priceLabel: 'Coming soon', priceNote: 'Monthly plan', devices: 'Up to 10 devices', features: ['Advanced analytics', 'Campaigns & promos', 'Data export', 'More templates'], cta: 'Get notified', highlighted: true },
      { id: 'premium', name: 'Premium', audience: 'For multi-location brands', priceLabel: 'Coming soon', priceNote: 'Monthly plan', devices: 'Up to 30 devices', features: ['Multi-location', 'Custom branding', 'Advanced reports', 'Priority support'], cta: 'Get notified' },
    ],
    enterpriseTitle: 'Enterprise',
    enterpriseBody: 'White-label, custom domain, API, SSO and fleet provisioning for large organizations.',
  },

  finalCta: {
    eyebrow: 'Synctappy by Synvora',
    titleLead: 'Tap. Connect.',
    titleHighlight: 'Grow.',
    subtitle: 'Your next customer interaction is only one tap away.',
    imageAlt: 'Synctappy acrylic stand for KopiKu with a Google review QR code next to an iPhone showing the KopiKu smart profile, with the handwritten words Tap. Connect. Grow.',
  },

  footer: {
    about: 'Smart touchpoint platform that connects physical NFC & QR touchpoints to digital experiences.',
    columns: [
      {
        title: 'Product',
        links: [
          { label: 'How It Works', href: '#how-it-works' },
          { label: 'Analytics', href: '#analytics' },
          { label: 'Hardware', href: '#hardware' },
          { label: 'Pricing', href: '#pricing' },
        ],
      },
      {
        title: 'Solutions',
        links: [
          { label: 'Google Review', href: '#google-review' },
          { label: 'Multi-Link', href: '#multi-link' },
          { label: 'Dynamic Link', href: '#dynamic-link' },
          { label: 'Use Cases', href: '#use-cases' },
        ],
      },
    ],
    company: 'Company',
    privacy: 'Privacy Policy',
    terms: 'Terms of Service',
    cookieSettings: 'Cookie settings',
    soon: '(soon)',
    rights: 'Synctappy by Synvora. All rights reserved.',
    madeIn: 'Made in Indonesia',
  },

  modal: {
    trial: {
      eyebrow: 'Free trial',
      title: 'Your 14-day trial is almost ready.',
      body: 'Synctappy is preparing its public launch. The free trial will include one smart profile, a QR + NFC destination and basic analytics.',
    },
    signin: {
      eyebrow: 'Dashboard',
      title: 'Sign in opens at launch.',
      body: 'The Synctappy dashboard — devices, destinations, campaigns and analytics — becomes available together with the free trial.',
    },
    contact: {
      eyebrow: 'Talk to Synvora',
      title: 'Let’s design your first touchpoint.',
      body: 'Planning a rollout for multiple locations, custom branded hardware or an enterprise setup? The Synvora team can help you plan it.',
    },
    close: 'Close dialog',
    gotIt: 'Got it',
    noContact: 'Official contact channels will be announced at launch.',
  },
  cookies: {
    title: 'Cookies, kept minimal',
    body: 'We use an essential cookie to remember this choice and, if you allow it, a preference cookie to remember your language. No analytics or advertising cookies.',
    acceptAll: 'Accept all',
    accept: 'Accept',
    customize: 'Settings',
    save: 'Save choices',
    policyLink: 'Privacy Policy',
    settingsLink: 'Cookie settings',
    alwaysOn: 'Always on',
    notUsed: 'Not used',
    categories: {
      essential: { title: 'Essential', description: 'Required for the site to work, e.g. remembering your cookie choice.' },
      preferences: { title: 'Preferences', description: 'Remembers the language you choose.' },
      analytics: { title: 'Analytics', description: 'Usage measurement. We don’t use analytics cookies today.' },
      marketing: { title: 'Marketing', description: 'Advertising and tracking. We don’t use marketing cookies.' },
    },
  },
  legal: { backHome: 'Back to home', onThisPage: 'On this page' },
}
