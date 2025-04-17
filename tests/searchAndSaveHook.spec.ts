import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('React.dev opens search, types query, and clicks first result', async ({ page }) => {
  const query = 'custom hook';

  // Step 1: Navigate to homepage using HomePage class
  const home = new HomePage(page);
  await home.goto();
  console.log('Homepage loaded');

  // Step 2: Open the search bar
  await page.getByRole('button', { name: 'Search ⌘ K' }).click();
  console.log('Search opened');

  // Step 3: Type the query
  await page.locator('input.DocSearch-Input').fill(query);
  console.log(`Typed "${query}"`);

  // Step 4: Click the first matching result
  const result = page.locator(`li.DocSearch-Hit:has-text("${query}")`).first();
  await expect(result).toBeVisible({ timeout: 7000 });
  console.log('Matching search result found');
  await result.click();
  console.log('Clicked the search result');

  // Step 5: Re-open search
  const searchIcon = page.getByRole('button', { name: 'Search' });
  await expect(searchIcon).toBeVisible({ timeout: 5000 });
  await searchIcon.click();
  console.log('Search reopened');

  // Step 6: Click the save button for the first result
  const saveButton = page.locator('button.DocSearch-Hit-action-button[title="Save this search"]');
  await expect(saveButton).toBeVisible({ timeout: 5000 });
  await saveButton.click();
  console.log('Clicked "Save this search"');

  // Step 7: Validate the search appears in Favorites
  const favoriteSection = page.locator('section:has(div:has-text("Favorite"))');
  const item = favoriteSection.locator('ul[role="listbox"] >> li.DocSearch-Hit', {
    hasText: query,
  });
  await expect(item).toBeVisible({ timeout: 5000 });
  console.log(`Verified saved search: "${query}"`);
});
