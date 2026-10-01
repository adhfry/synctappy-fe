import type { Locale } from '~/types/content'
import { isLocale } from './useLocale'

/**
 * Per-page SEO: title/description, canonical + og:url, hreflang alternates,
 * localized Open Graph image, Twitter card and a linked JSON-LD @graph.
 *
 * URL model for languages (see useLocale):
 *   /            → language auto-detected (x-default)
 *   /?lang=en    → English   (own canonical, indexable)
 *   /?lang=id    → Indonesian (own canonical, indexable)
 */
export interface PageSeoOptions {
  /** Route path, e.g. '/' or '/privacy' */
  path: string
  title: () => string
  description: () => string
  /** Extra schema.org nodes for this page (WebPage/WebSite/Organization are added automatically) */
  schema?: () => Record<string, unknown>[]
  /** Breadcrumb trail (excluding Home) → BreadcrumbList */
  breadcrumb?: () => { name: string, path: string }[]
}

const OG_LOCALES: Record<Locale, string> = { en: 'en_US', id: 'id_ID' }

export function usePageSeo(opts: PageSeoOptions) {
  const { public: { siteUrl } } = useRuntimeConfig()
  const route = useRoute()
  const { locale, t } = useLocale()

  const base = siteUrl.replace(/\/$/, '')
  const pathUrl = (path: string) => `${base}${path === '/' ? '/' : path}`
  const langUrl = (path: string, lang: Locale) => `${pathUrl(path)}?lang=${lang}`

  /** Self-referencing canonical: keeps ?lang= when the page was opened with it */
  const canonical = computed(() => (isLocale(route.query.lang) ? langUrl(opts.path, route.query.lang) : pathUrl(opts.path)))
  const ogImage = computed(() => `${base}/images/synctappy/og-${locale.value}.jpg`)
  const otherLocale = computed<Locale>(() => (locale.value === 'en' ? 'id' : 'en'))

  useSeoMeta({
    title: opts.title,
    description: opts.description,
    ogTitle: opts.title,
    ogDescription: opts.description,
    ogUrl: canonical,
    ogType: 'website',
    ogLocale: () => OG_LOCALES[locale.value],
    ogLocaleAlternate: () => OG_LOCALES[otherLocale.value],
    ogImage: ogImage,
    ogImageSecureUrl: ogImage,
    ogImageType: 'image/jpeg',
    ogImageWidth: 1200,
    ogImageHeight: 630,
    ogImageAlt: () => t.value.meta.imageAlt,
    twitterCard: 'summary_large_image',
    twitterTitle: opts.title,
    twitterDescription: opts.description,
    twitterImage: ogImage,
    twitterImageAlt: () => t.value.meta.imageAlt,
  })

  useHead({
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'en', href: () => langUrl(opts.path, 'en') },
      { rel: 'alternate', hreflang: 'id', href: () => langUrl(opts.path, 'id') },
      { rel: 'alternate', hreflang: 'x-default', href: () => pathUrl(opts.path) },
    ],
    script: [{
      key: 'ld-json',
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify(graph()),
    }],
  })

  function graph() {
    const ids = {
      synvora: `${base}/#synvora`,
      org: `${base}/#organization`,
      website: `${base}/#website`,
      page: `${canonical.value}#webpage`,
    }
    const nodes: Record<string, unknown>[] = [
      {
        '@type': 'Organization',
        '@id': ids.synvora,
        'name': 'Synvora Teknologi Indonesia',
        'alternateName': 'SYNVORA',
        'url': 'https://synvorateknologiindonesia.web.id',
      },
      {
        '@type': 'Organization',
        '@id': ids.org,
        'name': 'Synctappy',
        'alternateName': 'Synctappy by Synvora',
        'url': `${base}/`,
        'logo': {
          '@type': 'ImageObject',
          'url': `${base}/brand/web/mark-512.png`,
          'width': 512,
          'height': 512,
        },
        'image': `${base}/brand/web/logo-light.png`,
        'parentOrganization': { '@id': ids.synvora },
        'areaServed': 'ID',
      },
      {
        '@type': 'WebSite',
        '@id': ids.website,
        'url': `${base}/`,
        'name': 'Synctappy',
        'alternateName': 'Synctappy by Synvora',
        'inLanguage': ['en', 'id'],
        'publisher': { '@id': ids.org },
      },
      {
        '@type': 'WebPage',
        '@id': ids.page,
        'url': canonical.value,
        'name': opts.title(),
        'description': opts.description(),
        'inLanguage': locale.value,
        'isPartOf': { '@id': ids.website },
        'publisher': { '@id': ids.org },
        'primaryImageOfPage': {
          '@type': 'ImageObject',
          'url': ogImage.value,
          'width': 1200,
          'height': 630,
          'caption': t.value.meta.imageAlt,
        },
        ...(opts.breadcrumb ? { breadcrumb: { '@id': `${canonical.value}#breadcrumb` } } : {}),
      },
    ]

    if (opts.breadcrumb) {
      const trail = [{ name: t.value.legal.home, path: '/' }, ...opts.breadcrumb()]
      nodes.push({
        '@type': 'BreadcrumbList',
        '@id': `${canonical.value}#breadcrumb`,
        'itemListElement': trail.map((c, i) => ({
          '@type': 'ListItem',
          'position': i + 1,
          'name': c.name,
          'item': pathUrl(c.path),
        })),
      })
    }

    nodes.push(...(opts.schema?.() ?? []))
    return { '@context': 'https://schema.org', '@graph': nodes }
  }
}
