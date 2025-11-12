import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

export class BrowserManager {
  private browser: Browser = null;
  private context: BrowserContext = null;
  public page: Page = null;

  async init() {
    this.browser = await chromium.launch({ headless: true });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close() {
    await this.context.close();
    await this.browser.close();
  }
}
