// pages/dashboardPage.ts

export class DashboardPage {
    async verifyLoginSuccess(): Promise<void> {
      console.log("📊 Verifying login success on Dashboard...");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("🎉 User is successfully on the Dashboard!");
    }
  }