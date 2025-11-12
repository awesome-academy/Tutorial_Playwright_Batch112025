import { faker } from '@faker-js/faker';
import { test, expect, Page } from '@playwright/test';
import { getElementAttributeName } from '@/utils/helpers';
import { BrowserManager } from '@/utils/browser-manager';

test.describe('Registration', () => {
  const browserManager = new BrowserManager();
  let page: Page = null;
  const url =
    'https://www.globalsqa.com/angularJs-protractor/registration-login-example/#';

  test.beforeAll(async () => {
    await browserManager.init();
    page = browserManager.page;
    await page.goto(`${url}/register`);
  });

  test.afterAll(async () => {
    await browserManager.close();
  });

  test('has title', async () => {
    const h2 = page.locator('h2');
    await expect(h2).toHaveText('Register');
  });

  test('fields exist and register success', async () => {
    const firstName = getElementAttributeName(page, 'firstName');
    const lastName = getElementAttributeName(page, 'lastName');
    const userName = getElementAttributeName(page, 'username');
    const password = getElementAttributeName(page, 'password');
    expect(firstName).toBeVisible();
    expect(lastName).toBeVisible();
    expect(userName).toBeVisible();
    expect(password).toBeVisible();

    await firstName.fill(faker.person.firstName());
    await lastName.fill(faker.person.lastName());
    await userName.fill(faker.internet.username());
    await password.fill(faker.internet.password());

    await page.getByRole('button', { name: 'Register' }).click();
    await page.waitForURL(`${url}/login`);
    await expect(page.locator('.container')).toContainText(
      'Registration successful'
    );
  });
});
