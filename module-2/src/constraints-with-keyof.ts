{
  // Constraint with keyof in TypeScript

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship";

  //using keyof operator
  type Owner2 = keyof Vehicle;
//   const person1: Owner2 = "";

  function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
  }

  const user = {
    name: "John Doe",
    age: 20,
    address: "Dhaka",
  };

  user["age"];

  const car = {
    brand: "Toyota",
    model: "Corolla",
    releaseDate: 2020,
  };
  getPropertyValue(car, "brand");
}
