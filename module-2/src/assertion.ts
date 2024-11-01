{
  // type assertion
  let anything: any;
  anything = "Next Level Web Development";
  anything = 123;
  (anything as number).toExponential();

  const kgtoGram = (kg: string | number): number | string | undefined => {
    if (typeof kg === "string") {
      const converted = parseFloat(kg) * 1000;
      return `The converted value is ${converted}`;
    }
    if (typeof kg === "number") {
      const converted = kg * 1000;
      return converted;
    }
  };
  const result = kgtoGram(1000) as number;
  console.log(result);

  const result2 = kgtoGram("1000") as string;
  console.log(result2);

  type CustomError = {
    code: number;
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
