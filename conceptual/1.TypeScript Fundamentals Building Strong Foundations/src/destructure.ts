// Operators
//spread operator
const rolls: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const newRolls: number[] = [...rolls, 9, 10];

console.log(rolls);
console.log(newRolls);

type PersonType = {
  name: string;
  age: number | string;
  isActive: boolean;
  designation: string;
  company: string;
  salary?: number;
};

const developer: PersonType = {
  name: "Md Shakil Hossain",
  age: 25,
  isActive: true,
  designation: "Next Level Developer",
  company: "Programming Hero",
};

console.log(developer);

const newDeveloperInfo: PersonType = {
  ...developer,
  salary: 10000,
};

console.log(newDeveloperInfo);

//rest operator

const [first, second, ...restElement] = [2, 3, 4, 5, 6, 7, 8];
console.log(`First: ${first}, Second: ${second}`);
console.log("Rest:", restElement);
