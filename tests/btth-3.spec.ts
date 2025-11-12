import { test, expect } from '@playwright/test';
import { getElementById } from '@/utils/helpers';

test.describe('Bai tap 1', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    const userName = getElementById(page, 'user-name');
    const password = getElementById(page, 'password');
    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
  });

  test('exist path inventory', async ({ page }) => {
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });

  test('find first item', async ({ page }) => {
    const sauceLabsBackpack = getElementById(page, 'item_4_title_link');
    expect(sauceLabsBackpack).toHaveText('Sauce Labs Backpack');
  });

  test('logout', async ({ page }) => {
    const menuButton = page.locator('[data-test="react-burger-menu-btn"]');
    await menuButton.click();
    await expect(page).toHaveURL('https://www.saucedemo.com', {
      timeout: 1500,
    });
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = `screenshots/${testInfo.title}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      await testInfo.attach('screenshot', {
        path: screenshotPath,
        contentType: 'image/png',
      });
    }
  });
});

test.describe('Bai tap 2', () => {
  test.describe('Sub describe 1', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      const userName = getElementById(page, 'user-name');
      const password = getElementById(page, 'password');
      await userName.fill('standard_user');
      await password.fill('secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL('https://www.saucedemo.com/inventory.html');
    });

    test('login success', async ({ page }) => {
      await expect(page).toHaveURL(/\/inventory\.html$/);
    });

    test('check cart', async ({ page }) => {
      const cartBadge = page.locator('.shopping_cart_badge');
      await expect(cartBadge).not.toBeVisible();
    });
  });

  test.describe('Sub describe 2', () => {
    test.beforeEach(async ({ page }) => {
      await page.goto('https://www.saucedemo.com');
      const userName = getElementById(page, 'user-name');
      const password = getElementById(page, 'password');
      await userName.fill('standard_user');
      await password.fill('secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL('https://www.saucedemo.com/inventory.html');
    });

    test('login success', async ({ page }) => {
      await expect(page).toHaveURL(/\/inventory\.html$/);
    });

    test('add to cart', async ({ page }) => {
      const addToCartButton = page.locator(
        'button[data-test="add-to-cart-sauce-labs-backpack"]'
      );
      await addToCartButton.click();
      const cartBadge = page.locator('.shopping_cart_badge');
      await expect(cartBadge).toHaveText('1');
    });
  });
});

test.describe('Bai tap 3', () => {
  test.beforeAll(() => {
    console.log('Bắt đầu chạy nhóm test');
  });

  test.afterAll(() => {
    console.log('Kết thúc chạy nhóm test');
  });

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    const userName = getElementById(page, 'user-name');
    const password = getElementById(page, 'password');
    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
  });

  test.afterEach(async ({ page }, testInfo) => {
    if (testInfo.status !== testInfo.expectedStatus) {
      const screenshotPath = `screenshots/${testInfo.title.replace(
        /\s+/g,
        '_'
      )}.png`;
      await page.screenshot({ path: screenshotPath, fullPage: true });
      await testInfo.attach('screenshot', {
        path: screenshotPath,
        contentType: 'image/png',
      });
    }
  });

  test('add to cart', async ({ page }) => {
    const addToCartButton = page.locator(
      'button[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    await addToCartButton.click();
    const cartBadge = page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('0');
  });
});
