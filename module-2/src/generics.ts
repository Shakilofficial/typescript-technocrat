{
  // generics Type

  type GenericArray<T> = Array<T>;

  // const rollNumber: number[] = [1, 2, 3, 4, 5];
  const rollNumber: GenericArray<number> = [1, 2, 3, 4, 5]; //use generics

  // const instructor: string[] = ["John", "Jane", "Tom"];
  const instructor: GenericArray<string> = ["John", "Jane", "Tom"];

  // const boolArray: boolean[] = [true, false, true];
  const boolArray: GenericArray<boolean> = [true, false, true];

  const user: GenericArray<{ name: string; age: number }> = [
    {
      name: "John",
      age: 25,
    },
    {
      name: "Jane",
      age: 30,
    },
  ];

  // Generic Tuple

  const person: [string, string] = ["Mr.John", "Mrs.Rachel"];

  type GenericTuple<X, Y> = [X, Y];

  const person2: GenericTuple<string, string> = ["Mr.John", "Mrs.Rachel"];

  const personWithId: GenericTuple<number, { name: string; age: number }> = [
    1234,
    { name: "John", age: 25 },
  ];
}
