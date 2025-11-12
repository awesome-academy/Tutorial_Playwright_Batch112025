(() => {
//Khai bao bien
let username: string = "HuyenNHN"; //username (string)
let age: number = 38; // age (number)
let isActive: boolean = true; //  isActive (boolean)
let roles: string[] = ["Quality Assurance","Member"]; //roles (array of string)
interface User { // Khai bao object
    name:string,
    email:string,
    isAdmin: boolean
};
const user: User = { //Khoi tao gia tri
   name:"Nguyen Ha Ngoc Huyen",
   email:"nguyen.ha.ngoc.huyen@sun-astesik.com",
    isAdmin: false
};
// In ra thong tin user
console.log(`User: ${user.name} (email: ${user.email}), Role: ${roles.join(" - ")}, Active: ${isActive}`
);

//function check age
function checkage (age: number): void {
    if (age >= 18)
        console.log("Adult");
    else
        console.log("Under 18");
}
checkage(17);
})();