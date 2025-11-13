import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { userName } from '@/config/constants';
import { AdminPage } from './pages/AdminPage';

test.use({ storageState: 'auth.json' });

test.describe('Dashboard hiển thị thông tin user mới thêm', () => {


  test('Thêm user mới', async ({ page }) => {
    const admin = new AdminPage(page);
    await admin.goto();
    await admin.addUser(userName, faker.internet.password());
  });

  test('Kiểm tra user tồn tại', async ({ page }) => {
    const admin = new AdminPage(page);
    await admin.goto();
    await admin.searchUser(userName);
    await admin.expectUserVisible(userName);
  });

  test('Xóa user (cleanup)', async ({ page }) => {
    const admin = new AdminPage(page);
    await admin.goto();
    await admin.deleteUser(userName);
  });
});
