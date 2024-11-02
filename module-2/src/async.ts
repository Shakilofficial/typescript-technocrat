{
  // Async in TypeScript

  //promise

  type Todo = { userId: number; id: number; title: string; completed: boolean };

  const getTodo = async (): Promise<Todo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
    return data;
  };

  getTodo();

  type Data = { data: string };

  const createPromise = (): Promise<Data> => {
    return new Promise<Data>((resolve, reject) => {
      const data: Data = {
        data: "Next Level Web Development",
      };
      if (data) {
        resolve(data);
      } else {
        reject("Data is not available");
      }
    });
  };

  //calling CreatePromise function

  const showData = async (): Promise<Data> => {
    const data: Data = await createPromise();
    return data;
    // console.log(data);
  };

  showData();
}
