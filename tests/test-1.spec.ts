import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1763433128982&no_sw_cr=1');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).dblclick();
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('dgfg');
  await page.getByRole('combobox', { name: 'Tìm kiếm' }).fill('dgfg');
});