export function getBaseUrl(): string {
  const base = process.env.BASE_URL?.replace(/\/+$/, "");
  if (!base) throw new Error("BASE_URL env variable is required");
  return base;
}

/**
 * Fetch `${BASE_URL}/sitemap.xml` and return deduplicated paths.
 * Sitemap URLs may use the production domain even on previews: only the path
 * (and query) is kept, to be resolved against BASE_URL.
 */
export async function fetchSitemapPaths(): Promise<string[]> {
  const res = await fetch(`${getBaseUrl()}/sitemap.xml`);
  if (!res.ok) throw new Error(`sitemap.xml returned HTTP ${res.status}`);
  const xml = await res.text();
  const paths = new Set<string>();
  for (const m of xml.matchAll(/<loc>\s*([^<]+?)\s*<\/loc>/g)) {
    try {
      const u = new URL(m[1].replace(/&amp;/g, "&"));
      paths.add((u.pathname.replace(/\/+$/, "") || "/") + u.search);
    } catch {
      // ignore malformed entries
    }
  }
  return [...paths];
}
