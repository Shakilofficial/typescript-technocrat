/* 
Objective: Use optional chaining with nested objects.
Instructions:                                                                                                   - Write a function `getEmployeeCity(employee)` that safely retrieves the city of an employee from a nested object using optional chaining.

*/

interface Employee {
  name: string;
  address: {
    city: string;
  };
}

function getEmployeeCity(employee: Employee): string {
  return employee?.address?.city;
}

console.log(getEmployeeCity({ name: "John", address: { city: "New York" } })); // New York
// console.log(getEmployeeCity({ name: "John" })); // undefined

/* 
Explain the Working flow of the Code

1. The interface Employee is defined.
2. The function getEmployeeCity() is defined.
3. The function getEmployeeCity() returns the city of an employee from a nested object using optional chaining.
4. The function getEmployeeCity() is called with the argument { name: "John", address: { city: "New York" } }.
5. The function getEmployeeCity() is called with the argument { name: "John" }.    
6. The function getEmployeeCity() logs the message to the console.      

*/