/* This TypeScript code snippet demonstrates the use of union types and intersection types in defining
types and creating objects. */
{
  //union type
  type FrontendDeveloper = "John" | "Paul";
  type BackendDeveloper = "Mr. John Smith" | "Mr. Paul Smith";
  const newDeveloper: FrontendDeveloper = "John";
  const oldDeveloper: BackendDeveloper = "Mr. John Smith";

  console.log(newDeveloper);
  console.log(oldDeveloper);

  type User = {
    name: string;
    email: string;
    age: number;
    gender: "male" | "female";
    bloodType: "A+" | "A-" | "B+" | "B-" | "O+" | "O-";
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
    };
  };

  const user: User = {
    name: "John",
    email: "john@gmail.com",
    age: 25,
    gender: "male",
    bloodType: "A+",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };

  //intersection type
  type JrDeveloper = {
    designation1: "Frontend Developer";
    skills: string[];
  };

  type SrDeveloper = {
    designation2: "Backend Developer";
    skills: string[];
  };

  type ProDeveloper = JrDeveloper & SrDeveloper;

  const developer: ProDeveloper = {
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "RESTful API",
    ],
  };
  console.log(developer);
}
