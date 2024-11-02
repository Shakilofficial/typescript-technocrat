/*
Objective: Write a function that behaves differently based on the input type.
Instructions:
- Create a function that accepts a parameter of type `string | number`.
- The function should:
  - Return the length if the input is a string.
  - Return the square if the input is a number.

*/
function getLength(input) {
    if (typeof input === "string") {
        return input.length;
    }
    else {
        return input * input;
    }
}
const strLength = getLength("Next Level Web Dev");
const numSquare = getLength(25);
console.log(strLength); // 18 (including spaces)
console.log(numSquare); // 625
/*
Explain the Working flow of the Code

1. The function getLength() is defined.
2. The function getLength() accepts a parameter of type string | number.
3. The function getLength() returns the length if the input is a string.
4. The function getLength() returns the square if the input is a number.
5. The function getLength() is called with the argument "Next Level Web Dev".
6. The function getLength() is called with the argument 25.
7. The function getLength() logs the message to the console.

*/
