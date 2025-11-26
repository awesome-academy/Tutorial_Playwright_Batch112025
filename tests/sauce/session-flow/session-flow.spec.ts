import { test, expect } from "@playwright/test";
import { HomePage } from "../../../pages/sauce/home-pages";
import { LoginPage } from "../../../pages/sauce/login-pages";

test.describe("Session Flow Test", () => {
  let loginPage: LoginPage;
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");

    homePage = new HomePage(page);
  });

    test("Complete session flow from login to logout", async ({ page }) => {
    // Verify successful login
    await expect(page).toHaveURL(/.*inventory.html/);
    await expect(page.locator('.title')).toHaveText('Products');

    // Logout 
    await homePage.openMenu();
    await page.click('#logout_sidebar_link');

    // Verify redirection to login page
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    });
});
