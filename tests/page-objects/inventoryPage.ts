import { expect, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class InventoryPage extends BasePage {
  readonly inventoryItems = '.inventory_item';

  constructor(page: Page) {
    super(page);
  }

  async expectProductCount(expectedCount: number): Promise<void> {
    await expect(this.page.locator(this.inventoryItems)).toHaveCount(expectedCount);
  }
}
