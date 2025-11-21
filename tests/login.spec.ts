import { test, expect } from '@playwright/test';

test('Login Saucedemo và kiểm tra URL', async ({ page }) => {
 await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.waitForURL('**/inventory.html');
  const currentUrl = page.url();
  console.log('URL sau khi login:', currentUrl);
  await page.reload();
  const reloadedUrl = page.url();
  console.log('URL sau khi reload:', reloadedUrl);
  expect(reloadedUrl).toContain('inventory.html');
});

