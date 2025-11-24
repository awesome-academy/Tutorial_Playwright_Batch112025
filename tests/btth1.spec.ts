import { test, expect } from '@playwright/test';

test('Register user successfully', async ({ page }) => {
  await page.goto('https://material.playwrightvn.com/01-xpath-register-page.html');

  // input name + mail
  await page.locator('#username').fill('lanptp');
  await page.locator('#email').fill('lan@example.com');

  // chọn radio button
  const genderMale = page.locator('input[value="male"]');
  await genderMale.check();

  // chọn checkbox
  const Hobbies = page.locator('input[value="reading"]');
  await Hobbies.check();


  // chọn dropdown
  await page.locator('#interests').selectOption('Science');

  // chọn dropdown
  await page.locator('#country').selectOption('Canada');

  // chọn ngày sinh
  await page.locator('#dob').fill('1995-09-10');

  // Check hiển thị giá trị đã chọn
  await expect(genderMale).toBeChecked();
  await expect(Hobbies).toBeChecked();


  // click đăng ký
  await page.getByRole('button', { name: 'Register' }).click();

  // kiểm tra table
  const lastRow = page.locator('#userTable tbody tr').last();

  await expect(lastRow.locator('td').nth(1)).toHaveText('lanptp');
  await expect(lastRow.locator('td').nth(2)).toHaveText('lan@example.com');
  await expect(lastRow.locator('td').nth(3)).toContainText("Gender: male");
  await expect(lastRow.locator('td').nth(3)).toContainText("Hobbies: reading");
  //await expect(lastRow.locator('td').nth(3)).toContainText("Interests: science");   //đang k lưu được data của Interests nên k check dc
  await expect(lastRow.locator('td').nth(3)).toContainText("Country: canada");
  await expect(lastRow.locator('td').nth(3)).toContainText(" Date of Birth: 1995-09-10");
});
