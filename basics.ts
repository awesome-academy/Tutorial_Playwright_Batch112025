// 1️Khai báo các biến cơ bản
let username: string = "Lan";
let age: number = 25;
let isActive: boolean = true;
let roles: string[] = ["admin", "editor", "viewer"];

// 2️Khai báo object user
let user: { name: string; email: string; isAdmin: boolean } = {
  name: username,
  email: "lan@example.com",
  isAdmin: true,
};

// 3️In ra thông tin user theo format
//console.log("User:", user);
//console.log("Roles:", roles);
//console.log("IsActive:", isActive);
console.log(
  `User: ${user.name} (email: ${user.email}), Roles: ${roles.join(
    ", "
  )}, Active: ${isActive}`
);
// nâng cao
function checkAge(age: number): void {
  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Under 18");
  }
}

// Gọi thử
checkAge(20); // Adult
checkAge(15); // Under 18
