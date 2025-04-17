import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';

test('React.dev theme toggle switches between light and dark mode', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();

  const html = home.html;

  const classBefore = (await html.getAttribute('class')) || '';
  const isDarkBefore = classBefore.includes('dark');
  console.log('Initial theme class:', classBefore);

  // Only select the visible toggle
  const toggle = page.locator('[aria-label*="Mode"]:visible');

  await expect(toggle).toBeVisible();
  await toggle.click();

  await expect(async () => {
    const classAfter = (await html.getAttribute('class')) || '';
    const isDarkAfter = classAfter.includes('dark');
    expect(isDarkAfter).not.toBe(isDarkBefore);
  }).toPass();

  console.log('Theme toggled successfully.');

  // Toggle back
  await toggle.click();
  await expect(async () => {
    const classBack = (await html.getAttribute('class')) || '';
    const isDarkBack = classBack.includes('dark');
    expect(isDarkBack).toBe(isDarkBefore);
  }).toPass();

  console.log('Toggled back to original theme.');
});
