/*
Objective: Write a function that reverses a string.
Instructions:
- Write a function `reverseString` that:
  - Takes a single string argument.
  - Returns the string in reverse order.
  - **Example**:
    - Input: `"hello"`
    - Output: `"olleh"`

*/
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // olleh
console.log(reverseString("Next Level Web Dev")); // veD beW leveL txeN
/*
Explain the Working flow of the Code
1. The function reverseString() is defined.
2. The function reverseString() takes a single string argument.
3. The function reverseString() returns the string in reverse order.
4. The function reverseString() is called with the argument "hello".
5. The function reverseString() is called with the argument "Next Level Web Dev".
6. The function reverseString() logs the message to the console.
*/
