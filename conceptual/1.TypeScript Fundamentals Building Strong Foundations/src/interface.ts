// interface

interface IPerson {
  name: string;
  age: number | string;
  isActive: boolean;
  designation: string;
  company: string;
}

interface IPerson {
  salary: number;
}

const developer: IPerson = {
  name: "Md Shakil Hossain",
  age: 25,
  isActive: true,
  designation: "Next Level Developer",
  company: "Programming Hero",
  salary: 10000,
};

console.log(developer);


