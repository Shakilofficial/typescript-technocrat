# Solutions to the Problem Solving with TypeScript Assignment

This assignment comprises various problems that demonstrate fundamental TypeScript concepts, including data typing, interfaces for objects, class usage with inheritance, type checking, and manipulation of data structures. The solutions aim to showcase efficient and clear problem-solving techniques using TypeScript, adhering to best coding practices.

### Problem-1: 
Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.

```tsx
//use repeat method
function repeatString(str: string, num: number): string {
    return str.repeat(num);
}
console.log(repeatString("Hello!", 3));

// Sample Input:
repeatString("Hello!", 3);

// Sample Output:
("Hello!Hello!Hello!");
```

#### Explanation:

- The `repeat` method, when called on a string, returns a new string that consists of the original string repeated `times` times.
- The `input` parameter is the string to repeat, and `times` is the number of repetitions.
- If `times` is 0, it will return an empty string.

This approach is efficient and leverages TypeScript's type safety to ensure `input` is a `string` and `times` is a `number`.    

----

### Problem-2: 
Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.

```tsx
//solve this problem using Math.max
function findLargestNum(arr: number[]): number {
    return Math.max(...arr);
}

console.log(findLargestNum([10, 5, 8, 25, 3]));

// Sample Input:
findLargestNumber([10, 5, 8, 20, 3]);

// Sample Output:
20;
```

#### Explanation:

- Math.max is used here with the spread operator (...) to spread the array elements as individual arguments, allowing Math.max to find the maximum value.
- The function takes an array of numbers as input and returns a single number, which is the largest number in the array.

This approach is concise and leverages TypeScript's type safety, ensuring that the numbers parameter is an array of numbers.

----    

### Problem-3: 
Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.

```tsx
//solve this problem using for loop
function filterEvenNumbers(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// Sample Input:
filterEvenNumbers([1, 2, 3, 4, 5, 6])[
  // Sample Output:
  (2, 4, 6)
];
```

#### Explanation:

- The function takes an array of numbers as input and creates an empty array called `result`.
- It then iterates through the array using a for loop.
- For each element in the array, it checks if the element is even using the modulo operator (%).
- If the element is even, it pushes the element to the `result` array.
- Finally, the function returns the `result` array, which contains only the even numbers from the original array.

This approach is efficient and leverages TypeScript's type safety to ensure that the input array is an array of numbers.

----    


### Problem-4: 
Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.

```tsx
//solve this problem using for loop
function reverseArray<T>(arr: T[]): T[] {
    let reversedArr: T[] = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

console.log(reverseArray(["apple", "banana", "cherry"]));
console.log(reverseArray([10, 20, 30]));

// Sample Input 1:
reverseArray(["apple", "banana", "cherry"])[
  // Sample Output 1:
  ("cherry", "banana", "apple")
];

// Sample Input 2:
reverseArray([10, 20, 30])[
  // Sample Output 2:
  (30, 20, 10)
];
```

#### Explanation:

- The function takes an array of any type `T` as input and returns a new array `reversedArr` with its elements reversed.
- The `T` type parameter is used to define the type of the elements in the input array.
- The function uses a for loop to iterate through the elements of the input array in reverse order and push each element to the `reversedArr` array.
- Finally, the function returns the `reversedArr` array.

This approach is flexible and allows the function to work with any type of array, not just arrays of strings or numbers.

----

### Problem-5: 
You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called `calculateAverageGrade` that takes this student object as input and calculates the average grade.

> Hints: Use a `reduce()` method to sum the grades. average = total grades/ total length

```tsx
/interface Student {
  name: string;
  age: number;
  grades: number[];
}

function calculateAverageGrade(student: Student): number {
  let totalGrades = student.grades.reduce((acc, curr) => acc + curr, 0);
  let totalLength = student.grades.length;
  return totalGrades / totalLength;
}

const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};

console.log(calculateAverageGrade(student1));

// Sample Input:
const student1: Student = {
    name: "Bob",
    age: 17,
    grades: [75, 80, 82, 88, 90],
};

const averageGradeForBob = calculateAverageGrade(student1);

// Sample Output:
83;
```

#### Explanation:

- The function takes a Student object as input and calculates the average grade.
- It uses the reduce method to sum the grades and the length of the grades array.
- The reduce method takes a callback function that takes two parameters: the accumulator and the current value. The accumulator is initialized to 0 and is updated with the sum of the previous value and the current value.
- The function returns the average grade, which is calculated by dividing the total grades by the total length of the grades array.

This approach is efficient and leverages TypeScript's type safety to ensure that the input object is a Student object with the correct properties.

----

### Problem-6: 
You are given an object representing a book with properties title (string), author (string), and publishedYear (number). Use type alias for declaring the object.
Write a TypeScript function called isRecentBook that takes this book object as input and determines if the book was published in the last 5 years.

Hints: Use getFullYear() method to extract the year to check the given year with current year.

```tsx
type Book = {
  title: string;
  author: string;
  publishedYear: number;
};

function isRecentBook(book: Book): boolean {
  let currentYear = new Date().getFullYear();
  let publishedYear = book.publishedYear;
  return publishedYear >= currentYear - 5;
}

const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};

console.log(isRecentBook(book1));

// Sample Input :
const book1: Book = {
  title: "Sample Book",
  author: "John Doe",
  publishedYear: 2022,
};
isRecentBook(book1);

// Sample Output:
true;
```

