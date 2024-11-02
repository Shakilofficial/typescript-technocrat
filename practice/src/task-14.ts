/* 
Objective: Simulate an asynchronous operation with TypeScript.
Instructions:
- Write an asynchronous function that:
  - Simulates fetching user data (containing `name` and `age`).
  - Returns the data after a short delay. 

*/

async function fetchUserData(): Promise<{ name: string; age: number }> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John", age: 25 });
    }, 1000);
  });
}

fetchUserData().then((user) => {
  console.log(user);
}); // { name: "John", age: 25 }

/* 
Explain the Working flow of the Code

1. The function fetchUserData() is defined.
2. The function fetchUserData() returns a Promise that resolves to an object with the properties name and age.
3. The function fetchUserData() is called.          
4. The function fetchUserData() logs the message to the console.
*/
