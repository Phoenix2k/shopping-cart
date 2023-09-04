import { defineConfig, devices } from '@playwright/test';
import * as dotenv from 'dotenv';

/**
 * Read environment variables from file.
 * @link https://github.com/motdotla/dotenv
 */
dotenv.config();

/**
 * Playwright configuration.
 * @link https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  forbidOnly: !!process.env['CI'],
  fullyParallel: true,
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },
    // Test against branded browsers.
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],
  reporter: 'html',
  retries: process.env['CI'] ? 2 : 0,
  testDir: './e2e',
  webServer: {
    command: 'ng serve',
    port: 4200,
    reuseExistingServer: !process.env['CI'],
  },
  use: {
    actionTimeout: 5000,
    trace: 'on-first-retry',
  },
  workers: process.env['CI'] ? 1 : undefined,
});
