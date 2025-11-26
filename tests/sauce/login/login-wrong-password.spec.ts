import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/sauce/login-pages';

test.describe('Login Failure - Wrong Password', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login failure with wrong password', async ({ page }) => {
    await loginPage.login('standard_user', 'wrong_password');
    
    // Verify error message is displayed
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username and password do not match');
  });
});
