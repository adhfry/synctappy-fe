/**
 * robots.txt — generated so the sitemap URL always matches NUXT_PUBLIC_SITE_URL.
 */
export default defineEventHandler((event) => {
  const base = useRuntimeConfig(event).public.siteUrl.replace(/\/$/, '')
  setHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=86400')
  return [
    'User-agent: *',
    'Allow: /',
    // Nuxt internals that don't need indexing
    'Disallow: /_nuxt/builds/',
    '',
    `Sitemap: ${base}/sitemap.xml`,
    '',
  ].join('\n')
})
