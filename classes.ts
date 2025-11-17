interface IUser {
  name: string;
  email: string;
  isAdmin: boolean;
}

class User2 implements IUser {
  constructor(
    public name: string,
    public email: string,
    public isAdmin: boolean
  ) {}

  getInfo(): string {
    return `Name: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
  }
}

class Admin extends User2 {
  constructor(name: string, email: string) {
    super(name, email, true);
  }

  deleteUser(user: IUser): string {
    return `Admin ${this.name} deleted user ${user.name}`;
  }
}

const newUser = new User2("ductvh", "ductvh@example.com", false);
console.log(newUser.getInfo());

const adminUser = new Admin("admin", "admin@example.com");
console.log(adminUser.getInfo());
console.log(adminUser.deleteUser(newUser));

const users = [newUser, adminUser];
users.forEach((user) => {
  console.log(`User List: ${user.getInfo()}`);
});
