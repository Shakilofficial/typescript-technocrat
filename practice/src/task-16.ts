/* 
Objective: Access object properties dynamically using `keyof`.
Instructions:
- Create a function that:
  - Takes an object and a key.
  - Returns the property value from the object based on the provided key.
  - Use `keyof` to constrain the key to valid properties of the object.

*/

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = {
  name: "John",
  age: 25,
};

console.log(getProperty(user, "name")); // John
console.log(getProperty(user, "age")); // 25

/* 
Explain the Working flow of the Code

1. The function getProperty() is defined.
2. The function getProperty() accepts a parameter of type T and a parameter of type K.
3. The function getProperty() returns the property value from the object based on the provided key.
4. The function getProperty() is called with the argument user and the argument "name".
5. The function getProperty() is called with the argument user and the argument "age".    
6. The function getProperty() logs the message to the console.  
*/
