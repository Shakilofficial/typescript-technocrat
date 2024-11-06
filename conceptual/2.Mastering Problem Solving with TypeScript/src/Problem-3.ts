/* 
Problem 3:Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
*/

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

/* 
    Explanation:
    - The function takes an array of numbers as input and creates an empty array called `result`.
    - It then iterates through the array using a for loop.
    - For each element in the array, it checks if the element is even using the modulo operator (%).
    - If the element is even, it pushes the element to the `result` array.
    - Finally, the function returns the `result` array, which contains only the even numbers from the original array.

    This approach is efficient and leverages TypeScript's type safety to ensure that the input array is an array of numbers.
*/

