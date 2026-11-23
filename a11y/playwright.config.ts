import { defineConfig } from "@playwright/test";

const baseURL = process.env.BASE_URL?.replace(/\/+$/, "");
if (!baseURL) {
  throw new Error("BASE_URL env variable is required (e.g. https://padigitale2026.gov.it)");
}

export default defineConfig({
  testDir: "./tests",
  timeout: 90_000,
  fullyParallel: true,
  retries: 0,
  workers: Number(process.env.A11Y_WORKERS || 4),
  reporter: [["list"]],
  outputDir: "test-results",
  use: { baseURL },
  projects: [
    {
      name: "desktop",
      use: { browserName: "chromium", viewport: { width: 1280, height: 800 } },
    },
    {
      name: "mobile",
      use: {
        browserName: "chromium",
        viewport: { width: 390, height: 844 },
        isMobile: true,
        hasTouch: true,
      },
    },
  ],
});
