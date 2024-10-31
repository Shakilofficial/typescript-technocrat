/* This TypeScript code snippet is demonstrating various concepts and operators like
 * optional chaining, nullish coalescing operator, and the ternary operator.
 */
{
  const age: number = 11;

  if (age > 18) {
    console.log("You are an adult");
  } else if (age > 12) {
    console.log("You are a teenager");
  } else {
    console.log("You are a child");
  }
  // Ternary operator
  const isAdult = age > 18 ? "You are an adult" : "You are a child";
  console.log(isAdult);

  // nullish coalescing operator(if need to make decision based on value null or undefined)

  const isAuthenticated = null;
  const user = isAuthenticated ?? "Guest";
  const user2 = isAuthenticated ? isAuthenticated : "Guest";
  console.log(user);
  console.log(user2);

  type User = {
    name: string;
    address: {
      street: string;
      city: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const person: User = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Dhaka",
      presentAddress: "Mirpur-10, Dhaka",
    },
  };

  const permanentAddress = person?.address?.permanentAddress ?? "No address";
  console.log(permanentAddress);
}