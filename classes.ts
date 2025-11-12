(() => {
//Tao interface
interface IUser {
    name: string,
    email: string,
    isAdmin: boolean
}
//Tao class
class User implements IUser {
    constructor(public name:string, public email:string,public isAdmin:boolean=false)
    {}
    //Method get info
  getInfo(): string{ 
    return `User: ${this.name}, Email: ${this.email}, Admin: ${this.isAdmin}`;
  }
} 
//Tạo instance và gọi getInfo
  const userc = new User ("ABC","abc@gmail.com", false);
  console.log(userc.getInfo());

//Tao Class kế thừa
class AdminUser extends User { //extends - kế thừa từ 1 hàm nào đó
    constructor(name:string,email:string) {
        super(name,email,true);
    }
    //Method delete
    deleteUser(user:User): void {
        console.log(`Admin ${this.name} deleted user: ${user.name}`);
    }
} 
  const adminc = new AdminUser ("XYZ","xyz@gmail.com");
  adminc.deleteUser(userc);

//Tạo mảng users gồm User và AdminUser, duyệt mảng và in info
    //Tạo mảng
const users:User[] = [
    new User("ABC","abc@gmail.com"),
    new User("DEF","def@gmail.com"),
    new User("GHI","ghi@gmail.com"),
    new AdminUser("STU","stu@gmail.com"),
    new AdminUser("XYZ","xyz@gmail.com")
];
    //Duyệt mảng (chạy từng giá trị của mảng) và dùng hàm getInfo để in ra
for (let i: number = 0; i < users.length; i++) {
    const u = users[i];
    if (u){
        console.log(u.getInfo());
    }
   }
   
//Thực hành thử với map
const infos = users.map(user => user.getInfo());
console.log(infos);
})();

/*for (let i: number = 0; i < users.length; i++) {  // <, không <=
    console.log(users[i].getInfo());
Sẽ luôn bị báo lỗi ở dòng thứ 2 là đối tượng chưa được xác định. Do cơ chế của typescripts nghi ngờ có giá trị null 
*/



