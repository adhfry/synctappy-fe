/**
 * Quick SEO audit of rendered pages: prints the head tags that matter and
 * validates JSON-LD, canonical/hreflang, OG image and robots/sitemap.
 *
 *   node scripts/seo-audit.mjs https://synctappy.biz.id
 */
const base = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '')
const pages = ['/', '/?lang=id', '/privacy']
let problems = 0
const warn = (m) => { problems++; console.log(`   ⚠ ${m}`) }

for (const p of pages) {
  const res = await fetch(base + p, { headers: { 'Accept-Language': 'en-US,en;q=0.9' } })
  const html = await res.text()
  const head = html.slice(0, html.indexOf('</head>'))
  const meta = (attr, key) => head.match(new RegExp(`<meta[^>]*${attr}="${key}"[^>]*content="([^"]*)"`, 'i'))?.[1]
    ?? head.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${key}"`, 'i'))?.[1]
  const links = [...head.matchAll(/<link[^>]*rel="(canonical|alternate)"[^>]*>/g)].map(m => m[0])
  const title = head.match(/<title>([^<]*)<\/title>/)?.[1]
  const lang = html.match(/<html[^>]*lang="([^"]+)"/)?.[1]

  console.log(`\n=== ${p}  (HTTP ${res.status}, lang=${lang})`)
  console.log(`   title        ${title} [${title?.length}]`)
  const desc = meta('name', 'description')
  console.log(`   description  ${desc} [${desc?.length}]`)
  for (const k of ['og:type', 'og:url', 'og:locale', 'og:locale:alternate', 'og:image', 'og:image:alt', 'og:site_name', 'twitter:card', 'twitter:image', 'robots', 'theme-color'])
    console.log(`   ${k.padEnd(19)}${(meta(k.startsWith('og:') ? 'property' : 'name', k) ?? '—').slice(0, 110)}`)
  for (const l of links) console.log(`   ${l.replace(/\s+/g, ' ').slice(0, 130)}`)

  // checks
  if (!title || title.length > 60) warn('title missing or > 60 chars')
  if (!desc || desc.length > 160) warn('description missing or > 160 chars')
  const canonical = links.find(l => l.includes('canonical'))?.match(/href="([^"]+)"/)?.[1]
  const ogUrl = meta('property', 'og:url')
  if (canonical !== ogUrl) warn(`canonical (${canonical}) ≠ og:url (${ogUrl})`)
  if (!canonical?.includes(p.split('?')[0] === '/' ? '/' : p.split('?')[0])) warn('canonical does not match page path')
  if (links.filter(l => l.includes('hreflang')).length !== 3) warn('expected 3 hreflang links (en, id, x-default)')
  const blocks = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)]
  for (const [, json] of blocks) {
    try {
      const g = JSON.parse(json)['@graph']
      console.log(`   JSON-LD      ${g.map(n => n['@type']).join(', ')}`)
    }
    catch (e) { warn(`invalid JSON-LD: ${e.message}`) }
  }
  if (!blocks.length) warn('no JSON-LD')
  const img = meta('property', 'og:image')
  if (img) {
    const r = await fetch(img.replace(/^https?:\/\/[^/]+/, base))
    console.log(`   og:image →   HTTP ${r.status} ${r.headers.get('content-type')} ${(+r.headers.get('content-length') / 1024 | 0)} KB`)
    if (!r.ok) warn('og:image not reachable')
  }
}

console.log('\n=== files')
for (const f of ['/robots.txt', '/sitemap.xml', '/site.webmanifest']) {
  const r = await fetch(base + f)
  const body = await r.text()
  console.log(`   ${f.padEnd(18)} HTTP ${r.status} ${r.headers.get('content-type')}`)
  if (!r.ok) warn(`${f} missing`)
  if (f === '/sitemap.xml') console.log(`   sitemap urls: ${(body.match(/<loc>/g) || []).length}, hreflang links: ${(body.match(/hreflang=/g) || []).length}`)
  if (f === '/robots.txt') console.log(`   ${body.trim().split('\n').join(' | ')}`)
}
const h = await fetch(base + '/')
console.log('\n=== headers')
for (const k of ['strict-transport-security', 'x-content-type-options', 'x-frame-options', 'referrer-policy', 'permissions-policy'])
  console.log(`   ${k.padEnd(26)}${h.headers.get(k) ?? '—'}`)
const font = await fetch(`${base}/fonts/space-grotesk-latin-3.woff2`)
console.log(`   font cache-control        ${font.headers.get('cache-control')}`)

console.log(problems ? `\n${problems} problem(s)` : '\n✔ no problems found')
