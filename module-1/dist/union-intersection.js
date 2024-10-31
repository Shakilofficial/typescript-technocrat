/* This TypeScript code snippet demonstrates the use of union types and intersection types in defining
types and creating objects. */
{
    const newDeveloper = "John";
    const oldDeveloper = "Mr. John Smith";
    console.log(newDeveloper);
    console.log(oldDeveloper);
    const user = {
        name: "John",
        email: "john@gmail.com",
        age: 25,
        gender: "male",
        bloodType: "A+",
        address: {
            street: "123 Main Street",
            city: "New York",
            state: "NY",
            zip: "10001",
        },
    };
    const developer = {
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "TypeScript",
            "React",
            "Node.js",
            "MongoDB",
            "Express",
            "RESTful API",
        ],
    };
    console.log(developer);
}
