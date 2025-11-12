(() => {
class Counter {
  count: number = 0;

  increment(): void {
    this.count++;
    console.log(`Count is: ${this.count}`);
  }

  reset(): void {
    this.count = 0;
    console.log("Counter reset");
  }
}

const counter = new Counter();

counter.increment();
counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.increment(); 
counter.reset(); 
//Thêm vòng lặp
for (let i:number =0; i<=8; i++)  {
    counter.increment();
} 
})();