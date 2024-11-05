// Generics

//type

type ArrayType<T> = Array<T>;

const numArray: ArrayType<number> = [12, 13, 14, 23, 43, 21];

const stringArray: ArrayType<string> = [
  "Shakil",
  "Shariar",
  "Alamin",
  "Ripon",
  "Shakib",
];

const boolArray: ArrayType<boolean> = [true, false, true, true, false, false];

// interface with Generics

interface IPerson<T, U> {
  name: string;
  age: T;
  isActive: boolean;
  designation: string;
  company: string;
  salary: number;
  id: U;
}

const developer: IPerson<number, null> = {
  name: "Md Shakil Hossain",
  age: 25,
  isActive: true,
  designation: "Next Level Developer",
  company: "Programming Hero",
  salary: 10000,
  id: null,
};

console.log(developer);

// function with Generics

const showMessage = <T, U>(message1: T, message2: U) => {
  return { message1, message2 };
};

console.log(showMessage<string, number>("Hlw, Shakil", 2024));
