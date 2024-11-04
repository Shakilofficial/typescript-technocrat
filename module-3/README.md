# Module-3.Object-Oriented Programming in TypeScript

## Introduction of Object Oriented Programming:

Object-Oriented Programming (OOP) is a programming paradigm that uses objects to represent and manipulate data. It is a powerful approach to software development that allows for modular and reusable code. OOP is based on the concept of classes, which are blueprints for creating objects.

In OOP, objects are instances of classes. A class defines the properties and behaviors that an object can have. For example, a class called "Person" might have properties like "name" and "age", and behaviors like "walk" and "talk".

OOP is a fundamental concept in software development, and TypeScript is a powerful language that supports OOP. In this module, we will explore the basics of OOP in TypeScript, including classes, inheritance, polymorphism, abstraction, encapsulation, and more.

---

### Module-3.1:Class and Object in Object-Oriented Programming:

In TypeScript, a class is a blueprint for creating objects. It defines the properties and methods that an object of that class will have. Here's an example of a class definition:

```typescript
class Animal {
  name: string;
  species: string;
  sound: string;

  constructor(name: string, species: string, sound: string) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }

  makeSound() {
    console.log(`The ${this.name} says ${this.sound}`);
  }
}
```

In this example, the `Animal` class has three properties: `name`, `species`, and `sound`. It also has a constructor that takes in these properties and assigns them to the corresponding instance variables. The `makeSound` method is a behavior that the class can have, and it prints a message that includes the name and sound of the animal.

To create an instance of the `Animal` class, we can use the `new` keyword:

```typescript
const dog = new Animal("Dog", "Canis lupus familiaris", "Ghew Ghew");
const cat = new Animal("Cat", "Felis catus", "Meow");
```

This creates two instances of the `Animal` class, with different values for the `name`, `species`, and `sound` properties.

We can access the properties and methods of an object using dot notation:

```typescript
dog.makeSound(); // Output: The Dog says Ghew Ghew
cat.makeSound(); // Output: The Cat says Meow
```

---

### Module-3.2:Inheritance in Object-Oriented Programming:

Inheritance is a mechanism in object-oriented programming that allows a class to inherit properties and methods from another class. In TypeScript, we can use the `extends` keyword to create a subclass that inherits from a superclass. Here's an example:

```typescript
class Person {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  getSleepTime(numOfHours: number) {
    console.log(`Student will sleep for ${numOfHours} hours.`);
  }
}

class Student extends Person {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}
```

In this example, the `Person` class has three properties: `name`, `age`, and `address`. The `Student` class extends the `Person` class and adds a new property called `address`. It also has a constructor that calls the `Person` constructor and does not define any additional properties or methods.

We can create an instance of the `Student` class and call the `getSleepTime` method inherited from the `Person` class:

```typescript
const student = new Student("John", 25, "New York");
student.getSleepTime(7);
```

This creates an instance of the `Student` class with the `name`, `age`, and `address` properties set to "John", 25, and "New York". It then calls the `getSleepTime` method inherited from the `Person` class, which prints a message indicating that the student will sleep for 7 hours.

---

### Module-3.3:Type Guard using typeof & in:

Type guards are a way to perform runtime type checking in TypeScript. They allow you to narrow down the type of a variable based on certain conditions. Type guards are useful when you want to ensure that a variable has a specific type or conforms to a certain shape. They can be used with the `typeof` and `in` operators. Here's an example:

```typescript
type Alphanumeric = string | number;
function add(a: Alphanumeric, b: Alphanumeric): Alphanumeric {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return a.toString() + " " + b.toString();
  }
}
console.log(add(1, 2)); // 3
console.log(add("Hello", "World")); // HelloWorld
```

In this example, the `add` function takes two parameters of type `Alphanumeric` and returns an `Alphanumeric` value. The function checks if the types of the two parameters are `number` and `number` using the `typeof` operator. If they are, it returns the sum of the two numbers. If not, it concatenates the two strings using the `+` operator.

We can also use the `in` operator to check if a property exists in an object. Here's an example:

```typescript
type GeneralUser = {
  name: string;
};
type AdminUser = {
  name: string;
  role: "admin";
};
function getUserType(user: GeneralUser | AdminUser) {
  if ("role" in user) {
    console.log(`Your name is ${user.name} and your role is ${user.role}`);
  } else {
    console.log(`Your name is ${user.name}`);
  }
}
getUserType({ name: "John" }); // Your name is John
getUserType({ name: "Shakil", role: "admin" }); // Your name is Shakil and your role is admin
```

