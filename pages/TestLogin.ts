import { LoginPage } from "./LoginPage";
import { DashboardPage } from "./DashboardPage";

async function testLogin() {
    const loginPage = new LoginPage();
    const dashboardPage = new DashboardPage();
    await loginPage.gotoLoginPage();
    await loginPage.login("testuser", "password123");
    await dashboardPage.verifyLoginSuccess();
}

testLogin();
