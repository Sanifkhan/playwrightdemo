import { test, expect } from './fixtures';

test('standard user can login and view inventory', async ({ loginPage, inventoryPage }) => {
  await loginPage.open();
  await loginPage.login('standard_user', 'secret_sauce');
  await loginPage.expectLoggedIn();
  await inventoryPage.expectProductCount(6);
});
