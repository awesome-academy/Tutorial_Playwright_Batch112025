class Counter {
  private count: number = 0;

  increment(): void {
    this.count++;
    console.log(`Count after increment: ${this.count}`);
  }

  reset(): void {
    this.count = 0;
    console.log("Count has been reset to 0");
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
counter.reset();
