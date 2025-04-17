import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('React.dev has a visible footer', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  const footer = home.footer;

  const found = await footer.first().waitFor({ state: 'attached', timeout: 5000 }).then(() => true).catch(() => false);

  if (found) {
    console.log('Footer found');
    await expect(footer.first()).toBeVisible();
  } else {
    throw new Error('Footer not found');
  }
});