#### Explanation:

- The function takes a Book object as input and checks if the book was published in the last 5 years.
- It uses the getFullYear() method to extract the current year and the published year from the Book object.
- The getFullYear() method returns the year as a number, so it's necessary to convert it to a number before comparing it with the current year.
- The function returns true if the published year is greater than or equal to the current year minus 5, indicating that the book was published within the last 5 years.

This approach is efficient and leverages TypeScript's type safety to ensure that the input object is a Book object with the correct properties.

----

### Problem-7: 
Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.

```tsx
function logString(input: unknown) {
  if (typeof input === "string") {
    console.log(input);
  } else {
    console.error("Input is not a string.");
  }
}

logString("Hello, TypeScript!");
logString(42);

// Sample Input 1:
logString("Hello, TypeScript!");

// Sample Output 1:
"Hello, TypeScript!"

// Sample Input 2:
logString(42)

// Output: Error:
Input is not a string.
```

#### Explanation:

- The function takes an unknown input and uses a type guard to check if it is a string.
- If the input is a string, it logs the string to the console.
- If the input is not a string, it logs an error message to the console.

This approach is efficient and leverages TypeScript's type safety to ensure that the input is a string.

----

### Problem-8: 
Design a TypeScript class Car that represents a basic car with properties for brand, model, and year. Implement a method displayInfo that displays information about the car.

```tsx
class Car {
  brand: string;
  model: string;
  year: number;

  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(`Your car model is:  ${this.year} ${this.brand} ${this.model}`);
  }
}

const car1 = new Car("Toyota", "Corolla", 2020);
car1.displayInfo();

// Sample Input:
new Car("Toyota", "Corolla", 2020);

// Sample Output:
("Your car model is:  2020 Toyota Corolla");
```

#### Explanation:

- The Car class represents a basic car with properties for brand, model, and year.
- It has a constructor that takes brand, model, and year as parameters and assigns them to the corresponding properties.
- It also has a displayInfo method that logs a string to the console with the car's information.
- The class is instantiated with a new Car object and the displayInfo method is called on it.

This approach is efficient and leverages TypeScript's type safety to ensure that the properties are properly assigned and the method is called on the correct object.

----

## Blog Writing:

Write an impactful blog posts covering the following topics:

1. The significance of union and intersection types in Typescript.
2. How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.
3. Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

### Blog-1: The significance of union and intersection types in Typescript.

In TypeScript, union types and intersection types are used to define the possible types of a variable. Union types allow a variable to have multiple types, while intersection types allow a variable to have multiple types that are all shared by the variable.

For example, consider a variable `x` that can have the types `string` or `number`. We can define this variable as follows:

```tsx
let x: string | number;
```

This means that `x` can be either a string or a number.

Intersection types are similar to union types, but they allow a variable to have multiple types that are all shared by the variable. For example, consider a variable `y` that can have the types `string` and `number`. We can define this variable as follows:

```tsx
let y: string & number;
```

This means that `y` can be either a string or a number, but it cannot be both.

Union and intersection types are useful in TypeScript because they allow us to define the possible types of a variable in a more flexible and expressive way. They can be used to handle different types of data in a more precise and controlled manner.

### Blog-2: How to handle asynchronous operations using `async/await` over `callback/promise` TypeScript.

In TypeScript, there are two ways to handle asynchronous operations: using callbacks or promises. Both methods have their advantages and disadvantages, and the choice between them depends on the specific requirements of the project.

The `async/await` method is a newer and more modern way of handling asynchronous operations in TypeScript. It allows us to write asynchronous code that looks and behaves like synchronous code, making it easier to understand and maintain. The `async/await` method is built on top of promises, which are a more fundamental concept in JavaScript.

Promises are objects that represent the eventual completion or failure of an asynchronous operation and its resulting value. They provide a more structured and readable way of handling asynchronous code compared to using callbacks.

The `async/await` method is particularly useful when working with asynchronous code that involves multiple asynchronous operations, such as making multiple API requests or handling multiple file operations. It allows us to write code that is more readable and maintainable, as it avoids the need to use nested callbacks or complex error handling logic.

### Blog-3: Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.

Type guards are a powerful feature in TypeScript that allow us to narrow down the type of a variable based on a condition. They are particularly useful when working with union types and intersection types, as they allow us to define the possible types of a variable in a more precise and controlled manner.

There are several types of type guards in TypeScript, including:

1. Type guards for primitive types: These type guards allow us to check if a variable is of a specific primitive type, such as `string`, `number`, or `boolean`.

2. Type guards for objects: These type guards allow us to check if a variable is an object of a specific type, such as `Array`, `Date`, or `RegExp`.

3. Type guards for functions: These type guards allow us to check if a variable is a function of a specific type, such as `Function`, `AsyncFunction`, or `GeneratorFunction`.

4. Type guards for classes: These type guards allow us to check if a variable is an instance of a specific class, such as `Date`, `Array`, or `RegExp`.

5. Type guards for union types: These type guards allow us to check if a variable is of a specific union type, such as `string | number | boolean`.

6. Type guards for intersection types: These type guards allow us to check if a variable is of a specific intersection type, such as `string & number`.

Type guards are particularly useful when working with union types and intersection types, as they allow us to define the possible types of a variable in a more precise and controlled manner. They can be used to handle different types of data in a more precise and controlled manner, making the code more readable and maintainable.  