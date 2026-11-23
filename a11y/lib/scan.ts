import AxeBuilder from "@axe-core/playwright";
import type { Page, TestInfo } from "@playwright/test";
import { mkdirSync, writeFileSync } from "node:fs";
import { createHash } from "node:crypto";
import path from "node:path";

export const AXE_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

// Third-party containers/iframes excluded from the analysis.
const EXCLUDE_SELECTORS = [
  "#agentforce-embedded-messaging",
  "#embedded-messaging",
  ".embedded-messaging",
  "[class*='embeddedMessaging']",
  "iframe[src*='salesforce']",
  "iframe[src*='force.com']",
  "iframe[src*='my.site.com']",
  "iframe[src*='recaptcha']",
  ".grecaptcha-badge",
];

const BLOCKED_URL = [
  /ingestion\.webanalytics\.italia\.it/,
  /^https?:\/\/www\.google\.com\/recaptcha/,
  /^https?:\/\/www\.gstatic\.com\/recaptcha/,
  /^https?:\/\/[^/]*\.salesforce\.com/,
  /^https?:\/\/[^/]*\.force\.com/,
  /^https?:\/\/[^/]*\.my\.site\.com/,
  /^https?:\/\/[^/]*\.salesforce-scrt\.com/,
  /^https?:\/\/[^/]*sfdc[^/]*/,
];

export const REPORTS_DIR = path.resolve(process.cwd(), "reports");
export const PAGES_DIR = path.join(REPORTS_DIR, "pages");

export interface ViolationResult {
  id: string;
  impact: string | null;
  help: string;
  helpUrl: string;
  nodes: number;
  targets: string[];
}

export interface PageResult {
  path: string;
  url: string;
  viewport: string;
  status: number | null;
  error?: string;
  violations: ViolationResult[];
}

export async function blockThirdParties(page: Page): Promise<void> {
  await page.route("**/*", (route) => {
    const url = route.request().url();
    return BLOCKED_URL.some((re) => re.test(url)) ? route.abort() : route.continue();
  });
}

function writeResult(result: PageResult): void {
  mkdirSync(PAGES_DIR, { recursive: true });
  const hash = createHash("sha1").update(`${result.viewport}:${result.path}`).digest("hex").slice(0, 12);
  writeFileSync(path.join(PAGES_DIR, `${result.viewport}-${hash}.json`), JSON.stringify(result, null, 2));
}

/**
 * Load a path, run axe and store the result. Never throws on load failures or
 * violations: those are recorded in the per-page JSON.
 */
export async function scanPath(page: Page, testInfo: TestInfo, urlPath: string): Promise<PageResult> {
  const viewport = testInfo.project.name;
  const base: PageResult = { path: urlPath, url: "", viewport, status: null, violations: [] };
  try {
    await blockThirdParties(page);
    const response = await page.goto(urlPath, { waitUntil: "load", timeout: 60_000 });
    base.url = page.url();
    base.status = response?.status() ?? null;
    // The 404 page is expected to be analysed; other non-2xx are errors.
    const is404Check = urlPath.includes("a11y-check-not-found");
    if (base.status === null || base.status >= 400) {
      if (!(is404Check && base.status === 404)) {
        base.error = `HTTP ${base.status}`;
        writeResult(base);
        return base;
      }
    }
    await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {});
    await page.waitForTimeout(500);

    let builder = new AxeBuilder({ page }).withTags(AXE_TAGS);
    for (const sel of EXCLUDE_SELECTORS) builder = builder.exclude(sel);
    const results = await builder.analyze();
    base.violations = results.violations.map((v) => ({
      id: v.id,
      impact: v.impact ?? null,
      help: v.help,
      helpUrl: v.helpUrl,
      nodes: v.nodes.length,
      targets: v.nodes.slice(0, 3).map((n) => n.target.join(" ")),
    }));
  } catch (e) {
    base.error = e instanceof Error ? e.message.split("\n")[0] : String(e);
  }
  if (!base.url) base.url = urlPath;
  writeResult(base);
  return base;
}
