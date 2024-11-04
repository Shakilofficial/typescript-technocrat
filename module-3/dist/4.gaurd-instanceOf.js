// instanceof guard
{
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log(`The ${this.name} making sound.`);
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log(`The ${this.name} barking.`);
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log(`The ${this.name} meowing.`);
        }
    }
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog", "Canis lupus familiaris");
    const cat = new Cat("Cat", "Felis catus");
    getAnimal(dog); // The Dog barking.
    getAnimal(cat); // The Cat meowing.
    getAnimal(new Animal("Animal", "Unknown")); // The Animal making sound.
}
/*
Explain the Working flow of the Code

1. The `Animal` class is defined with properties `name` and `species`, and a `makeSound` method that prints a message indicating the animal's name.
2. The `Dog` class is defined as a subclass of `Animal` with a constructor that calls the `Animal` constructor and does not define any additional properties or methods.
3. The `Cat` class is defined as a subclass of `Animal` with a constructor that calls the `Animal` constructor and does not define any additional properties or methods.
4. The `isDog` function is defined as a type guard that checks if an animal is an instance of the `Dog` class.
5. The `isCat` function is defined as a type guard that checks if an animal is an instance of the `Cat` class.
6. The `getAnimal` function takes an animal as a parameter and returns a message indicating the animal's name and sound.
7. The `dog` and `cat` objects are created using the `Dog` and `Cat` classes, respectively.
8. The `getAnimal` function is called on each object, which prints a message indicating the animal's name and sound. The function uses the `isDog` and `isCat` functions to determine if the animal is an instance of the `Dog` or `Cat` class, and calls the appropriate method on the animal. If the animal is not an instance of either class, it calls the `makeSound` method.

*/
