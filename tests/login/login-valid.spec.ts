import { test, expect } from '@playwright/test';
import { getElementById } from '@/utils/helpers';

test.describe('Login Valid', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
  });

  test('submit success', async ({ page }) => {
    const userName = getElementById(page, 'user-name');
    const password = getElementById(page, 'password');
    await userName.fill('standard_user');
    await password.fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.waitForURL('https://www.saucedemo.com/inventory.html');
    await expect(page).toHaveURL(/\/inventory\.html$/);
  });
});
