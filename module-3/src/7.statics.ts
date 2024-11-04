{
  // static

  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count = Counter.count + 1);
    }
    static decrement() {
      return (Counter.count = Counter.count - 1);
    }
  }

  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.decrement());
}

/* 
Explain the Working flow of the Code

1. The `Counter` class is defined with a static property `count` and two static methods `increment` and `decrement`.
2. The `count` property is initialized to 0.
3. The `increment` method increments the `count` property by 1.
4. The `decrement` method decrements the `count` property by 1.
5. The `increment` method is called twice, and the `decrement` method is called once. The output is `1`, `2`, and `1`.
*/
