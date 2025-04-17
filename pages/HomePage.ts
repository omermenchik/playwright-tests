import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly headerOrBanner: Locator;
  readonly footer: Locator;
  readonly themeToggle: Locator;
  readonly html: Locator;

  constructor(page: Page) {
    this.page = page;
    this.headerOrBanner = page.locator('header, [role="banner"]');
    this.footer = page.locator('footer');
    this.themeToggle = page.locator('[title="Toggle dark mode"]');
    this.html = page.locator('html');
  }

  async goto() {
    await this.page.goto('https://react.dev');
    await this.page.waitForLoadState('networkidle');
  }
}
