// pages/loginPage.ts

export class LoginPage {
    async gotoLoginPage(): Promise<void> {
      console.log("🟢 Navigating to Login Page...");
      await new Promise((resolve) => setTimeout(resolve, 1000)); // giả lập delay
    }
  
    async login(username: string, password: string): Promise<void> {
      console.log(`🔐 Logging in with username: ${username}, password: ${password}`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("✅ Login successful!");
    }
  }