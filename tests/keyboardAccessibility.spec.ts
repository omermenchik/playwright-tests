import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Search bar becomes visible when activated', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  console.log('Homepage loaded');

  // Wait for button with partial text "Search"
  const searchButton = page.locator('button:has-text("Search")');
  await searchButton.first().waitFor({ timeout: 15000 }); // Wait up to 15 seconds

  // Click the button even if it's partially covered by another element
  await searchButton.first().click({ force: true });
  console.log('Triggered search manually');

  // Confirm input appears
  const input = page.locator('input.DocSearch-Input');
  await expect(input).toBeVisible({ timeout: 10000 });
  console.log('Search input is visible');

  // Type search query and use keyboard navigation
  await input.fill('custom hook');
  await page.keyboard.press('ArrowDown');
  await expect(page.locator('li.DocSearch-Hit[aria-selected="true"]')).toBeVisible();
  console.log('Navigated search results with ArrowDown');

  // Close with Escape key
  await page.keyboard.press('Escape');
  await expect(input).toBeHidden();
  console.log('Search modal closed via Escape');
});
