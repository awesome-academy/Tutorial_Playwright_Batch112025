import { expect } from '@playwright/test';
import { test } from './fixtures/login.fixture';

test('Kiểm tra dashboard hiển thị đúng', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('text=Swag Labs')).toBeVisible();
});

test('Kiểm tra sản phẩm trên trang Inventory', async ({ loggedInPage }) => {
  await expect(loggedInPage.locator('text=Products')).toBeVisible();

  const inventoryItems = loggedInPage.locator('[data-test="inventory-item"]');
  await expect(inventoryItems).toHaveCount(6);

  await expect(loggedInPage.locator('text=Sauce Labs Backpack')).toBeVisible();
  await expect(
    loggedInPage.locator('text=Sauce Labs Bike Light')
  ).toBeVisible();
  await expect(
    loggedInPage.locator('text=Sauce Labs Fleece Jacket')
  ).toBeVisible();
  await expect(loggedInPage.locator('text=Sauce Labs Onesie')).toBeVisible();
  await expect(
    loggedInPage.locator('text=Test.allTheThings() T-Shirt (Red)')
  ).toBeVisible();
});

test('Add product → Open cart → Verify product', async ({ loggedInPage }) => {
  await test.step('Add product to cart', async () => {
    await loggedInPage
      .locator('[data-test="add-to-cart-sauce-labs-backpack"]')
      .click();

    const badge = loggedInPage.locator('.shopping_cart_badge');
    await expect(badge).toHaveText('1');
  });

  await test.step('Go to cart page', async () => {
    await loggedInPage.locator('.shopping_cart_link').click();
    await loggedInPage.waitForSelector('.cart_list');
  });

  await test.step('Verify product in cart', async () => {
    const cartItems = loggedInPage.locator('.cart_item');
    await expect(cartItems).toHaveCount(1);

    await expect(loggedInPage.locator('.inventory_item_name')).toHaveText(
      'Sauce Labs Backpack'
    );
  });
});
