// 1️Interface IUser
interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

// 2️Class User 
class User implements IUser {
  name: string;
  email: string;
  isAdmin: boolean;

  // Gán giá trị khi tạo mới đối tượng.
  constructor(name: string, email: string, isAdmin: boolean) {
    this.name = name;
    this.email = email;
    this.isAdmin = isAdmin;
  }

  // Phương thức getInfo in ra thông tin người dùng
  getInfo(): string {
    return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
  }
}

//  Tạo một instance của class User
const user1 = new User("Lan", "lan@example.com", true);

// 4️Gọi method getInfo()
console.log(user1.getInfo());

//nâng cao
// 3️Class AdminUser kế thừa user
class AdminUser extends User {
  constructor(name: string, email: string) {
    // Gọi lại constructor của class cha (User)
    super(name, email, true); // admin mặc định là true
  }

  // Method riêng của AdminUser
  deleteUser(user: User): void {
    console.log(`Admin ${this.name} deleted user ${user.name}`);
  }
}

// Tạo danh sách người dùng (mảng gồm User & AdminUser)
const users: User[] = [
  new User("Lan", "lan@example.com", false),
  new User("Minh", "minh@example.com", false),
  new AdminUser("Admin", "admin@example.com"),
];

// Duyệt mảng và in thông tin
for (const user of users) {
  console.log(user.getInfo());

  // Nếu là AdminUser thì gọi thêm deleteUser()
  if (user instanceof AdminUser) {
    user.deleteUser(users[0]); // Admin xóa user đầu tiên
  }
}


