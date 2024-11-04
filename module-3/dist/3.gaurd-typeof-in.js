// Type Guard using typeof & in
function add(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a.toString() + " " + b.toString();
    }
}
console.log(add(1, 2)); // 3
console.log(add("Hello", "World")); // HelloWorld
function getUserType(user) {
    if ("role" in user) {
        console.log(`Your name is ${user.name} and your role is ${user.role}`);
    }
    else {
        console.log(`Your name is ${user.name}`);
    }
}
getUserType({ name: "John" });
getUserType({ name: "Shakil", role: "admin" });
/*
Explain the Working flow of the Code

1. The `add` function takes two parameters of type `Alphanumeric` and returns an `Alphanumeric` value.
2. The `add` function checks if the types of the two parameters are `number` and `number` using the `typeof` operator. If they are, it returns the sum of the two numbers. If not, it concatenates the two strings using the `+` operator.
3. The `getUserType` function takes a parameter of type `GeneralUser | AdminUser` and returns a `GeneralUser` or `AdminUser` value.
4. The `getUserType` function checks if the `role` property exists in the user object using the `in` operator. If it does, it logs a message indicating that the user's name and role are available. If not, it logs a message indicating that the user's name is available.

*/ 