In this example, the `getUserType` function takes a parameter of type `GeneralUser | AdminUser` and returns a `GeneralUser` or `AdminUser` value. The function checks if the `role` property exists in the user object using the `in` operator. If it does, it logs a message indicating that the user's name and role are available. If not, it logs a message indicating that the user's name is available. This is useful when you want to ensure that a user object has a specific shape or type before accessing its properties.

---

### Module-3.4:Type Guard using instanceof:

Type guards can also be used with the `instanceof` operator to check if an object is an instance of a specific class. Here's an example:

```typescript
class Animal {
  name: string;
  species: string;
  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }
  makeSound() {
    console.log(`The ${this.name} making sound.`);
  }
}
class Dog extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeBark() {
    console.log(`The ${this.name} barking.`);
  }
}
class Cat extends Animal {
  constructor(name: string, species: string) {
    super(name, species);
  }
  makeMeow() {
    console.log(`The ${this.name} meowing.`);
  }
}
const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
};
const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
};
const getAnimal = (animal: Animal) => {
  if (isDog(animal)) {
    animal.makeBark();
  } else if (isCat(animal)) {
    animal.makeMeow();
  } else {
    animal.makeSound();
  }
};
const dog = new Dog("Dog", "Canis lupus familiaris");
const cat = new Cat("Cat", "Felis catus");
getAnimal(dog); // The Dog barking.
getAnimal(cat); // The Cat meowing.
getAnimal(new Animal("Animal", "Unknown")); // The Animal making sound.
```

In this example, the `Animal` class is defined with properties `name` and `species`, and a `makeSound` method that prints a message indicating the animal's name. The `Dog` class is defined as a subclass of `Animal` with a constructor that calls the `Animal` constructor and does not define any additional properties or methods. The `Cat` class is defined as a subclass of `Animal` with a constructor that calls the `Animal` constructor and does not define any additional properties or methods. The `isDog` function is defined as a type guard that checks if an animal is an instance of the `Dog` class. The `isCat` function is defined as a type guard that checks if an animal is an instance of the `Cat` class. The `getAnimal` function takes an animal as a parameter and returns a message indicating the animal's name and sound. The function uses the `isDog` and `isCat` functions to determine if the animal is an instance of the `Dog` or `Cat` class, and calls the appropriate method on the animal. If the animal is not an instance of either class, it calls the `makeSound` method.

---

### Module-3.5:Access Modifiers in Object-Oriented Programming:

Access modifiers are used to control the visibility and accessibility of class members (properties and methods) in TypeScript. They allow you to define the level of access for different parts of your code. There are four access modifiers in TypeScript:

- `public`: Public members are accessible from anywhere, both inside and outside the class.
- `private`: Private members are only accessible from within the class.
- `protected`: Protected members are accessible from within the class and its subclasses.
- `readonly`: Readonly members are only assignable from within the class.

Here's an example of how to use access modifiers:

```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  addDeposit(amount: number) {
    this._balance += amount;
  }
  getBalance() {
    return this._balance;
  }
}
const account = new BankAccount(1234, "John Doe", 1000);
console.log(account.getBalance()); // 1000
account.addDeposit(500);
console.log(account.getBalance()); // 1500
```

In this example, the `BankAccount` class has three properties: `id`, `name`, and `_balance`. The `id` property is marked as `public` and `readonly`, the `name` property is marked as `public`, and the `_balance` property is marked as `protected`.  
The `addDeposit` method is marked as `protected`, and the `getBalance` method is marked as `public`. This means that the `addDeposit` method can only be called from within the class, and the `getBalance` method can be called from anywhere.  
The `account` object is created using the `BankAccount` class, with an `id` of 1234, a `name` of "John Doe", and an initial balance of 1000. The `getBalance` method is called on the `account` object, which returns the value of the `_balance` property.  
The `addDeposit` method is called on the `account` object, which adds 500 to the `_balance` property. The `getBalance` method is called on the `account` object again, which returns the updated value of the `_balance` property.

---

### Module-3.6:Getter and Setter in Object-Oriented Programming:

