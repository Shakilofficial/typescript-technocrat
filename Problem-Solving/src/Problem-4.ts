/* 
Problem 4: Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types. 
*/

function reverseArray<T>(arr: T[]): T[] {
  let reversedArr: T[] = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
}

console.log(reverseArray(["apple", "banana", "cherry"]));
console.log(reverseArray([10, 20, 30]));

/*
    Explanation:
    - The function takes an array of any type `T` as input and returns a new array `reversedArr` with its elements reversed.
    - The `T` type parameter is used to define the type of the elements in the input array.
    - The function uses a for loop to iterate through the elements of the input array in reverse order and push each element to the `reversedArr` array.
    - Finally, the function returns the `reversedArr` array.
        
    This approach is flexible and allows the function to work with any type of array, not just arrays of strings or numbers.
*/
