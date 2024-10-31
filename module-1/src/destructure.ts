/* This code snippet demonstrates the concept of destructuring in TypeScript. */

//destructuring
{
  const user = {
    id: 1,
    name: "John",
    age: 25,
    email: "john@gmail.com",
    address: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
      zip: "10001",
    },
  };
  const {
    email,
    address: { city: currentCity }, //name alias and can not write type explicitly here
  } = user;
  console.log(email);
  console.log(currentCity);

  //array destructuring
  const myMates = [
    "John",
    "Paul",
    "George",
    "Ringo",
    "Doe",
    "Smith",
    "Johnson",
    "Jones",
  ];
  // const [a,b,c]=myMates;
  // const [,,,bestFriend] = myMates;    // if i skip 0 and 1 index element from myMates array then it will give me bestFriend
  // console.log(bestFriend);
  const [, , , bestFriend, ...rest] = myMates;
  console.log(bestFriend);
  console.log(rest);
}
