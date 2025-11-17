export class LoginPage {
  async gotoLoginPage() {
    console.log("Navigating to login page");
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    console.log("Arrived at login page");
  }

  async login(username: string, password: string) {
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
    await new Promise<void>((resolve) => setTimeout(resolve, 1000));
    console.log("Login process completed");
  }
}