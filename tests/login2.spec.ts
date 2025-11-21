import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');
  await  await page.fill('#user-name', 'standard_user');
  await  await page.fill('#password', 'secret_sauce');
  await  await page.click('#login-button')
  await page.waitForURL('**/inventory.html');
  const currentUrl = page.url();
  console.log('URL sau khi login:', currentUrl);
  await page.reload();
  const reloadedUrl = page.url();
  console.log('URL sau khi reload:', reloadedUrl);
  expect(reloadedUrl).toContain('inventory.html');
});