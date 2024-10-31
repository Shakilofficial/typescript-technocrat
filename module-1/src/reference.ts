/* This TypeScript code defines an object named `user` with specific properties and their types. Here's
a breakdown of what the code is doing: */
//reference type ----->
const user: {
  firstName: string;
  lastName?: string; //Optional type
  age: number;
  isStudent: boolean;
  company: "Programming-Hero";
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
} = {
  firstName: "John",
  age: 25,
  isStudent: true,
  company: "Programming-Hero",
  address: {
    street: "123 Main Street",
    city: "New York",
    state: "NY",
    zipCode: "10001",
  },
};

user.company = "Programming-Hero";
