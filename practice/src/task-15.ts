/* 
Objective: Create custom type guards for more accurate type checking.
Instructions:
- Write a function `isString(value: unknown): value is string` that checks if a value is a string.
- Use this in another function `printUpperCase(value: unknown): void` that prints the value in uppercase if it’s a string.

*/

function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printUpperCase(value: unknown): void {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}

printUpperCase("Next Level Web Dev"); // NEXT LEVEL WEB DEV
printUpperCase(25); // N.B: This will not print anything

/* 
Explain the Working flow of the Code

1. The function isString() is defined.
2. The function isString() accepts a parameter of type unknown.
3. The function isString() returns true if the value is a string.
4. The function printUpperCase() is defined.
5. The function printUpperCase() accepts a parameter of type unknown.
6. The function printUpperCase() checks if the value is a string.
7. The function printUpperCase() logs the message to the console.
8. The function printUpperCase() is called with the argument "Next Level Web Dev".
9. The function printUpperCase() is called with the argument 25.        
*/
