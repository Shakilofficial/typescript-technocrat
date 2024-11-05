//ternary-optional

const isAdmin = true;
const message: string = isAdmin ? "Welcome Admin" : "User";

console.log(message);

const data = {
  name: "Shakil",
  address: "Dhaka, Bangladesh",
};

console.log(data?.address?.city);
