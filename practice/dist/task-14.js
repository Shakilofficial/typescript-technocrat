/*
Objective: Simulate an asynchronous operation with TypeScript.
Instructions:
- Write an asynchronous function that:
  - Simulates fetching user data (containing `name` and `age`).
  - Returns the data after a short delay.

*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({ name: "John", age: 25 });
            }, 1000);
        });
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
