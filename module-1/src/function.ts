/**
 * The code defines functions for adding two numbers, an object method for adding balance, and a
 * mapping operation on an array of marks.
 * @param {number} num1 - `num1` is a parameter of type `number` representing the first number to be
 * added in the `add` function.
 * @param {number} num2 - num2 is a parameter of type number in the add function, representing the
 * second number to be added.
 */
//function

function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 4);

const addArrow = (num1: number, num2: number): number => num1 + num2;

const proUser = {
  name: "Shakil",
  balance: 0,
  addBalance(balance: number): string {
    return `My New balance is:${this.balance + balance}`;
  },
};

const marks: number[] = [100, 76, 80, 43]
const newMarks: number[] = marks.map((mark: number): number => mark / 2);
