import { test, expect } from '@playwright/test';
import { getElementById } from '@/utils/helpers';

test('input text field', async ({ page }) => {
  await page.goto('https://www.w3schools.com/');
  const input = getElementById(page, 'tnb-google-search-input');
  await expect(input).toBeVisible();
  await input.fill('Playwright');
  await expect(input).toHaveValue('Playwright');
});
