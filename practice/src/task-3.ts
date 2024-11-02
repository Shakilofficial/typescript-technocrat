/* 
Objective: Define a structured `Person` object using Type Aliases.
Instructions:
- Define a `Person` type alias with properties for `Name`, `Address`, `Hair and Eye Color`, `Income and Expense`, `Hobbies`, `Family Members`, `Job`, `Skills`, `Marital Status`, and `Friends`.    

*/

type Person = {
  name: string;
  address: {
    city: string;
    state: string;
  };
  hairColor: "black" | "brown" | "blonde" | "red" | "blue" | "green";
  eyeColor: "brown" | "blue" | "green" | "hazel";
  income: number;
  expense: number;
  hobbies: string[];
  familyMembers: string[];
  job: string;
  skills: string[];
  maritalStatus: "single" | "married" | "divorced";
  friends: string[];
};

const person: Person = {
  name: "John",
  address: {
    city: "New York",
    state: "NY",
  },
  hairColor: "brown",
  eyeColor: "brown",
  income: 10000,
  expense: 1000,
  hobbies: ["reading", "hiking", "traveling"],
  familyMembers: ["John", "Mary", "Tom"],
  job: "Software Engineer",
  skills: ["JavaScript", "React", "Node.js"],
  maritalStatus: "married",
  friends: ["Angel", "Shakil", "John"],
};

console.log(person);

/* 
Explain the Working flow of the Code
1. The type Person is defined.
2. The type Person is used to create a variable called person.
3. The variable person is assigned an object with the properties name, address, hairColor, eyeColor, income, expense, hobbies, familyMembers, job, skills, maritalStatus, and friends.    
4. The variable person is logged to the console.    

*/
