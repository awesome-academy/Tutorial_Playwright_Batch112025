import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  readonly products: Locator;
  readonly addToCartButtons: Locator;
  readonly cartIcon: Locator;
  readonly menuIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    this.products = page.locator('[data-test="inventory-item"]');
    this.addToCartButtons = page.getByText('Add to Cart');
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.menuIcon = page.locator('#react-burger-menu-btn');
  }

  async clickAddToCartByIndex(index: number) {
    await this.addToCartButtons.nth(index).click();
  }

  async clickRandomAddToCart(count: number) {
    const buttons = await this.addToCartButtons.all();
    const shuffled = buttons.sort(() => 0.5 - Math.random()).slice(0, count);
    for (const btn of shuffled) {
      await btn.click();
    }
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async openMenu() {
    await this.menuIcon.click();
  }

  async getProductCount() {
    return await this.products.count();
  }
}
