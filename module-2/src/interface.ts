{
  // interface

  type User = {
    name: string;
    age: number;
  };

  const user: User = {
    name: "John",
    age: 25,
  };

  type UserWithId = User & {
    id: number;
  };

  const user2: UserWithId = {
    name: "John",
    age: 25,
    id: 1,
  };
  console.log(user);

  interface Developer {
    name: string;
    age: number;
  }

  interface DeveloperWithId extends Developer {
    id: number;
  }

  const developer: DeveloperWithId = {
    name: "John",
    age: 25,
    id: 1,
  };

  type rollNumber = number;

  type Roll = number[];

  interface Roll2 {
    [index: number]: number;
  }
  // const rollNumber: Roll = [1, 2, 3, 4, 5];
  const rollNumber: Roll2 = [1, 2, 3, 4, 5];

  type Add = (a: number, b: number) => number;

  interface Add2 {
    (a: number, b: number): number;
  }

  // const add: Add = (a, b) => a + b;
  const add: Add2 = (a, b) => a + b;

  /* NOTE (Best Practice): for Array and Function type, we can use type assertion. For Object type, we can use interface */
}
