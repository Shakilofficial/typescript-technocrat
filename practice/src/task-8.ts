/* 
Objective: Practice using intersection types.
Instructions:
- Create a type `AdminUser` that is an intersection of:
  - `User` with properties `name` and `email`
  - `Admin` with property `adminLevel`
- Write a function `describeAdmin(user: AdminUser): string` that returns a description of the admin user.

*/

interface User {
  name: string;
  email: string;
}

interface Admin {
  adminLevel: number;
}

type AdminUser = User & Admin;

function describeAdmin(user: AdminUser): string {
  return `Hello ${user.name}, your admin level is ${user.adminLevel}`;
}

describeAdmin({
  name: "John",
  email: "john@gmail.com",
  adminLevel: 10,
}); // Hello John, your admin level is 10

/* 
Explain the Working flow of the Code

1. The type User is defined.
2. The type Admin is defined.
3. The type AdminUser is defined.
4. The type AdminUser is used to create a variable called describeAdmin.
5. The function describeAdmin() returns a description of the admin user.
6. The function describeAdmin() is called with the argument { name: "John", email: "john@gmail.com", adminLevel: 10 }.
7. The function describeAdmin() logs the message to the console.                

*/
