{
  // Generics-Function

  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGenerics = <T>(param: T): T[] => {
    return [param];
  };

  const result = createArray("Next Level Web Development");
  console.log(result);

  const resultGenerics = createArrayWithGenerics<string>(
    "Next Level Web Development"
  );
  console.log(resultGenerics);

  interface User {
    name: string;
    age: number;
  }

  const resultGenerics1 = createArrayWithGenerics<User>({
    name: "John",
    age: 25,
  });
  console.log(resultGenerics1);

  //create Array with Tuple

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const resultTuple = createArrayWithTuple("Next Level Web Development", 2024);
  console.log(resultTuple);

  const resultTupleObj = createArrayWithTuple<string, { name: string }>(
    "Next Level Web Development",
    { name: "John" }
  );
  console.log(resultTupleObj);

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";
    return { ...student, course };
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
