import { spawn } from 'node:child_process';
import { readFile, mkdir, writeFile, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

const root = process.cwd();
const output = join(root, 'tmp', 'visual-audit');
const profile = join(tmpdir(), `vplo-visual-audit-${Date.now()}`);
const chrome = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const targets = [
  ['react', 'http://127.0.0.1:5173/vplo-modern-web/'],
  ['joomla-local-1.6.2', 'http://nowa.vp-lo.krakow.pl/'],
];
const localHomeCss = await readFile(join(root, 'joomla-vplo-modern', 'media', 'css', 'home-current-1.6.2.css'), 'utf8');
const viewports = [
  ['1440', 1440, 1600],
  ['1024', 1024, 1600],
  ['390', 390, 1600],
];

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });

const browser = spawn(chrome, [
  '--headless=old', '--disable-gpu', '--disable-gpu-compositing', '--disable-gpu-rasterization', '--remote-debugging-pipe',
  `--user-data-dir=${profile}`, '--no-first-run', '--no-default-browser-check', 'about:blank',
], { stdio: ['ignore', 'ignore', 'pipe', 'pipe', 'pipe'], windowsHide: true });
browser.stderr.on('data', (chunk) => console.error(chunk.toString('utf8')));
browser.on('exit', (code) => console.error(`Chrome exited: ${code}`));

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
class CDP {
  constructor(process) {
    this.process = process;
    this.next = 1;
    this.pending = new Map();
    this.events = [];
    this.buffer = '';
    this.process.stdio[4].on('data', (chunk) => {
      this.buffer += chunk.toString('utf8');
      const messages = this.buffer.split('\0');
      this.buffer = messages.pop();
      for (const data of messages) {
        if (!data) continue;
        const message = JSON.parse(data);
        if (message.id) this.pending.get(message.id)?.resolve(message);
        else this.events.push(message);
      }
    });
  }
  async ready() { await sleep(200); }
  call(method, params = {}, sessionId) { const id = this.next++; return new Promise((resolve, reject) => { const timeout = setTimeout(() => { this.pending.delete(id); reject(new Error(`CDP timeout: ${method}`)); }, 10000); this.pending.set(id, { resolve: (response) => { clearTimeout(timeout); return response.error ? reject(new Error(response.error.message)) : resolve(response.result); }, reject }); this.process.stdio[3].write(`${JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) })}\0`); }); }
  async waitFor(method, timeout = 15000) { const start = Date.now(); while (Date.now() - start < timeout) { const found = this.events.find((event) => event.method === method); if (found) { this.events.splice(this.events.indexOf(found), 1); return found; } await sleep(25); } throw new Error(`Timeout: ${method}`); }
  close() { this.process.stdio[3].end(); }
}

const cdp = new CDP(browser);
await cdp.ready();
const target = await cdp.call('Target.createTarget', { url: 'about:blank' });
const attached = await cdp.call('Target.attachToTarget', { targetId: target.targetId, flatten: true });
const sessionId = attached.sessionId;
const pageCall = (method, params = {}) => cdp.call(method, params, sessionId);
await pageCall('Page.enable');
await pageCall('Runtime.enable');

const expression = `(() => {
  const requested = {
    values: ['.school-values-section', '.school-values-graphic-wrapper', '.school-values-image', '.school-value-hotspot'],
    patron: ['.hero-card-patron', '.hero-school-name', '.hero-portrait-frame', '.hero-portrait'],
    students: ['.home-video-card-inline', '.home-video-player'],
    updates: ['.home-updates-frame', '.home-update-card'],
    sections: ['.home-tabs-section', '.home-tabs-grid', '.home-tabs-grid .feature-card'],
    links: ['.home-links-section', '.home-links-grid', '.home-link-item'],
  };
  const metric = (element) => {
    const rect = element.getBoundingClientRect();
    const style = getComputedStyle(element);
    return {
      rect: ['x','y','width','height'].reduce((out, key) => ({ ...out, [key]: Math.round(rect[key] * 100) / 100 }), {}),
      display: style.display, gridTemplateColumns: style.gridTemplateColumns, gap: style.gap,
      padding: style.padding, margin: style.margin, fontFamily: style.fontFamily,
      fontSize: style.fontSize, fontWeight: style.fontWeight, lineHeight: style.lineHeight,
      color: style.color, border: style.border, borderRadius: style.borderRadius,
      boxShadow: style.boxShadow, objectFit: style.objectFit, objectPosition: style.objectPosition,
    };
  };
  return { viewport: { width: innerWidth, height: innerHeight, dpr: devicePixelRatio }, groups: Object.fromEntries(Object.entries(requested).map(([group, selectors]) => [group, Object.fromEntries(selectors.map((selector) => [selector, [...document.querySelectorAll(selector)].map(metric)]))])) };
})()`;

const report = {};
for (const [label, url] of targets) {
  report[label] = {};
  for (const [name, width, height] of viewports) {
    await pageCall('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: false });
    const navigate = await pageCall('Page.navigate', { url });
    if (navigate.loaderId) await cdp.waitFor('Page.loadEventFired');
    await pageCall('Runtime.evaluate', { expression: 'document.fonts ? document.fonts.ready : Promise.resolve()', awaitPromise: true, returnByValue: true });
    if (label === 'joomla-local-1.6.2') {
      await pageCall('Runtime.evaluate', { expression: `(() => { const style = document.createElement('style'); style.id = 'vplo-local-1-6-2-audit'; style.textContent = ${JSON.stringify(localHomeCss)}; document.head.append(style); })()`, awaitPromise: true, returnByValue: true });
    }
    await sleep(900);
    const result = await pageCall('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    const shot = await pageCall('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
    await writeFile(join(output, `${label}-${name}.png`), Buffer.from(shot.data, 'base64'));
    report[label][name] = result.result.value;
  }
}
await writeFile(join(output, 'metrics.json'), JSON.stringify(report, null, 2));
cdp.close();
browser.kill();
