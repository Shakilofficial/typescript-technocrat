/**
 * The code defines functions for adding two numbers, an object method for adding balance, and a
 * mapping operation on an array of marks.
 * @param {number} num1 - `num1` is a parameter of type `number` representing the first number to be
 * added in the `add` function.
 * @param {number} num2 - num2 is a parameter of type number in the add function, representing the
 * second number to be added.
 */
//function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
const addArrow = (num1, num2) => num1 + num2;
const proUser = {
    name: "Shakil",
    balance: 0,
    addBalance(balance) {
        return `My New balance is:${this.balance + balance}`;
    },
};
const marks = [100, 76, 80, 43];
const newMarks = marks.map((mark) => mark / 2);
