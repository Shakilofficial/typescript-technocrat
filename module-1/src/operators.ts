/* This code snippet demonstrates the usage of spread operators, rest operators, and destructuring in
TypeScript. */
//spread Operators
//rest operators
//destructuring

//learn spread operator
const brothers:string[] = ['John', 'Paul', 'George', 'Ringo'];
const cousins: string[] = ["Doe", "Smith", "Johnson", "Jones"];
brothers.push(...cousins);
console.log(brothers);

//for object

const mentors = {
    typeScript: "John",
    redux: "Paul",
    dbms: "George",
}

const instructors = {
    prisma: "Dylan",
    next: "Sumit",
    cloud:"Sam",
};

const teachersList = {...mentors, ...instructors};
console.log(teachersList);

//rest operator

const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string )=> {
        console.log(`Hello ${friend}`);
    });
}

greetFriends("John", "Paul", "George", "Ringo");
greetFriends("John", "Paul", "George", "Ringo", "Doe", "Smith", "Johnson", "Jones");