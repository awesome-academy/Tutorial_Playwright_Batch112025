function sum(a: number, b: number): number {
  return a + b;
}

const multiply = (x: number, y: number): number => {
  return x * y;
};

function greet(name: string, role: string = "Guest"): void {
  console.log(`Hello, ${name}! Your role is ${role}.`);
}

const delayPrint = (message: string, delay: number) =>
  new Promise<void>(resolve =>
    setTimeout(() => {
      console.log(message);
      resolve();
    }, delay)
  );


// Example usages
console.log(`Sum: ${sum(5, 10)}`);
console.log(`Multiply: ${multiply(4, 3)}`);
greet("Alice");
greet("Bob", "Admin");

delayPrint("This message is printed after 2 seconds", 2000).then(() =>
  console.log("Done printing after delay")
);
