/* 
Problem 2:Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
*/

//solve this problem using Math.max

function findLargestNum(arr: number[]): number {
  return Math.max(...arr);
}

console.log(findLargestNum([10, 5, 8, 25, 3]));

/*
    Explanation:
    - Math.max is used here with the spread operator (...) to spread the array elements as individual arguments, allowing Math.max to find the maximum value.
    - The function takes an array of numbers as input and returns a single number, which is the largest number in the array.
    
    This approach is concise and leverages TypeScript's type safety, ensuring that the numbers parameter is an array of numbers.
*/

//solve this problem using for loop

function findLargestNumber(arr: number[]): number {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

console.log(findLargestNumber([10, 5, 8, 20, 3]));

/* 
    Explanation:
    - The function takes an array of numbers as input and initializes a variable `largest` to the first element of the array.
    - It then iterates through the remaining elements of the array and updates `largest` if a larger number is found.
    - Finally, the function returns `largest`, which is the largest number in the array.
    
    This approach is efficient and leverages TypeScript's type safety to ensure that the input array is an array of numbers.
*/
