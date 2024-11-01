{
    // type assertion
    let anything;
    anything = "Next Level Web Development";
    anything = 123;
    anything.toExponential();
    const kgtoGram = (kg) => {
        if (typeof kg === "string") {
            const converted = parseFloat(kg) * 1000;
            return `The converted value is ${converted}`;
        }
        if (typeof kg === "number") {
            const converted = kg * 1000;
            return converted;
        }
    };
    const result = kgtoGram(1000);
    console.log(result);
    const result2 = kgtoGram("1000");
    console.log(result2);
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
