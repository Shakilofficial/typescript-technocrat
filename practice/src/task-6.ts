/* 
Objective: Write a function that uses the rest operator for variable-length arguments.
Instructions:
- Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.    

*/

function sum(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr);
}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55

/* 
Explain the Working flow of the Code

1. The function sum() is defined.
2. The function sum() takes multiple numeric arguments (using the rest operator).
3. The function sum() returns the sum of all arguments.
4. The function sum() is called with the arguments 1, 2, 3, 4, 5.
5. The function sum() is called with the arguments 1, 2, 3, 4, 5, 6, 7, 8, 9, 10.
6. The function sum() logs the message to the console.
 */