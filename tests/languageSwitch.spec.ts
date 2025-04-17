import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Switch to Hebrew language from language menu', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  console.log('Homepage loaded');

  // Click the language menu link
  const languageMenuLink = page.getByRole('link', { name: 'Translations' });
  await expect(languageMenuLink).toBeVisible({ timeout: 7000 });
  await languageMenuLink.click();
  console.log('Clicked language icon and navigated to translations page');

  // Click the Hebrew link
  const hebrewLink = page.getByRole('link', { name: /Hebrew \(עברית\)/ });
  await expect(hebrewLink).toBeVisible({ timeout: 7000 });
  await hebrewLink.click();
  console.log('Clicked the "Hebrew" link');
});
