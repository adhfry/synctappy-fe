/**
 * sitemap.xml with hreflang alternates (EN / ID / x-default).
 * Each page is listed in three forms that match usePageSeo():
 *   /path (x-default, auto language), /path?lang=en, /path?lang=id
 * Add new public pages to PAGES.
 */
const PAGES: { path: string, changefreq: string, priority: string }[] = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/privacy', changefreq: 'monthly', priority: '0.3' },
]

/** Build time = last content update (static landing content) */
const LASTMOD = new Date().toISOString().slice(0, 10)

export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  const url = (path: string) => `${base}${path}`
  const alternates = (path: string) => [
    `    <xhtml:link rel="alternate" hreflang="en" href="${url(path)}?lang=en"/>`,
    `    <xhtml:link rel="alternate" hreflang="id" href="${url(path)}?lang=id"/>`,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${url(path)}"/>`,
  ].join('\n')

  const entries = PAGES.flatMap(p => [url(p.path), `${url(p.path)}?lang=en`, `${url(p.path)}?lang=id`].map(loc => `  <url>
    <loc>${loc}</loc>
${alternates(p.path)}
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`))

  setHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=3600')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`
})