Getters and setters are special methods in TypeScript that allow you to define custom behavior for accessing and modifying properties. They are used to implement getters and setters in classes, which are a common pattern in object-oriented programming.  
 Here's an example of how to use getters and setters:

```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  set Deposit(amount: number) {
    this._balance += amount;
  }
  get Balance() {
    return this._balance;
  }
}
const account = new BankAccount(1234, "John Doe", 1000);
account.Deposit = 500;
console.log(account.Balance); // 1500
```

In this example, the `BankAccount` class has three properties: `id`, `name`, and `_balance`. The `id` property is marked as `public` and `readonly`, the `name` property is marked as `public`, and the `_balance` property is marked as `protected`.  
 The `Deposit` property is marked as `protected`, and the `Balance` property is marked as `public`. This means that the `Deposit` property can only be set from within the class, and the `Balance` property can be accessed from anywhere.  
 The `account` object is created using the `BankAccount` class, with an `id` of 1234, a `name` of "John Doe", and an initial balance of 1000. The `Deposit` property is set to 500 using the `Deposit` setter method. The `Balance` property is accessed using the `Balance` getter method, which returns the value of the `_balance` property.  
 The `Deposit` property is set to 500 using the `Deposit` setter method, which adds 500 to the `_balance` property. The `Balance` property is accessed using the `Balance` getter method, which returns the updated value of the `_balance` property.

---

### Module-3.7:Statics in Object-Oriented Programming:

Statics are a way to define properties and methods that belong to a class rather than an instance of the class. They are useful when you want to share data and methods across multiple instances of a class. In TypeScript, you can define static properties and methods using the `static` keyword. Here's an example:

```typescript
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
```

In this example, the `Counter` class has a static property `count` and two static methods `increment` and `decrement`. The `count` property is initialized to 0. The `increment` method increments the `count` property by 1. The `decrement` method decrements the `count` property by 1. The `increment` method is called twice, and the `decrement` method is called once. The output is `1`, `2`, and `1`.

Explain the difference between static and instance methods:

- 1.Static methods are called on the class itself, while instance methods are called on an instance of the class.
- 2.Static methods can access static properties and methods, while instance methods can only access instance properties and methods.
- 3.Static methods are often used to perform calculations or provide utility functions that don't depend on the state of an instance. Instance methods are often used to provide behavior that depends on the state of an instance.
- 4.Static methods are often used to define constants or provide utility functions that don't depend on the state of an instance.

---

### Module-3.8:Polymorphism in Object-Oriented Programming:

Polymorphism is the ability of an object to take on many forms. In object-oriented programming, polymorphism is achieved through inheritance and method overriding. Inheritance allows a derived class to inherit the properties and methods of a base class, while method overriding allows a derived class to provide its own implementation of a method inherited from the base class. This allows for code reuse and flexibility in object-oriented programming. Polymorphism is a powerful concept that enables code to be written in a more generic and reusable way, making it easier to maintain and extend. It is an important concept in object-oriented programming and is used extensively in various programming languages and frameworks. Understanding polymorphism is crucial for object-oriented programming, as it allows for code to be written in a more flexible and modular way. By understanding polymorphism, you can write more efficient and maintainable code, and leverage the power of object-oriented programming to solve complex problems. Here's an example:

```typescript
// Polymorphism in Object-Oriented Programming

class Person {
  getSleep() {
    console.log(`The person is sleeping for 8 hours.`);
  }
}
class Student extends Person {
  getSleep() {
    console.log(`The student is sleeping for 7 hours.`);
  }
}
class Developer extends Person {
  getSleep() {
    console.log(`The developer is sleeping for 6 hours.`);
  }
}
const getSleepingHours = (person: Person) => {
  person.getSleep();
};
const person = new Person();
const student = new Student();
const developer = new Developer();
getSleepingHours(person);
getSleepingHours(student);
getSleepingHours(developer);
//another example
class Shape {
  getArea(): number {
    return 0;
  }
}
class Circle extends Shape {
  radius: number;
  constructor(radius: number) {
    super();
    this.radius = radius;
  }
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}
class Rectangle extends Shape {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
function getArea(shape: Shape) {
  return shape.getArea();
}
const circle = new Circle(5);
const rectangle = new Rectangle(4, 5);
console.log(getArea(circle));
console.log(getArea(rectangle));
```

