import { faker } from '@faker-js/faker';
import { test, expect } from '@playwright/test';
import { KEYBOARD } from '@/config/constants';
import { getElementByClassName } from '@/utils/helpers';

test.describe('TodoMVC - crud', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

  test('create, read, update, delete todo items', async ({ page }) => {
    const input = getElementByClassName(page, 'new-todo');
    const fakeTaskFirst = faker.animal.bear();
    const fakeTaskSecond = faker.animal.horse();
    const fakeTaskLast = faker.animal.insect();

    await input.fill(fakeTaskFirst);
    await input.press(KEYBOARD.ENTER);

    await input.fill(fakeTaskSecond);
    await input.press(KEYBOARD.ENTER);

    await input.fill(fakeTaskLast);
    await input.press(KEYBOARD.ENTER);

    const secondTaskCheckbox = page.locator('.todo-list li .toggle').nth(1);
    await secondTaskCheckbox.check();

    const firstTaskLabel = page.locator('.todo-list li label').first();
    await expect(firstTaskLabel).toHaveText(fakeTaskFirst);

    const taskC = page
      .locator('.todo-list li')
      .filter({ hasText: fakeTaskLast });
    await taskC.hover();
    await taskC.locator('.destroy').click();
    console.log(fakeTaskLast);
    await expect(
      page.locator('.todo-list li label').filter({ hasText: fakeTaskLast })
    ).toHaveCount(0);
  });
});
