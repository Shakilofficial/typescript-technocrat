/* 
 Objective: Create a function with parameters and an optional literal type.
 Instructions:
 - Define a function that takes:
   - `name` (string)
   - `age` (number)
   - `role` (optional, with type `'admin' | 'user' | 'guest'`)
 - The function should log these values or perform a basic action.

*/

function greet(name: string, age: number, role?: "admin" | "user" | "guest") {
  console.log(`Hello, ${name}. You are ${age} years old and ${role}`);
}

greet("John", 25, "admin");
greet("Shakil", 25);
greet("Angel Smith", 25, "user");

/* 
Explain the Working flow of the Code

1. The function greet() is defined.
2. The function greet() is called with the arguments "John", 25, and "admin".    
3. The function greet() logs the message to the console.    

*/
