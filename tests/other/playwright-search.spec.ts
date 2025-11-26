import { test, expect } from '@playwright/test';

test('Playwright docs search test', async ({ page }) => {
  await page.goto('https://playwright.dev/docs/intro');

  await page.locator('body').focus();
  await page.keyboard.press('Control+K');

  const searchModal = page.locator('[role="dialog"], .DocSearch-Modal');
  await expect(searchModal).toBeVisible();

  const searchInput = page.locator('input[type="search"], .DocSearch-Input');
  await searchInput.fill('testing');

  const searchResults = page.locator('.DocSearch-Dropdown, [role="listbox"]');
  await expect(searchResults).toBeVisible();
});
