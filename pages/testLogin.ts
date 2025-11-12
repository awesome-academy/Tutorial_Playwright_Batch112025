import { DashboardPage } from "./dashboardPage";
import LoginPage from "./loginPage";
(() => {
async function testLogin() {
    const loginpage = new LoginPage();
    const dashboard = new DashboardPage();

    await loginpage.gotoLoginPage();
    await loginpage.login("admin","123456");
    await dashboard.verifyLoginSuccess();
}
testLogin()
    .then(() => console.log("Done test!"));

})();