import { expect, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class LoginPage extends BasePage {
  readonly usernameField = '#user-name';
  readonly passwordField = '#password';
  readonly loginButton = '#login-button';

  constructor(page: Page) {
    super(page);
  }

  async open(): Promise<void> {
    await this.goto('/');
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.fill(this.usernameField, username);
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.loginButton);
  }

  async expectLoggedIn(): Promise<void> {
    await expect(this.page).toHaveURL(/inventory/);
  }
}
