# Accessibility checks (axe-core + Playwright)

Standalone package (own `package-lock.json`): it does not need the app's `bun install`.

## What runs where

| Workflow | Trigger | Scope |
| --- | --- | --- |
| `.github/workflows/a11y-pr.yml` | Vercel `deployment_status` (Preview, success) | Template set (`tests/templates.spec.ts`): fixed pages + one news article, resource, FAQ category and FAQ from the sitemap + a 404 page; desktop and mobile. Posts/updates a PR comment (`<!-- a11y-axe-report -->`). |
| `.github/workflows/a11y-weekly.yml` | Mondays 03:00 UTC, manual | Every path in `/sitemap.xml` (`tests/full.spec.ts`), **desktop only** to halve the runtime (mobile is covered by the template set). Creates/updates the open issue "Weekly accessibility report" (label `a11y`). |

Both use the composite action `.github/actions/a11y-scan` (Node setup, install, scan, report,
job summary, artifact upload) and only differ in trigger, suite and where the report is published.
Third-party scripts (Matomo, reCAPTCHA, Salesforce Agentforce) are blocked and their containers excluded from analysis.

## Run locally

```sh
cd a11y
npm ci
npx playwright install chromium
BASE_URL=https://padigitale2026.gov.it npm run test:templates
BASE_URL=https://padigitale2026.gov.it A11Y_MAX_PAGES=15 npm run test:full   # debug: limit pages
npm run report   # -> reports/summary.md, reports/results.json
```

Env: `BASE_URL` (required), `A11Y_WORKERS` (default 4), `A11Y_MAX_PAGES` (debug), `A11Y_FAIL_ON`.

On NixOS use the nixpkgs browsers (matches the pinned Playwright 1.64.1):

```sh
export PLAYWRIGHT_BROWSERS_PATH=$(nix build --no-link --print-out-paths nixpkgs#playwright-driver.browsers)
export PLAYWRIGHT_SKIP_VALIDATE_HOST_REQUIREMENTS=true
```

## Enabling blocking

Tests never fail on violations; the gate is `npm run report`, which exits non-zero only if a
violation has an impact listed in `A11Y_FAIL_ON` (e.g. `critical,serious`). It is empty in both
workflows (report only). To block PRs, set `fail-on: "critical,serious"` on the `a11y-scan` step
in `a11y-pr.yml`.
