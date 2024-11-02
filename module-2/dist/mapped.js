{
    // Mapped Type in TypeScript
    const arrayOfNumber = [1, 2, 3, 4, 5];
    // const arrayOfString: string[] = ["a", "b", "c", "d", "e"];
    const arrayOfString = arrayOfNumber.map((num) => num.toString());
    console.log(arrayOfString);
    const area1 = {
        height: "10",
        width: 20,
    };
    console.log(area1);
}
