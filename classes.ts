// classes.ts

// 1️⃣ Interface định nghĩa cấu trúc User
interface IUser {
    name: string;
    email: string;
    isAdmin: boolean;
  }
  
  // 2️⃣ Class triển khai interface
  class User implements IUser {
    constructor(
      public name: string,
      public email: string,
      public isAdmin: boolean
    ) {}
  
    getInfo(): string {
      return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
    }
  }
  
  // 3️⃣ Tạo instance và gọi getInfo
  const user1 = new User("Bui Thanh Long", "long@example.com", false);
  console.log(user1.getInfo());