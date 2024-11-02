{
    // Constraint in TypeScript
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student = addCourseToStudent({
        id: 1,
        name: "John Doe",
        age: 20,
        devType: "NLWD",
    });
    const student2 = addCourseToStudent({
        id: 2,
        name: "Rachel Green",
        age: 22,
        hasWatch: "Apple Watch",
    });
    const student3 = addCourseToStudent({
        id: 3,
        name: "David Lee",
        age: 25,
        hasWatch: "Apple Watch",
        emni: "emni",
    });
}
