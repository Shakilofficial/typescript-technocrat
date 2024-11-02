{
    //   const person1: Owner2 = "";
    function getPropertyValue(obj, key) {
        return obj[key];
    }
    const user = {
        name: "John Doe",
        age: 20,
        address: "Dhaka",
    };
    user["age"];
    const car = {
        brand: "Toyota",
        model: "Corolla",
        releaseDate: 2020,
    };
    getPropertyValue(car, "brand");
}
