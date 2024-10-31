/* This TypeScript code snippet demonstrates the use of type aliases in defining custom types for
objects, variables, and functions. */
{
    const user1 = {
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
    console.log(user1);
    /* const user: {
      id: number;
      name: string;
      age: number;
      email: string;
      address: {
        street: string;
        city: string;
        state: string;
        zip: string;
      };
    } = {
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
    }; */
    const user2 = {
        id: 2,
        name: "Paul",
        age: 22,
        address: {
            street: "123 Main Street",
            city: "Washington",
            state: "DC",
            zip: "20001",
        },
    };
    console.log(user1);
    const userName = "John";
    const isAdmin = true;
    console.log(userName);
    console.log(isAdmin);
    const add = (a, b) => a + b;
    console.log(add(1, 2));
}
