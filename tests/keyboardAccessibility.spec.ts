import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('Search bar becomes visible when activated', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  console.log('Homepage loaded');

  // Wait for the search button to be visible and interactable
  const searchButton = page.getByRole('button', { name: 'Search ⌘ K' });
  await searchButton.waitFor({ timeout: 7000 }); // Wait up to 7 seconds for the button to appear
  console.log('Search button is visible');

  // Click the search button manually (instead of keyboard shortcut)
  await searchButton.click();
  console.log('Triggered search manually');

  // Wait for the input to appear
  const input = page.locator('input.DocSearch-Input');
  await expect(input).toBeVisible({ timeout: 7000 });
  console.log('Search input is visible');

  // Navigate through search results using the keyboard
  await input.fill('custom hook');
  await page.keyboard.press('ArrowDown');
  await expect(page.locator('li.DocSearch-Hit[aria-selected="true"]')).toBeVisible();
  console.log('Navigated search results with ArrowDown');

  // Close the search modal using Escape key
  await page.keyboard.press('Escape');
  await expect(page.locator('input.DocSearch-Input')).toBeHidden();
  console.log('Search modal closed via Escape');
});
