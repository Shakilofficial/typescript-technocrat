// basic data types

const age: number = 25; //number
const name: string = "Shakil"; //string
const isStudent: boolean = true; // boolean

// Array

const numbers: number[] = [1, 2, 3, 4, 5];
const info: [string, string, number, number, boolean, null, undefined] = [
  "Mr Jhankar",
  "Shfayet",
  30,
  45,
  true,
  null,
  undefined,
]; //tuple

// Object
const person: {
  name: string;
  age: number | string;
  isActive: boolean;
  designation: string;
  company: string;
} = {
  name: "Md Shakil Hossain",
  age: "30",
  isActive: true,
  designation: "Next Level Developer",
  company: "Programming Hero",
};

type PersonType = {
  readonly name: string;
  age: number | string;
  isActive: boolean;
  designation: string;
  company: string;
};

const developer: PersonType = {
  name: "Md Shakil Hossain",
  age: 25,
  isActive: true,
  designation: "Next Level Developer",
  company: "Programming Hero",
};

// developer.name="Mr Dot" // cant rewrite on the read only file

console.log(developer);
