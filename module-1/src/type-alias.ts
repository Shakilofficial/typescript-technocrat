/* This TypeScript code snippet demonstrates the use of type aliases in defining custom types for
objects, variables, and functions. */
{
  //type alias

  //use type alias in object

  type User = {
    id: number;
    name: string;
    age: number;
    email?: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };

  const user1: User = {
    id: 1,
    name: "John",
    age: 25,
    email: "john@gmail.com",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };
  console.log(user1);

  /* const user: {
    id: number;
    name: string;
    age: number;
    email: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  } = {
    id: 1,
    name: "John",
    age: 25,
    email: "john@gmail.com",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  }; */

  const user2: User = {
    id: 2,
    name: "Paul",
    age: 22,
    address: {
      street: "123 Main Street",
      city: "Washington",
      state: "DC",
      zip: "20001",
    },
  };
  console.log(user1);

  type UserName = string;
  type IsAdmin = boolean;

  const userName: UserName = "John";
  const isAdmin: IsAdmin = true;

  console.log(userName);
  console.log(isAdmin);

  //use type alias in function
  type Add = (a: number, b: number) => number;
  const add: Add = (a: number, b: number) => a + b;
  console.log(add(1, 2));
}
