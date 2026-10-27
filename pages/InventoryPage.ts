import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly inventoryItems: Locator;
  readonly pageTitle: Locator;

  constructor(page: Page) {
    super(page);
    this.inventoryItems = page.locator('.inventory_item');
    this.pageTitle = page.locator('.title');
  }

  async expectProductCount(expectedCount: number) {
    await expect(this.inventoryItems).toHaveCount(expectedCount);
  }

  async expectPageLoaded() {
    await expect(this.pageTitle).toContainText('Products');
    await expect(this.page).toHaveURL(/\/inventory/);
  }
}
