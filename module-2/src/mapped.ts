{
  // Mapped Type in TypeScript

  const arrayOfNumber: number[] = [1, 2, 3, 4, 5];
  // const arrayOfString: string[] = ["a", "b", "c", "d", "e"];

  const arrayOfString: string[] = arrayOfNumber.map((num) => num.toString());
    console.log(arrayOfString);
    
    type AreaNumber = {
    height: number;
    width: number;
    }

    type height = AreaNumber["height"]; //lookup type

    // type AreaString = {
    // height: string;
    // width: string;
    // }

    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{ height: string; width: number }> = {
        height: "10",
        width: 20,
    };
    console.log(area1);

}
