import { test } from "@playwright/test";
import { scanPath } from "../lib/scan";
import { fetchSitemapPaths } from "../lib/sitemap";

// The full scan only runs on the desktop viewport (`--project=desktop`, see the
// `a11y:full` script) to halve the runtime. The template set covers mobile.

let paths = await fetchSitemapPaths();
const max = Number(process.env.A11Y_MAX_PAGES || 0); // debug only
if (max > 0) paths = paths.slice(0, max);
console.log(`Full scan: ${paths.length} paths`);

for (const p of paths) {
  test(`a11y ${p}`, async ({ page }, testInfo) => {
    await scanPath(page, testInfo, p);
  });
}
