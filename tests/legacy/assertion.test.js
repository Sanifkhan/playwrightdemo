import { test, expect } from '@playwright/test';

// Skipped test
test.skip('My Second Test', async ({ page }) => {
  expect(100).toBe(101);
});

// Third test
test('My Third Test', async ({ page }) => {
  expect(2.0).toBe(2.0);
});

// Fourth test
test('My Fourth Test', async ({ page }) => {
  expect('Mukesh Otwani').toContain('Mukesh');
  expect(true).toBeTruthy();
});

/*// Fifth test
test('My Fifth Test', async ({ page }) => {
  expect(false).toBeFalsy();
});*/
