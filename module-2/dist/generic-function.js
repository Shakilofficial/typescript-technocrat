{
    // Generics-Function
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGenerics = (param) => {
        return [param];
    };
    const result = createArray("Next Level Web Development");
    console.log(result);
    const resultGenerics = createArrayWithGenerics("Next Level Web Development");
    console.log(resultGenerics);
    const resultGenerics1 = createArrayWithGenerics({
        name: "John",
        age: 25,
    });
    console.log(resultGenerics1);
    //create Array with Tuple
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const resultTuple = createArrayWithTuple("Next Level Web Development", 2024);
    console.log(resultTuple);
    const resultTupleObj = createArrayWithTuple("Next Level Web Development", { name: "John" });
    console.log(resultTupleObj);
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
    };
    const student = addCourseToStudent({
        name: "John",
        age: 25,
        role: "NEXT LEVEL WEB DEVELOPER",
    });
    const student2 = addCourseToStudent({
        name: "John",
        age: 25,
        role: "NEXT LEVEL WEB DEVELOPER",
        hasWatch: "Apple Watch",
    });
}
