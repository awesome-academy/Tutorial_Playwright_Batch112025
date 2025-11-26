import { test, expect } from "@playwright/test";
test("Register success", async ({ page }) => {
  await page.goto(
    "https://material.playwrightvn.com/01-xpath-register-page.html"
  );

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/User Registration/);

  // Fill the registration form

  await page.getByRole("textbox", { name: "username" }).fill("joindoe");
  await page
    .getByRole("textbox", { name: "email" })
    .fill("joindoe@example.com");
  await page.getByRole("radio", { name: "Male", exact: true }).check();
  await page.getByLabel("Reading").check();
  await page.getByLabel("Cooking").check();
  await page.locator("#interests").selectOption(["Art", "Music"]);
  await page.locator("#country").selectOption("United States");

  await page.locator("#dob").focus();
  await page.locator("#dob").type("01011999");
  await page.locator("#profile").setInputFiles("tests/fixtures/file.png");

  await page
    .getByRole("textbox", { name: "bio" })
    .fill("Hello, I am John Doe.\nI'm a test user.");

  await page.locator("#rating").evaluate((el) => {
    (el as HTMLInputElement).value = "8";
    el.dispatchEvent(new Event("input"));
  });

  await page.locator("#favcolor").evaluate((el) => {
    (el as HTMLInputElement).value = "#ffffff";
    el.dispatchEvent(new Event("input"));
  });

  await page.getByLabel("Subscribe").check();
  await page.locator("label.switch").click();
  const ratingDiv = page.locator("#starRating");

  const box = await ratingDiv.boundingBox();
  if (box) {
    const rating = 4;
    const maxRating = 5;
    const x = box.width * (rating / maxRating);
    const y = box.height / 2;
    await ratingDiv.click({ position: { x, y } });
  }

  await page.getByRole("button", { name: "Register" }).click();
  await expect(page.locator("#userTable")).toContainText("joindoe");

  const detailsColumn = page.locator("#userTable tbody tr td:nth-child(4)");
  
  await expect(detailsColumn).toContainText("Gender: male");
  
  await expect(detailsColumn).toContainText("Hobbies: reading, cooking");
});
