import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { getElementAttributeName, getElementById } from '@/utils/helpers';

test('submit form ', async ({ page }) => {
  const fakeEmail = faker.internet.email();
  const userName = getElementById(page, 'username');
  const email = getElementById(page, 'email');
  const gender = page.locator('[name="gender"][value="female"]');
  const hobbies = getElementById(page, 'hobbies');
  const interests = getElementById(page, 'interests');
  const country = getElementById(page, 'country');
  const dob = getElementAttributeName(page, 'dob');
  await userName.fill(faker.internet.username());
  await email.fill(fakeEmail);
  await gender.check();
  await expect(gender).toBeChecked();
  const count = await hobbies.count();
  for (let i = 0; i < count; i++) {
    const checkbox = hobbies.nth(i);
    if (!(await checkbox.isChecked())) {
      await checkbox.check();
    }
  }
  await interests.selectOption('music');
  await country.selectOption('usa');
  await dob.fill(faker.date.birthdate().toISOString().split('T')[0]);
  await page.getByRole('button', { name: 'Register' }).click();
  const tbody = page.locator('#userTable tbody');
  const rowWithUser = tbody.locator('tr', { hasText: fakeEmail });
  const cell = rowWithUser.locator('td').first();
  await expect(rowWithUser).toBeVisible();
  await expect(cell).toHaveText('1');
  for (let i = 0; i < count; i++) {
    await expect(hobbies.nth(i)).toBeChecked();
  }
});

test.beforeEach(async ({ page }) => {
  await page.goto(
    'https://material.playwrightvn.com/01-xpath-register-page.html'
  );
});

test.afterEach(async ({ page }) => {
  await page.evaluate(() => {
    localStorage.removeItem('users');
  });
  const value = await page.evaluate(() => localStorage.getItem('users'));
  expect(value).toBeNull();
});
