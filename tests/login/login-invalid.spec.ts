import { test, expect } from '@playwright/test';
import { getElementById, loginAndExpectError } from '@/utils/helpers';

test.describe('Login Invalid', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  });

  test.describe('Login errors', () => {
    test('wrong password', async ({ page }) => {
      const errorLocator = await loginAndExpectError({
        page,
        userName: 'standard_user',
        password: '1',
      });
      await expect(errorLocator).toBeVisible();
      await expect(errorLocator).toHaveText(
        'Epic sadface: Username and password do not match any user in this service'
      );
    });

    test('empty user name', async ({ page }) => {
      const errorLocator = await loginAndExpectError({
        page,
        userName: '',
        password: '1',
      });
      await expect(errorLocator).toBeVisible();
      await expect(errorLocator).toHaveText(
        'Epic sadface: Username is required'
      );
    });

    test('locker user', async ({ page }) => {
      const errorLocator = await loginAndExpectError({
        page,
        userName: 'locked_out_user',
        password: 'secret_sauce',
      });
      await expect(errorLocator).toBeVisible();
      await expect(errorLocator).toHaveText(
        'Epic sadface: Sorry, this user has been locked out.'
      );
    });
  });

  test('Add product to card', async ({ page }) => {
    const userName = getElementById(page, 'user-name');
    const password = getElementById(page, 'password');
    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    const items = await page.$$('[data-test="inventory-item"]');
    expect(items.length).toBeGreaterThan(2);
    const addToCardFirstItem = await items[0].$(
      'button[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    if (addToCardFirstItem) {
      await addToCardFirstItem.click();
    }
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      '1'
    );
    const addToCartButtonSecondItem = await items[1].$(
      'button[data-test="add-to-cart-sauce-labs-bike-light"]'
    );
    if (addToCartButtonSecondItem) {
      await addToCartButtonSecondItem.click();
    }
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText(
      '2'
    );
  });

  test('Login and Logout', async ({ page }) => {
    const userName = getElementById(page, 'user-name');
    const password = getElementById(page, 'password');
    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    const menuButton = getElementById(page, 'react-burger-menu-btn');
    await menuButton.click();
    const logoutLink = page.locator('[data-test="logout-sidebar-link"]');
    await logoutLink.click();
    await expect(page).toHaveURL('https://www.saucedemo.com');
  });
});
