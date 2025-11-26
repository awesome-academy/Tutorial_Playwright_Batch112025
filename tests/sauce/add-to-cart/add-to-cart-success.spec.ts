import { test, expect } from "@playwright/test";
import { HomePage } from "../../../pages/sauce/home-pages";
import { LoginPage } from "../../../pages/sauce/login-pages";

test.describe("Add to Cart Success Test", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    homePage = new HomePage(page);
  });

  test("Add multiple products to cart successfully", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/inventory.html");

    const firstAddToCartButton = page.getByText("Add to Cart").first();
    await firstAddToCartButton.click();

    await expect(page.locator('[data-test="shopping-cart-link"]')).toHaveText("1");

    const secondAddToCartButton = page.getByText("Add to Cart").nth(1);
    await secondAddToCartButton.click();

    const cartIcon = page.locator('[data-test="shopping-cart-link"]');
    await expect(cartIcon).toHaveText("2");

    await cartIcon.click();

    const cartItems = page.locator(".cart_item");
    await expect(cartItems).toHaveCount(2);
  });
});
