# Accessibility checks (axe-core + Playwright)

The accessibility suite shares the app's Bun installation and lockfile.

## What runs where

| Workflow | Trigger | Scope |
| --- | --- | --- |
| `.github/workflows/a11y-pr.yml` | Vercel `deployment_status` (Preview, success) | Template set (`tests/templates.spec.ts`): fixed pages + one news article, resource, FAQ category and FAQ from the sitemap + a 404 page; desktop and mobile. Posts/updates a PR comment (`<!-- a11y-axe-report -->`). |
| `.github/workflows/a11y-weekly.yml` | Mondays 03:00 UTC, manual | Every path in `/sitemap.xml` (`tests/full.spec.ts`), **desktop only** to halve the runtime (mobile is covered by the template set). Creates/updates the open issue "Weekly accessibility report" (label `a11y`). |

Both use the composite action `.github/actions/a11y-scan` (Node setup, install, scan, report,
job summary, artifact upload) and only differ in trigger, suite and where the report is published.
Third-party scripts (Matomo, reCAPTCHA, Salesforce Agentforce) are blocked and their containers excluded from analysis.

## Run locally

Run these commands from the repository root with Bun and Node.js 24. If you previously ran
`npm ci` in `a11y/`, remove the old `a11y/node_modules` so Playwright uses the root installation.

```sh
bun install --frozen-lockfile
bun run playwright install chromium
BASE_URL=https://padigitale2026.gov.it bun run a11y:templates
BASE_URL=https://padigitale2026.gov.it A11Y_MAX_PAGES=15 bun run a11y:full # Limit the scan to 15 pages
BASE_URL=https://padigitale2026.gov.it bun run a11y:report
```

The report is written to `a11y/reports/summary.md` and `a11y/reports/results.json`.
The scans require `BASE_URL`. Use `A11Y_WORKERS` to set concurrency (default 4),
`A11Y_MAX_PAGES` to limit the full scan, and `A11Y_FAIL_ON` to set blocking impacts.

On NixOS use the nixpkgs browsers (matches the pinned Playwright 1.64.1):

```sh
export PLAYWRIGHT_BROWSERS_PATH=$(nix build --no-link --print-out-paths nixpkgs#playwright-driver.browsers)
export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true
```

## Enabling blocking

`bun run a11y:report` exits non-zero when a violation has an impact listed in `A11Y_FAIL_ON`
(e.g. `critical,serious`). Both workflows use report-only mode by default. To block PRs,
set `fail-on: "critical,serious"` on the `a11y-scan` step in `a11y-pr.yml`.
