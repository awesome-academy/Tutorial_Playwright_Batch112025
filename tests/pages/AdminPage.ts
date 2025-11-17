import { Page, expect } from '@playwright/test';

export class AdminPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto(
      'https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers'
    );
  }

  async addUser(username: string, password: string) {
    await this.page.getByRole('button', { name: ' Add' }).click();
    await this.page.getByText('-- Select --').first().click();
    await this.page.getByRole('option', { name: 'Admin' }).click();
    await this.page.getByRole('textbox', { name: 'Type for hints...' }).click();
    await this.page
      .getByRole('textbox', { name: 'Type for hints...' })
      .fill('j');
    await this.page.getByRole('option', { name: 'James  Butler' }).click();
    await this.page.getByText('Status-- Select --').click();
    await this.page.getByRole('option', { name: 'Enabled' }).click();
    await this.page.getByRole('textbox').nth(2).click();
    await this.page.getByRole('textbox').nth(2).fill(username);
    await this.page.getByRole('textbox').nth(3).click();
    await this.page.getByRole('textbox').nth(3).click();
    await this.page.getByRole('textbox').nth(3).fill(password);
    await this.page.getByRole('textbox').nth(3).press('Tab');
    await this.page.getByRole('textbox').nth(4).fill(password);
    await this.page.getByRole('textbox').nth(4).press('Tab');
    await this.page.getByRole('button', { name: 'Cancel' }).press('Tab');
    await this.page.getByRole('button', { name: 'Save' }).click();
    await expect(this.page.locator('.oxd-toast-content')).toBeVisible();
    await expect(this.page.locator('.oxd-toast-content')).toContainText(
      'Successfully Saved'
    );
  }

  async searchUser(username: string) {
    await this.page.getByRole('textbox').nth(1).fill(username);
    await this.page.getByRole('button', { name: 'Search' }).click();
  }

  async expectUserVisible(username: string) {
    await expect(this.page.getByText(username)).toBeVisible();
  }

  async deleteUser(username: string) {
    await this.searchUser(username);

    const checkbox = this.page.locator('.oxd-checkbox-input').first();
    await checkbox.check();

    await this.page.getByRole('button', { name: 'Delete Selected' }).click();
    await this.page.getByRole('button', { name: 'Yes, Delete' }).click();

    await expect(this.page.getByText('Successfully Deleted')).toBeVisible();
  }
}
