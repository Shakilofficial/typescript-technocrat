# Module-1: Basic Types of TypeScript

---

## Key Concepts and Code Snippets

### Data Types:

Demonstrates the use of basic data types such as string, number, boolean, undefined, and null.

```typescript
let firstName: string = "John";
let rollNo: number = 123456;
let isStudent: boolean = true;
let x: undefined = undefined;
let y: null = null;
```

### Functions:

Example of a function that adds two numbers.

```typescript
function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
```

### Arrays:

Demonstrates the use of arrays to store multiple values of the same data type.

```typescript
let numbers: number[] = [1, 2, 3, 4, 5];
```

### Tuples:

Demonstrates the use of tuples to store multiple values of different data types.

```typescript
let namesAndAges: [string, number][] = [
  ["John", 25],
  ["Jane", 30],
];
```

### Interfaces:

Demonstrates the use of interfaces to define the structure of an object.

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 25 };
```

### Classes:

Demonstrates the use of classes to define the structure and behavior of an object.

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

const john = new Person("John", 25);
john.greet(); // Output: Hello, my name is John and I am 25 years old.
```

### Type Aliases:

Demonstrates the use of type aliases to create custom data types.

```typescript
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
```

### Type Declarations:

Demonstrates the use of type declarations to declare the structure of an object without defining its implementation.

```typescript
interface Person {
  name: string;
  age: number;
}

let person: Person = { name: "John", age: 25 };
```

### Reference Types:

- Defines an object with specific properties and types, including optional properties.

```typescript
const user: {
  firstName: string;
  lastName?: string;
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
```

### Array and Object Destructuring:

- Example of array destructuring to extract elements.

```typescript
const myMates = ["John", "Paul", "George", "Ringo"];
const [, , , bestFriend] = myMates;
console.log(bestFriend);
```

- Example of object destructuring to extract properties.

```typescript
const person = {
  name: "John",
  age: 25,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};
const {
  name,
  age,
  address: { street, city, state, zip },
} = person;
console.log(name, age, street, city, state, zip);
```

### Operators:

- Usage of spread operators, rest operators, and destructuring.

```typescript
const brothers: string[] = ["John", "Paul", "George", "Ringo"];
const cousins: string[] = ["Doe", "Smith", "Johnson", "Jones"];
brothers.push(...cousins);
console.log(brothers);
```

### Control Flow:

- Example of using the ternary operator and conditional statements.

```typescript
const age: number = 11;
const isAdult = age > 18 ? "You are an adult" : "You are a child";
console.log(isAdult);
```

### Error Handling:

- Demonstrates the use of the never type for functions that throw errors.

```typescript
const throwError = (msg: string): never => {
  throw new Error(msg);
};
```
