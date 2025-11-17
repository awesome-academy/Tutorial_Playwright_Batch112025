import { test, expect } from '@playwright/test';

test('code gen', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page
    .getByRole('textbox', { name: 'What needs to be done?' })
    .fill('Học playwright');
  await page
    .getByRole('textbox', { name: 'What needs to be done?' })
    .press('Enter');
  await page.getByRole('checkbox', { name: 'Toggle Todo' }).check();
  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(0);
});

test('Code gen năng cao', async ({ page }) => {
   await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 1');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 2');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 3');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 4');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('test 5');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'test 2' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'test 1' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'test 4' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(2);
  await page.getByRole('link', { name: 'All' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(5);
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.locator('.todo-list li')).toHaveCount(3);
});
