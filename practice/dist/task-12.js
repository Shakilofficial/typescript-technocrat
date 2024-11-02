/*
Objective: Use the `never` type for functions that don’t return.
Instructions:
- Write a function `handleError` that:
  - Accepts a `message: string`.
  - Throws an error with the given message.
  - Use the `never` return type to indicate that this function never returns.

*/
function handleError(message) {
    throw new Error(message);
}
handleError("Something went wrong");
/*
Explain the Working flow of the Code

1. The function handleError() is defined.
2. The function handleError() accepts a parameter of type string.
3. The function handleError() throws an error with the given message.
4. The function handleError() is called with the argument "Something went wrong".
5. The function handleError() logs the message to the console.

*/
