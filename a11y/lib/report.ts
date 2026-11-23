import { mkdirSync, readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import type { PageResult } from "./scan";

const REPORTS_DIR = path.resolve(process.cwd(), "reports");
const PAGES_DIR = path.join(REPORTS_DIR, "pages");
const MAX_CHARS = 60_000; // GitHub limit is 65536 for comments/issues
const EXAMPLES_PER_RULE = 5;
const IMPACT_ORDER = ["critical", "serious", "moderate", "minor"];

const rank = (i: string | null) => {
  const idx = IMPACT_ORDER.indexOf(i ?? "");
  return idx === -1 ? IMPACT_ORDER.length : idx;
};

interface RuleAgg {
  id: string;
  impact: string | null;
  help: string;
  helpUrl: string;
  pages: Set<string>;
  nodes: number;
  examples: string[];
}

function main(): number {
  const results: PageResult[] = existsSync(PAGES_DIR)
    ? readdirSync(PAGES_DIR)
        .filter((f) => f.endsWith(".json"))
        .map((f) => JSON.parse(readFileSync(path.join(PAGES_DIR, f), "utf8")) as PageResult)
    : [];
  results.sort((a, b) => (a.path + a.viewport).localeCompare(b.path + b.viewport));

  const rules = new Map<string, RuleAgg>();
  for (const r of results) {
    for (const v of r.violations) {
      let agg = rules.get(v.id);
      if (!agg) {
        agg = { id: v.id, impact: v.impact, help: v.help, helpUrl: v.helpUrl, pages: new Set(), nodes: 0, examples: [] };
        rules.set(v.id, agg);
      }
      agg.nodes += v.nodes;
      const label = `${r.viewport}:${r.path}`;
      if (!agg.pages.has(label)) {
        agg.pages.add(label);
        if (agg.examples.length < EXAMPLES_PER_RULE) agg.examples.push(`${r.url || r.path} (${r.viewport}) — \`${v.targets[0] ?? ""}\``);
      }
    }
  }
  const sorted = [...rules.values()].sort(
    (a, b) => rank(a.impact) - rank(b.impact) || b.pages.size - a.pages.size || b.nodes - a.nodes,
  );
  const errors = results.filter((r) => r.error);

  const failOn = (process.env.A11Y_FAIL_ON || "")
    .split(",")
    .map((s) => s.trim().toLowerCase())
    .filter(Boolean);
  const failing = sorted.filter((r) => r.impact && failOn.includes(r.impact));

  const lines: string[] = [];
  lines.push("## Accessibility report (axe-core)", "");
  lines.push(`- **Base URL:** ${process.env.BASE_URL ?? "n/a"}`);
  lines.push(`- **Date:** ${new Date().toISOString()}`);
  lines.push(`- **Pages scanned:** ${results.length} (page/viewport combinations)`);
  lines.push(`- **Pages with errors:** ${errors.length}`);
  lines.push(`- **Rules violated:** ${sorted.length}`);
  lines.push(`- **Blocking impacts (A11Y_FAIL_ON):** ${failOn.length ? failOn.join(", ") : "none (report only)"}`, "");

  if (sorted.length) {
    lines.push("### Violations by rule", "", "| Rule | Impact | Pages | Nodes |", "| --- | --- | ---: | ---: |");
    for (const r of sorted) lines.push(`| [${r.id}](${r.helpUrl}) | ${r.impact ?? "n/a"} | ${r.pages.size} | ${r.nodes} |`);
    lines.push("", "### Examples", "");
    for (const r of sorted) {
      lines.push(`**${r.id}** — ${r.help}`, "");
      for (const e of r.examples) lines.push(`- ${e}`);
      if (r.pages.size > r.examples.length) lines.push(`- … and ${r.pages.size - r.examples.length} more`);
      lines.push("");
    }
  } else {
    lines.push("No violations found.", "");
  }

  if (errors.length) {
    lines.push("### Pages that failed to load / analyse", "");
    for (const e of errors) lines.push(`- ${e.path} (${e.viewport}): ${e.error}`);
    lines.push("");
  }

  let md = lines.join("\n");
  if (md.length > MAX_CHARS) {
    md = md.slice(0, MAX_CHARS).replace(/\n[^\n]*$/, "") + "\n\n_… report truncated, see the full `results.json` in the workflow artifact._\n";
  }

  mkdirSync(REPORTS_DIR, { recursive: true });
  writeFileSync(path.join(REPORTS_DIR, "summary.md"), md);
  writeFileSync(
    path.join(REPORTS_DIR, "results.json"),
    JSON.stringify(
      {
        baseUrl: process.env.BASE_URL ?? null,
        date: new Date().toISOString(),
        pagesScanned: results.length,
        rules: sorted.map((r) => ({ ...r, pages: [...r.pages], pageCount: r.pages.size })),
        errors,
        pages: results,
      },
      null,
      2,
    ),
  );

  console.log(`Report written to ${REPORTS_DIR} (${results.length} pages, ${sorted.length} rules, ${errors.length} errors)`);
  if (failing.length) {
    console.error(`Failing: violations with impact ${failOn.join(", ")}: ${failing.map((r) => r.id).join(", ")}`);
    return 1;
  }
  return 0;
}

try {
  process.exit(main());
} catch (e) {
  console.error(e);
  process.exit(2);
}
