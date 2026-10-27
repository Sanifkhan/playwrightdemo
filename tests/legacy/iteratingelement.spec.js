const { test, expect } = require('@playwright/test');

test('List demo', async ({ page }) => {

  await page.goto('https://training.rcvacademy.com/');

  // Correct XPath
  const listSection = page.locator("(//ul[@data-content='true'])[3]");

  // Get all list items inside that section
  const listItems = listSection.getByRole('listitem');

  const count = await listItems.count();

  for (let i = 0; i < count; i++) {
    console.log(await listItems.nth(i).textContent());
  }

});
