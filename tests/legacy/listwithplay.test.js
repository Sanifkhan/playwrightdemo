const { test, expect } = require('@playwright/test');

test('List demo', async ({ page }) => {
  await page.goto('https://training.rcvacademy.com/');

  const items = page.getByRole('listitem');
  const count = await items.count();
  //console.log("List item count is:", count);

  //await expect(items).toHaveCount(29);
}); 
 
 