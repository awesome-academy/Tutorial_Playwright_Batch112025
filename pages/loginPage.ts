export class LoginPage {
  async gotoLoginPage() {
    console.log("https://www.saucedemo.com/");
  }

  async login(username: string, password: string) {
    console.log(`username: ${username}, password: ${password}`);
  }
}

