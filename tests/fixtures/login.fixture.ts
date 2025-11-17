import { test as base, Page } from '@playwright/test';

type OrangeFixtures = {
  loggedInPage: Page;
};

export const test = base.extend<OrangeFixtures>({
  loggedInPage: async ({ page }, use) => {
    const authFilePath = 'auth.json';
    try {
      await page.context().addCookies(require(authFilePath));
    } catch {
      await page.goto('https://www.saucedemo.com/');
      await page.getByPlaceholder('Username').fill('standard_user');
      await page.getByPlaceholder('Password').fill('secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();
      await page.waitForURL('**/inventory.html');
      await page.context().storageState({ path: authFilePath });
    }
    await use(page);
  },
});
