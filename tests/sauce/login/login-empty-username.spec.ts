import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/sauce/login-pages';

test.describe('Login Failure - Empty Username', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login failure when username is empty', async ({ page }) => {
    await loginPage.fillPassword('secret_sauce');
    await loginPage.clickLogin();
    
    // Verify error message is displayed
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('Username is required');
  });
});
