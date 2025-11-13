import { chromium } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login('Admin', 'admin123');

  await context.storageState({ path: 'auth.json' });
  await browser.close();
})();
