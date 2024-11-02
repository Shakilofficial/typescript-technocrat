/*
Objective: Handle null and undefined values using nullish coalescing.
Instructions:
- Write a function `getDisplayName(name: string | null | undefined): string` that returns `"Anonymous"` if `name` is null or undefined.

*/
function getDisplayName(name) {
    return name !== null && name !== void 0 ? name : "Anonymous";
}
console.log(getDisplayName("John")); // John
console.log(getDisplayName(null)); // Anonymous
console.log(getDisplayName(undefined)); // Anonymous
/*
Explain the Working flow of the Code

1. The function getDisplayName() is defined.
2. The function getDisplayName() accepts a parameter of type string | null | undefined.
3. The function getDisplayName() returns "Anonymous" if name is null or undefined.
4. The function getDisplayName() is called with the argument "John".
5. The function getDisplayName() is called with the argument null.
6. The function getDisplayName() is called with the argument undefined.
7. The function getDisplayName() logs the message to the console.

*/
