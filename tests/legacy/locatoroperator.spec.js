const { test, expect } = require('@playwright/test');

test('Login and validate product count', async ({ page }) => {

  // 1️⃣ Navigate to application
  await page.goto('https://www.saucedemo.com/');

  // 2️⃣ Login
  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  // 3️⃣ Validate successful login (URL check)
  await expect(page).toHaveURL(/inventory/);

  // 4️⃣ Validate product count
  const productItems = page.locator('.inventory_item');
  await expect(productItems).toHaveCount(6);

});
