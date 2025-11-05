import type { Locator, Page } from 'playwright';

export const getElementById = (page: Page, id: string): Locator =>
  page.locator(`#${id}`);

export const getElementAttributeName = (page: Page, name: string): Locator =>
  page.locator(`[name="${name}"]`);
