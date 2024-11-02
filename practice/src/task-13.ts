/* 
Objective: Use generics to handle different types.
Instructions:
- Create a generic function that:
  - Accepts an array of any type.    
  - Returns a new array with duplicate values removed.

*/

function removeDuplicates<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

const arr1 = [1, 2, 3, 3, 4, 5, 6, 6, 6, 7, 8, 9, 10];
const arr2 = ["Next Level Web Dev", "Next Level Web Dev", "Next Level Web Dev"];

console.log(removeDuplicates(arr1)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeDuplicates(arr2)); // ["Next Level Web Dev"]

/* 
Explain the Working flow of the Code

1. The function removeDuplicates() is defined.
2. The function removeDuplicates() accepts a parameter of type T[].
3. The function removeDuplicates() returns a new array with duplicate values removed.
4. The function removeDuplicates() is called with the argument arr1.
5. The function removeDuplicates() is called with the argument arr2.    
6. The function removeDuplicates() logs the message to the console.     
*/
