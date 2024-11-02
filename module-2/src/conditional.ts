{
  // Conditional Type in TypeScript

  type a1 = number;
  type b1 = string;

  type x = b1 extends null ? true : false; //conditional type

  type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

  type Person = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Person ? true : false;

  type hasBike = CheckVehicle<"bike">;
}
