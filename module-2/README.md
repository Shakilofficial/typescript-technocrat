# Module-2.Advanced Types of TypeScript

### Module-2.1.Type Assertion in TypeScript:

Type assertion is a way to tell the TypeScript compiler that you know more about a value than what it actually is. It allows you to tell the compiler that a value is of a certain type, even if it's not known at compile time.

```typescript
let anything: any;
anything = "Next Level Web Development";
anything = 123;
(anything as number).toExponential();
```

- Note: Use Type Assertion in Array and Function type.(Best Practice)

---

### Module-2.2.Interface in TypeScript:

Interfaces are a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
interface Developer {
  name: string;
  age: number;
}
```

- Note: Use Interface in Object type.(Best Practice)

---

### Module-2.3.Generics in TypeScript:

Generics are a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
type GenericArray<T> = Array<T>;
```

also use Generics in Tuple type.

```typescript
type GenericTuple<X, Y> = [X, Y];
```

---

### Module-2.4.Generics-Interface in TypeScript:

Generics-Interface is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
interface Developer<T, X = null> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseDate: number;
  };
  smartWatch: T;
  bike?: X;
}
```

---

### Module-2.5.Generics-Function in TypeScript:

Generics-Function is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
const createArray = (param: string): string[] => {
  return [param];
};

const createArrayWithGenerics = <T>(param: T): T[] => {
  return [param];
};
```

also use Generics-Function in Tuple type.

```typescript
const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  return [param1, param2];
};
```

---

### Module-2.6.Constraint in TypeScript:

Constraint is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
const addCourseToStudent = <
  T extends { id: number; name: string; age: number }
>(
  student: T
) => {
  const course = "Next Level Web Development";
  return {
    ...student,
    course,
  };
};
```

---

### Module-2.7.Constraint-with-keyof in TypeScript:

Constraint-with-keyof is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
type Vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "bike" | "car" | "ship";

//using keyof operator
type Owner2 = keyof Vehicle;
//   const person1: Owner2 = "";

function getPropertyValue<X, Y extends keyof X>(obj: X, key: Y) {
  return obj[key];
}

const user = {
  name: "John Doe",
  age: 20,
  address: "Dhaka",
};

user["age"];

const car = {
  brand: "Toyota",
  model: "Corolla",
  releaseDate: 2020,
};
getPropertyValue(car, "brand");
```

---

### Module-2.8.Async in TypeScript:

Async is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
//promise

type Todo = { userId: number; id: number; title: string; completed: boolean };

const getTodo = async (): Promise<Todo> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  console.log(data);
  return data;
};

getTodo();
```

```bash
{ userId: 1, id: 1, title: 'delectus aut autem', completed: false }
```

---

### Module-2.9.Conditional Type in TypeScript:

Conditional Type is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
type a1 = number;
type b1 = string;

type x = b1 extends null ? true : false; //conditional type

type y = a1 extends null ? true : b1 extends undefined ? undefined : any;

type Person = {
  bike: string;
  car: string;
  ship: string;
};

type CheckVehicle<T> = T extends keyof Person ? true : false;

type hasBike = CheckVehicle<"bike">;
```

----

### Module-2.10.Mapped in TypeScript:

Mapped is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
const arrayOfNumber: number[] = [1, 2, 3, 4, 5];
// const arrayOfString: string[] = ["a", "b", "c", "d", "e"];

const arrayOfString: string[] = arrayOfNumber.map((num) => num.toString());
console.log(arrayOfString);

type AreaNumber = {
  height: number;
  width: number;
};

type height = AreaNumber["height"]; //lookup type

// type AreaString = {
// height: string;
// width: string;
// }

type AreaString<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaString<{ height: string; width: number }> = {
  height: "10",
  width: 20,
};
console.log(area1);
```

----

### Module-2.11.Utility in TypeScript:

Utility is a way to define reusable components in TypeScript. They allow you to create functions, classes, and interfaces that can work with different types.

```typescript
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
``` 

----        


