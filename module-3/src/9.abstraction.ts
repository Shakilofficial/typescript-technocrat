interface Vehicle {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Car implements Vehicle {
  startEngine(): void {
    console.log("Car engine started");
  }
  stopEngine(): void {
    console.log("Car engine stopped");
  }
  move(): void {
    console.log("Car moving");
  }
  test(): void {
    console.log("Car test");
  }
}

const tesla = new Car();
tesla.startEngine();
tesla.stopEngine();
tesla.move();
tesla.test();

{
}

/* 
Abstraction is the process of hiding the complexity of a system by breaking it down into smaller, more manageable parts. Abstraction allows us to focus on the essential features of a system and ignore the irrelevant details.

In the example above, we have an interface Vehicle that defines the basic functionality of a vehicle. The interface defines three methods: startEngine, stopEngine, and move. We then create a class Car that implements the Vehicle interface. The Car class provides an implementation for each of the methods defined in the Vehicle interface.

The Car class also has a test method that is not part of the Vehicle interface. This method is not part of the interface because it is not essential for the functionality of the Car class. By defining the test method outside of the Vehicle interface, we can ensure that it is not accidentally used by other classes that implement the Vehicle interface.

By using abstraction, we can create a more modular and maintainable codebase. We can break down complex systems into smaller, more manageable parts, and define clear boundaries between these parts. This allows us to focus on the essential features of a system and ignore the irrelevant details.  
*/
