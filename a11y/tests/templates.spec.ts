import { test } from "@playwright/test";
import { scanPath } from "../lib/scan";
import { fetchSitemapPaths } from "../lib/sitemap";

const FIXED_PATHS = [
  "/",
  "/progetto",
  "/misure",
  "/avvisi",
  "/enti",
  "/enti/comuni",
  "/novita",
  "/novita/notizie",
  "/novita/aggiornamenti",
  "/novita/newsletter",
  "/guide-e-risorse",
  "/supporto",
  "/supporto/domande-frequenti",
  "/supporto/richiedi-assistenza",
  "/supporto/team-territoriali",
  "/cerca",
  "/open-data",
  "/a11y-check-not-found",
];

const seg = (p: string) => p.split("/").filter(Boolean);

const DYNAMIC: Record<string, (p: string) => boolean> = {
  "news article": (p) => p.startsWith("/novita/notizie/") && seg(p).length === 3,
  resource: (p) => p.startsWith("/guide-e-risorse/") && seg(p).length >= 3,
  "FAQ category": (p) => p.startsWith("/supporto/domande-frequenti/") && seg(p).length === 3,
  "single FAQ": (p) => p.startsWith("/supporto/domande-frequenti/") && seg(p).length === 4,
};

async function resolvePaths(): Promise<string[]> {
  const paths = [...FIXED_PATHS];
  let sitemap: string[] = [];
  try {
    sitemap = await fetchSitemapPaths();
  } catch (e) {
    console.warn(`WARNING: cannot read sitemap, skipping dynamic templates: ${e}`);
  }
  for (const [name, match] of Object.entries(DYNAMIC)) {
    const found = sitemap.find(match);
    if (found) paths.push(found);
    else console.warn(`WARNING: no ${name} found in sitemap, skipping`);
  }
  return paths;
}

const paths = await resolvePaths();

for (const p of paths) {
  test(`a11y ${p}`, async ({ page }, testInfo) => {
    await scanPath(page, testInfo, p);
  });
}
