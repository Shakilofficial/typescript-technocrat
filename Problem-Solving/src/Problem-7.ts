/* 
Problem 7: Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
*/

function logString(input: unknown) {
  if (typeof input === "string") {
    console.log(input);
  } else {
    console.error("Input is not a string.");
  }
}

logString("Hello, TypeScript!");
logString(42);

/* 
    Explanation:
    - The function takes an unknown input and uses a type guard to check if it is a string.
    - If the input is a string, it logs the string to the console.
    - If the input is not a string, it logs an error message to the console.
    
    This approach is efficient and leverages TypeScript's type safety to ensure that the input is a string.
*/
