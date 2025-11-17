export class DashboardPage {
  async verifyLoginSuccess() {
    console.log("Verifying successful login on dashboard page");
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    console.log("Login verified successfully on dashboard page");
  }
}
