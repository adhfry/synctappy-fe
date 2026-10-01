/**
 * Renders the Open Graph / Twitter share images (1200×630) per locale with
 * headless Chrome, using ONLY official assets (logo PNG, tap-connect-grow.png)
 * and the self-hosted fonts. Output: public/images/synctappy/og-{en,id}.png
 * (then converted to JPG by the python step below).
 *
 *   node scripts/render-og.mjs && python -c "..."   (see package.json "og")
 */
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public')
const out = join(pub, 'images', 'synctappy')
const tmp = join(tmpdir(), 'synctappy-og')
mkdirSync(tmp, { recursive: true })

const chrome = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find(existsSync)
if (!chrome) throw new Error('Chrome/Edge not found')

const f = p => pathToFileURL(join(pub, p)).href

const copy = {
  en: {
    eyebrow: 'Smart Touchpoint Platform',
    lead: 'Turn Every Touch Into a',
    highlight: 'Digital Experience.',
    sub: 'Reviews, links, profiles & promos with one tap or scan.',
    chips: ['NFC + QR', 'Multi-Link', 'Analytics'],
  },
  id: {
    eyebrow: 'Platform Smart Touchpoint',
    lead: 'Ubah Setiap Sentuhan Menjadi',
    highlight: 'Pengalaman Digital.',
    sub: 'Review, link, profil & promo, cukup satu tap atau scan.',
    chips: ['NFC + QR', 'Multi-Link', 'Analytics'],
  },
}

const page = c => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:'Space Grotesk';font-weight:500 700;src:url('${f('fonts/space-grotesk-latin-3.woff2')}') format('woff2')}
@font-face{font-family:'Plus Jakarta Sans';font-weight:400 800;src:url('${f('fonts/plus-jakarta-sans-latin-1.woff2')}') format('woff2')}
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{font-family:'Plus Jakarta Sans',sans-serif;color:#fff;position:relative;
  background:radial-gradient(60% 80% at 15% 10%,rgba(59,108,255,.35),transparent 70%),
             radial-gradient(50% 70% at 90% 90%,rgba(123,92,255,.30),transparent 70%),#070b24}
.grid{position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.07) 1px,transparent 1px);background-size:28px 28px;
  -webkit-mask-image:radial-gradient(70% 70% at 30% 40%,#000,transparent)}
.copy{position:absolute;left:72px;top:70px;width:540px}
.logo{display:block;height:62px}
.eyebrow{margin-top:40px;display:inline-flex;align-items:center;gap:10px;font-size:15px;font-weight:700;letter-spacing:.18em;text-transform:uppercase;color:#7fd6f7}
.eyebrow i{width:8px;height:8px;border-radius:50%;background:linear-gradient(95deg,#2356f5,#7b5cff)}
h1{margin-top:18px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:58px;line-height:1.02;letter-spacing:-.035em}
h1 span{background:linear-gradient(95deg,#2bc4f2,#5b7cff 45%,#a07bff);-webkit-background-clip:text;color:transparent}
p{margin-top:20px;font-size:21px;line-height:1.45;color:rgba(255,255,255,.72)}
.chips{position:absolute;left:72px;bottom:58px;display:flex;gap:10px}
.chip{padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);font-size:15px;font-weight:600;color:rgba(255,255,255,.85)}
.url{position:absolute;right:64px;bottom:62px;font-size:17px;font-weight:700;letter-spacing:.02em;color:rgba(255,255,255,.75)}
.visual{position:absolute;right:28px;top:96px;width:590px}
</style></head><body>
<div class="grid"></div>
<img class="visual" src="${f('images/synctappy/tap-connect-grow.png')}">
<div class="copy">
  <img class="logo" src="${f('brand/web/logo-dark.png')}">
  <div class="eyebrow"><i></i>${c.eyebrow}</div>
  <h1>${c.lead} <span>${c.highlight}</span></h1>
  <p>${c.sub}</p>
</div>
<div class="chips">${c.chips.map(x => `<div class="chip">${x}</div>`).join('')}</div>
<div class="url">synctappy.biz.id</div>
</body></html>`

for (const [lang, c] of Object.entries(copy)) {
  const file = join(tmp, `og-${lang}.html`)
  writeFileSync(file, page(c))
  execFileSync(chrome, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
    '--allow-file-access-from-files', '--window-size=1200,630', '--virtual-time-budget=5000',
    `--screenshot=${join(out, `og-${lang}.png`)}`, pathToFileURL(file).href,
  ], { stdio: 'ignore' })
  console.log('✓', `og-${lang}.png`)
}
