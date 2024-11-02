/*
Objective: Handle different types with the `unknown` type.
Instructions:
- Write a function `processData(data: unknown)` that:
  - Checks if `data` is a string and returns the uppercase version.
  - If `data` is a number, returns the square of it.
*/
function processData(data) {
    if (typeof data === "string") {
        return data.toUpperCase();
    }
    else {
        return data * data;
    }
}
const str = processData("Next Level Web Dev");
const num = processData(25);
console.log(str); // NEXT LEVEL WEB DEV
console.log(num); // 2500
/*
Explain the Working flow of the Code

1. The function processData() is defined.
2. The function processData() accepts a parameter of type unknown.
3. The function processData() checks if data is a string and returns the uppercase version.
4. The function processData() checks if data is a number and returns the square of it.
5. The function processData() is called with the argument "Next Level Web Dev".
6. The function processData() is called with the argument 25.
7. The function processData() logs the message to the console.

*/
