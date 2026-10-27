import { test, expect } from '@playwright/test';

test('Radio button selection test', async ({ page }) => {

  await page.goto('https://demoqa.com/radio-button');

  // Select Yes radio button
  await page.getByText('Yes').click();

  // Verify selected message
  

});