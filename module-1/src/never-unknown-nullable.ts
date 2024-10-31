/* This TypeScript code snippet demonstrates the usage of different type annotations and type checking
in TypeScript: */
{
  //never type
  const throwError = (msg: string): never => {
    throw new Error(msg);
  };
  throwError("It is Custom Error 😎");

  //unknown type
  const getSpeedInMetersPerSecond = (speed: unknown) => {
    if (typeof speed === "number") {
      const speedInMetersPerSecond = speed * 3.6;
      console.log(`The speed is ${speedInMetersPerSecond} meters per second`);
    } else if (typeof speed === "string") {
      const [result, unit] = speed.split(" ");
      const speedInMetersPerSecond = parseFloat(result) * 3.6;
      console.log(`The speed is ${speedInMetersPerSecond} ${unit} per second`);
    } else {
      console.log("Invalid speed");
    }
  };
  getSpeedInMetersPerSecond(`1000 kmh^-1`);

  //nullable type
  const searchName = (value: string | null) => {
    if (value) {
      console.log("Searching for name");
    } else {
      console.log("Name not found");
    }
  };
  searchName(null);
}
