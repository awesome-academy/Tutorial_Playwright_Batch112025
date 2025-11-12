(() => {
//function tra ve tong
function sum(a:number, b:number): number {
    return a + b;
}
console.log(sum(2,5));// call function & print
//function tra ve tich
const accumulation = (a: number, b: number): number => a * b;
console.log(accumulation(2,5));
//Function greet
function greet(name: string,role: string = "Guest") {
    console.log(`Hello ${name}, your role is ${role}`);
}
greet("Huyen");//Role mac dinh
greet("Van", "Teacher");
const greetarrow = (name:string,role:string="Sunner"): void => {
    console.log(`Hello ${name}, your role is ${role}`);
}
greetarrow("Huyen");
//Hàm async
async function delayPrint(msg:string,time:number): Promise<void> {
    await new Promise<void>((resolve) => setTimeout(resolve,time));
    console.log(msg);
} // time: mili giay
delayPrint("Try hard!",2000);
 })();