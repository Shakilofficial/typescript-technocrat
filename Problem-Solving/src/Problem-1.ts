/* 
Problem 1: Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
*/

function repeatString(str: string, num: number): string {
  let result = "";
  for (let i = 0; i < num; i++) {
    result += str;
  }
  return result;
}
console.log(repeatString("Hello!", 3));

//use repeat method

function repeatInputString(str: string, num: number): string {
  return str.repeat(num);
}
console.log(repeatInputString("Hello!", 3));

/* 

### Explanation:
- The `repeat` method, when called on a string, returns a new string that consists of the original string repeated `times` times.
- The `input` parameter is the string to repeat, and `times` is the number of repetitions.
- If `times` is 0, it will return an empty string. 

This approach is efficient and leverages TypeScript's type safety to ensure `input` is a `string` and `times` is a `number`.
*/
