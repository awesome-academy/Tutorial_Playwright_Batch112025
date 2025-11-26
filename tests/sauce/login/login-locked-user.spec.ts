import { test, expect } from '@playwright/test';
import { LoginPage } from '../../../pages/sauce/login-pages';

test.describe('Login Failure - Locked Out User', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('Login with locked_out_user', async ({ page }) => {
    await loginPage.login('locked_out_user', 'secret_sauce');
    
    // Verify error message is displayed
    const errorMessage = page.locator('[data-test="error"]');
    await expect(errorMessage).toBeVisible();
    await expect(errorMessage).toContainText('this user has been locked out');
  });
});
