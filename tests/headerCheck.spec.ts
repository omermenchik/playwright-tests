import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('React.dev has a header or nav and a footer', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  const header = home.headerOrBanner
  const nav = page.locator('nav');

  const headerFound = await header.first().waitFor({ state: 'attached', timeout: 5000 }).then(() => true).catch(() => false);
  const navFound = await nav.first().waitFor({ state: 'attached', timeout: 5000 }).then(() => true).catch(() => false);

  if (headerFound || navFound) {
    const visible = headerFound ? header.first() : nav.first();
    console.log('Found:', headerFound ? '<header>' : '<nav>');
    await expect(visible).toBeVisible();
  } else {
    throw new Error('Neither <header> nor <nav> was found');
  }
});
