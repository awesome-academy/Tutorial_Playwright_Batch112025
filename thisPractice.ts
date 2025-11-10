// thisPractice.ts

class Counter {
    // Thuộc tính
    count: number = 0;
  
    // Phương thức tăng count
    increment() {
      this.count++; // this ở đây chính là instance của Counter
      console.log(`Count is now: ${this.count}`);
    }
  
    // Phương thức reset count về 0
    reset() {
      this.count = 0;
      console.log("Counter reset");
    }
  }
  
  // Tạo instance và gọi method
  const counter = new Counter();
  
  counter.increment(); // Count is now: 1
  counter.increment(); // Count is now: 2
  counter.reset();     // Counter reset