In this example, we have a `Person` class with a `getSleep` method that prints a message indicating the person is sleeping. We then define two subclasses of `Person` called `Student` and `Developer`, which override the `getSleep` method to print different messages. We also define a `getSleepingHours` function that takes a `Person` as a parameter and calls the `getSleep` method on that parameter. We then call the `getSleepingHours` function with an instance of each subclass of `Person`.  
Another example is provided, where a `Shape` class is defined with a `getArea` method that returns 0. Two subclasses of `Shape` are defined: `Circle` and `Rectangle`. Each subclass overrides the `getArea` method to calculate the area of a circle or rectangle, respectively. We then define a `getArea` function that takes a `Shape` as a parameter and calls the `getArea` method on that parameter. We then call the `getArea` function with an instance of each subclass of `Shape`.

----

### Module-3.9:Abstraction in Object-Oriented Programming:
Abstraction is the process of hiding the complexity of a system by breaking it down into smaller, more manageable parts. Abstraction allows us to focus on the essential features of a system and ignore the irrelevant details. In the example above, we have an interface Vehicle that defines the basic functionality of a vehicle. The interface defines three methods: startEngine, stopEngine, and move.
also we have a class Car that implements the Vehicle interface. The Car class provides an implementation for each of the methods defined in the Vehicle interface. The Car class also has a test method that is not part of the Vehicle interface. This method is not part of the interface because it is not essential for the functionality of the Car class. By defining the test method outside of the Vehicle interface, we can ensure that it is not accidentally used by other classes that implement the Vehicle interface.
Here's an example of how to use abstraction:
```typescript
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
```
In this example, we have an interface Vehicle that defines the basic functionality of a vehicle. The interface defines three methods: startEngine, stopEngine, and move. We then create a class Car that implements the Vehicle interface. The Car class provides an implementation for each of the methods defined in the Vehicle interface. The Car class also has a test method that is not part of the Vehicle interface. This method is not part of the interface because it is not essential for the functionality of the Car class. By defining the test method outside of the Vehicle interface, we can ensure that it is not accidentally used by other classes that implement the Vehicle interface.
By using abstraction, we can create a more modular and maintainable codebase. We can break down complex systems into smaller, more manageable parts, and define clear boundaries between these parts. This allows us to focus on the essential features of a system and ignore the irrelevant details.

----

### Module-3.10:Encapsulation in Object-Oriented Programming:

Encapsulation is the process of hiding the complexity of a system by breaking it down into smaller, more manageable parts. Encapsulation allows us to focus on the essential features of a system and ignore the irrelevant details. In the example above, we have an interface Vehicle that defines the basic functionality of a vehicle. The interface defines three methods: startEngine, stopEngine, and move. We then create a class Car that implements the Vehicle interface. The Car class provides an implementation for each of the methods defined in the Vehicle interface. The Car class also has a test method that is not part of the Vehicle interface. This method is not part of the interface because it is not essential for the functionality of the Car class. By defining the test method outside of the Vehicle interface, we can ensure that it is not accidentally used by other classes that implement the Vehicle interface.
Here's an example of how to use encapsulation:
```typescript
class BankAccount {
  public readonly id: number;
  public name: string;
  protected _balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }
  addDeposit(amount: number) {
    this._balance += amount;
  }
  getBalance() {
    return this._balance;
  }
}
const account = new BankAccount(1234, "John Doe", 1000);
console.log(account.getBalance()); // 1000
account.addDeposit(500);
console.log(account.getBalance()); // 1500
```
In this example, we have a class BankAccount that has three properties: id, name, and _balance. The id property is marked as public and readonly, the name property is marked as public, and the _balance property is marked as protected. The addDeposit method is marked as protected, and the getBalance method is marked as public. This means that the addDeposit method can only be called from within the class, and the getBalance method can be called from anywhere. We then create an instance of the BankAccount class with an id of 1234, a name of "John Doe", and an initial balance of 1000. The getBalance method is called on the account object, which returns the value of the _balance property. The addDeposit method is called on the account object, which adds 500 to the _balance property. The getBalance method is called on the account object again, which returns the updated value of the _balance property.
By using encapsulation, we can hide the complexity of a system by breaking it down into smaller, more manageable parts. We can focus on the essential features of a system and ignore the irrelevant details. This allows us to create a more modular and maintainable codebase.

----
