{
  // Utility Type in TypeScript

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNumber?: number;
    address: string;
  };

  //pick
  type Name = Pick<Person, "name">;
  type Age = Pick<Person, "age">;
  type NameAge = Pick<Person, "name" | "age">;

  //omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //Partial
  type PersonPartial = Partial<Person>;

  //required
  type RequiredPerson = Required<Person>;
  type RequiredName = Required<Person>["name"];

  //Readonly
  type ReadonlyPerson = Readonly<Person>;

  const person1: ReadonlyPerson = {
    name: "John Doe",
    age: 20,
    address: "Dhaka",
    email: "johndoe@gmail.com",
    contactNumber: 1234567890,
  };

  person1.name = "Mr. John Doe"; // cannot reassign because it's readonly

  //Record
  /*     type MyObject = {
        a: string;
        b: number;
    }; */

  const emptyObj: Record<string, unknown> = {}; //empty object [important]

  type MyObject = Record<string, string>;

  const obj1: MyObject = {
    a: "a",
    b: "b",
  };
}
