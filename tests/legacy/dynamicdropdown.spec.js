/*const { test, expect } = require('@playwright/test');

test('Yatra Dynamic Dropdown - Select From City', async ({ page }) => {

  // Open flights page directly
  await page.goto('https://www.yatra.com/flights');

  // ✅ Wait for flight search widget (NOT networkidle)
  await page.waitForSelector('div[role="combobox"]', {
    timeout: 60000
  });

  // ---- FROM FIELD ----
  const departFrom = page.locator('input').first();

  // Force click (overlay safe)
  await departFrom.click({ force: true });

  // Type city slowly (important for dynamic dropdown)
  await departFrom.fill('');
  await departFrom.type('Mumbai', { delay: 150 });

  // ---- WAIT FOR SUGGESTIONS ----
  const option = page.locator('li')
    .filter({ hasText: /Mumbai/i })
    .first();

  await expect(option).toBeVisible({ timeout: 20000 });

  await option.click();

});
*/
const { test, expect } = require('@playwright/test');

test('Yatra Dynamic Dropdown - Select From City', async ({ page }) => {

  await page.goto('https://www.yatra.com/', {
    waitUntil: 'load'
  });

  // ✅ Wait for flight search section to load fully
  await page.locator('#booking_engine_flights').waitFor({
    state: 'visible',
    timeout: 60000
  });

  // FROM city input
  const fromCity = page.locator('#BE_flight_origin_city');

  // Click using force (overlay-safe)
  await fromCity.click({ force: true });

  // Clear + type city
  await fromCity.fill('');
  await fromCity.type('Delhi', { delay: 100 });

  // Wait for dynamic suggestions
  const option = page.locator(
    "//li[contains(@class,'ui-menu-item')]//p[contains(text(),'Delhi')]"
  );

  await option.first().waitFor();
  await option.first().click();

});

