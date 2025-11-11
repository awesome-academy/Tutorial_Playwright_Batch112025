//Viết function sum(a: number, b: number) → trả về tổng.
function sum(a: number, b: number): number {
  return a + b;
}

//Gọi thử
console.log("sum1", sum(5, 10)); 
console.log("sum2", sum(-3, 7)); 

//Viết arrow function multiply = (a: number, b: number) → trả về tích.
const multiply = (a: number, b: number): number => {
  return a * b;
};

//Gọi thử
console.log("Multiply1", multiply(4, 6)); 
console.log("Multiply2", multiply(-2, 8)); 

//Viết function greet(name: string, role: string = "Guest") → in "Hello <name>, your role is <role>".
function greet(name: string, role: string = "Guest"): void {
  console.log(`Hello ${name}, your role is ${role}`);
}

//Gọi thử
greet("Lan", "Admin");
greet("Minh");  

// nâng cao
//Viết async function delayPrint(msg: string, time: number) → in message sau time ms.
async function delayPrint(msg: string, time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(msg);
      resolve();
    }, time);
  });
}

//Gọi thử
delayPrint("This message is printed after 2 seconds", 2000); 
delayPrint("This message is printed after 1 second", 1000); 