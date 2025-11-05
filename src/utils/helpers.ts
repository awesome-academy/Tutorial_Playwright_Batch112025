import type { Locator, Page } from 'playwright';

export const getElementById = (page: Page, id: string): Locator =>
  page.locator(`#${id}`);

export const getElementAttributeName = (page: Page, name: string): Locator =>
  page.locator(`[name="${name}"]`);

export const loginAndExpectError = async ({
  page,
  userName,
  password,
}: {
  page: Page;
  password: string;
  userName: string;
}): Promise<Locator> => {
  const userNameElement = getElementById(page, 'user-name');
  const passwordElement = getElementById(page, 'password');
  await userNameElement.fill(userName);
  await passwordElement.fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
  return page.locator(`[data-test="error"]`);
};
