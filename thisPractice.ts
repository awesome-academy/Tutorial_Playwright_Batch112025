class Counter {
  count: number;

  constructor() {
    this.count = 0; 
  }

  increment() {
    this.count++;
    console.log(`Count is now: ${this.count}`);
  }

  reset() {
    this.count = 0;
    console.log("Counter reset");
  }
}

// Tạo instance
const counter = new Counter();

// Gọi method 
counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.reset(); 

// Giá trị hiện tại
console.log("Current count:", counter.count); // Current count: 0