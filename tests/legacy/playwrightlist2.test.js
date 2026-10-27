const { test, expect } = require('@playwright/test');

test('List section count', async ({ page }) => {

  await page.goto('https://training.rcvacademy.com/');

  const listsection = page.locator("(//ul[@data-content='true'])[1]");

  await expect(listsection.getByRole('listitem')).toHaveCount(3);

});
