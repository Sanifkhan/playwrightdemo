import { test, expect } from '../../fixtures';
import { users } from '../../test-data/users';

test.describe('SauceDemo smoke tests', () => {
  test('standard user can log in and view inventory', async ({ loginPage, inventoryPage }) => {
    await loginPage.open();
    await loginPage.login(users.standard.username, users.standard.password);
    await loginPage.expectLoggedIn();
    await inventoryPage.expectPageLoaded();
    await inventoryPage.expectProductCount(6);
  });

  test('locked out user sees an error message', async ({ loginPage }) => {
    await loginPage.open();
    await loginPage.login(users.lockedOut.username, users.lockedOut.password);
    await loginPage.expectLoginError(/locked out/i);
  });
});
