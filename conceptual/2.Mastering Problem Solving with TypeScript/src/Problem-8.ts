/* 
Problem 8: Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.
*/

class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Your car model is:  ${this.year} ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.displayInfo();

/* 
    Explanation:
    - The Car class represents a basic car with properties for brand, model, and year.
    - It has a constructor that takes brand, model, and year as parameters and assigns them to the corresponding properties.
    - It also has a displayInfo method that logs a string to the console with the car's information.
    - The class is instantiated with a new Car object and the displayInfo method is called on it.
    
    This approach is efficient and leverages TypeScript's type safety to ensure that the properties are properly assigned and the method is called on the correct object.
*/
