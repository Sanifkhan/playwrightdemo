const { test } = require('@playwright/test');

test('Salesforce Employees Dropdown - Simple', async ({ page }) => {

  await page.goto('https://www.salesforce.com/in/form/signup/free-crm/?d=pb');

  // Select Employees dropdown
  await page.locator('select[name="CompanyEmployees"]').selectOption({ index: 2 });

});
   
/*
const { test, expect } = require('@playwright/test');

test('Salesforce Employees Dropdown', async ({ page }) => {

  await page.goto('https://www.salesforce.com/in/form/signup/free-crm/?d=pb', {
    waitUntil: 'domcontentloaded'
  });

  // Accept cookies if present
  const acceptBtn = page.locator("button:has-text('Accept')");
  if (await acceptBtn.isVisible()) {
    await acceptBtn.click();
  }

  // Directly target dropdown (no iframe assumption)
  const dropdown = page.locator("select[name='CompanyEmployees']");

  await expect(dropdown).toBeVisible({ timeout: 60000 });

  await dropdown.selectOption({ index: 2 });

});
*/