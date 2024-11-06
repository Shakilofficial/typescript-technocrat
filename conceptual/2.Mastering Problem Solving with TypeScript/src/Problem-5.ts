/* 
Problem 5:You are given an object called “student” representing a student's information with the following properties: name (string), age (number), and grades (array of numbers). Make an interface using given properties. Write a TypeScript function called calculateAverageGrade that takes this student object as input and calculates the average grade.

Hints: Use a reduce() method to sum the grades. average = total grades/ total length
*/

interface Student {
  name: string;
  age: number;
  grades: number[];
}

function calculateAverageGrade(student: Student): number {
  let totalGrades = student.grades.reduce((acc, curr) => acc + curr, 0);
  let totalLength = student.grades.length;
  return totalGrades / totalLength;
}

const student1: Student = {
  name: "Bob",
  age: 17,
  grades: [75, 80, 82, 88, 90],
};

console.log(calculateAverageGrade(student1));

/* 
    Explanation:
    - The function takes a Student object as input and calculates the average grade.
    - It uses the reduce() method to sum the grades and the length of the grades array.
    - The reduce() method takes a callback function and an initial value as arguments.
    - The callback function takes two arguments: the accumulator (acc) and the current value (curr).
    - It adds the current value (curr) to the accumulator (acc) and returns the updated value.
    - The reduce() method then iterates through the grades array and calls the callback function for each element.
    - Finally, the function returns the average grade, which is calculated by dividing the total grades by the total length of the grades array.
    
    This approach is efficient and leverages TypeScript's type safety to ensure that the input object is a Student object with the correct properties.
*/
