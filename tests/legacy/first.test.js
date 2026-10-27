import { test, expect } from '@playwright/test';

test('Open application test', async ({ page }) => {
  // Open application URL
  await page.goto('https://www.google.com');

  // Validate page title
  await expect(page).toHaveTitle(/Google/);
});
