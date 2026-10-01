/**
 * Visual QA helper: opens the site in headless Chrome via the DevTools
 * protocol, scrolls through the page (to trigger scroll reveals), then saves
 * a full-page screenshot per viewport width and reports console errors,
 * failed requests, broken images and horizontal overflow.
 *
 *   node scripts/qa-screenshot.mjs [url] [outDir] [widths...]
 *   node scripts/qa-screenshot.mjs http://localhost:3000 ./.qa 1440 390
 */
import { spawn } from 'node:child_process'
import { existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const [url = 'http://localhost:3000/', outDir = '.qa', ...w] = process.argv.slice(2)
const widths = w.length ? w.map(Number) : [1440, 1280, 1024, 768, 640, 390, 375]
mkdirSync(resolve(outDir), { recursive: true })

const chromePath = [
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find(existsSync)

const port = 9300 + Math.floor(Math.random() * 500)
const chrome = spawn(chromePath, [
  '--headless=new', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`,
  `--user-data-dir=${join(tmpdir(), `synctappy-qa-${port}`)}`, 'about:blank',
], { stdio: 'ignore' })

const sleep = ms => new Promise(r => setTimeout(r, ms))
let target
for (let i = 0; i < 50 && !target; i++) {
  await sleep(200)
  try {
    target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find(t => t.type === 'page')
  }
  catch {}
}

const ws = new WebSocket(target.webSocketDebuggerUrl)
await new Promise(r => ws.addEventListener('open', r, { once: true }))
let id = 0
const pending = new Map()
const logs = []
ws.addEventListener('message', ({ data }) => {
  const msg = JSON.parse(data)
  if (msg.id && pending.has(msg.id)) {
    pending.get(msg.id)(msg)
    pending.delete(msg.id)
  }
  if (msg.method === 'Runtime.consoleAPICalled' && ['error', 'warning'].includes(msg.params.type)) {
    logs.push(`[console.${msg.params.type}] ${msg.params.args.map(a => a.value ?? a.description).join(' ')}`)
  }
  if (msg.method === 'Runtime.exceptionThrown') logs.push(`[exception] ${msg.params.exceptionDetails.exception?.description ?? msg.params.exceptionDetails.text}`)
  if (msg.method === 'Network.loadingFailed' && !msg.params.canceled) logs.push(`[network] failed ${msg.params.errorText}`)
  if (msg.method === 'Network.responseReceived' && msg.params.response.status >= 400) logs.push(`[network] ${msg.params.response.status} ${msg.params.response.url}`)
})
const send = (method, params = {}) => new Promise((res) => {
  const mid = ++id
  pending.set(mid, res)
  ws.send(JSON.stringify({ id: mid, method, params }))
})
const evaluate = async expr => (await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true })).result?.result?.value

await send('Runtime.enable')
await send('Network.enable')
await send('Page.enable')

// Optional device language, e.g. QA_LANG=id-ID → Indonesian device
const qaLang = process.env.QA_LANG
if (qaLang) {
  const ua = (await send('Browser.getVersion')).result.userAgent.replace('HeadlessChrome', 'Chrome')
  // Sets both the Accept-Language header and navigator.languages
  await send('Network.setUserAgentOverride', { userAgent: ua, acceptLanguage: `${qaLang},${qaLang.split('-')[0]};q=0.9` })
  await send('Emulation.setLocaleOverride', { locale: qaLang })
}

const report = {}
for (const width of widths) {
  const height = width < 768 ? 844 : 900
  await send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 768 })
  await send('Page.navigate', { url })
  await sleep(2500)
  // scroll through to trigger IntersectionObserver reveals
  await evaluate(`(async()=>{const s=ms=>new Promise(r=>setTimeout(r,ms));for(let y=0;y<document.documentElement.scrollHeight;y+=400){scrollTo({top:y,behavior:'instant'});await s(80)}scrollTo({top:0,behavior:'instant'});await s(1600)})()`)
  const info = await evaluate(`(()=>{
    const doc=document.documentElement;
    const over=[...document.querySelectorAll('body *')].filter(e=>{const r=e.getBoundingClientRect();return r.width>0&&(r.right>doc.clientWidth+1)&&getComputedStyle(e).position!=='fixed'&&!e.closest('[class*="overflow-x-auto"],[class*="overflow-hidden"],.pointer-events-none')}).slice(0,8).map(e=>e.tagName+'.'+String(e.className).slice(0,80));
    const broken=[...document.images].filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src);
    const hidden=[...document.querySelectorAll('[data-reveal]:not(.is-visible)')].length;
    return {scrollWidth:doc.scrollWidth,clientWidth:doc.clientWidth,height:doc.scrollHeight,overflowing:over,broken,unrevealed:hidden};
  })()`)
  const shot = await send('Page.captureScreenshot', {
    format: 'png', captureBeyondViewport: true,
    clip: { x: 0, y: 0, width, height: info.height, scale: 1 },
  })
  writeFileSync(join(outDir, `page-${process.env.QA_LANG ? process.env.QA_LANG + '-' : ''}${width}.png`), Buffer.from(shot.result.data, 'base64'))
  report[width] = info
  console.log(width, JSON.stringify(info))
}
console.log(logs.length ? [...new Set(logs)].join('\n') : 'console: clean')
ws.close()
chrome.kill()
process.exit(0)
