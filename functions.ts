// functions.ts
function sum(a: number, b: number): number {
    return a + b;
  }
  
  const multiply = (a: number, b: number): number => a * b;
  
  function greet(name: string, role: string = "Guest"): string {
    return `Hello ${name}, your role is ${role}.`;
  }
  
  async function delayPrint(msg: string, time: number): Promise<void> {
    await new Promise((resolve) => setTimeout(resolve, time));
    console.log(msg);
  }
  
  // Test
  console.log("Sum:", sum(5, 3));
  console.log("Multiply:", multiply(5, 3));
  console.log(greet("Long", "Admin"));
  
  delayPrint("Hello after 2 seconds", 2000);