import { test, expect } from '@playwright/test';

test('kiểm tra số lượng giỏ hàng', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

const cartBadge = page.locator('.shopping_cart_badge');

await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
await expect(cartBadge).toHaveText('1');

await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
await expect(cartBadge).toHaveText('2');
});
