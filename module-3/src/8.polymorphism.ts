// Polymorphism in Object-Oriented Programming

{
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
}

/* 
Explain the Working flow of the Code

1. `Person` is defined with a `getSleep` method that prints a message indicating the person is sleeping.

2.Two subclasses of `Person` are defined: `Student` and `Developer`. Each subclass overrides the `getSleep` method to print a different message.

3.A `getSleepingHours` function is defined that takes a `Person` as a parameter and calls the `getSleep` method on that parameter. This function is then called with an instance of each subclass of `Person`.

4.The `getSleepingHours` function is called with an instance of each subclass of `Person`, and the appropriate message is printed for each subclass.

5.Another example is provided, where a `Shape` class is defined with a `getArea` method that returns 0. Two subclasses of `Shape` are defined: `Circle` and `Rectangle`. Each subclass overrides the `getArea` method to calculate the area of a circle or rectangle, respectively.

6.A `getArea` function is defined that takes a `Shape` as a parameter and calls the `getArea` method on that parameter. This function is then called with an instance of each subclass of `Shape`.

7.The `getArea` function is called with an instance of each subclass of `Shape`, and the appropriate area is calculated for each subclass.


*/
