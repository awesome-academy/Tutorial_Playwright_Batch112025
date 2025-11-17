let username = "ductvh";
let age: number = 25;
let isActive: boolean = true;
const roles: string[] = ["admin", "user", "guest"];

class User {
  constructor(
    public name: string,
    public email: string,
    public isAdmin: boolean
  ) {}
}

const user = new User(username, "ductvh@example.com", isActive);

console.log(`User: ${user.name}, Email: ${user.email}, Admin: ${user.isAdmin}`);

const checkAge = () => {
  if (age == null || age === undefined) {
    console.log("Age is not defined");
    return;
  }

  if (age > 18) {
    console.log("Adult.");
  } else {
    console.log("Under 18");
  }
};
