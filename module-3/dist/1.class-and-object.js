/* class Animal {
    name: string;
    species: string;
    sound: string;
    
    constructor(name: string, species: string, sound: string) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}

const dog = new Animal("Dog", "Canis lupus familiaris", "Ghew Ghew");
const cat = new Animal("Cat", "Felis catus", "Meow");

dog.makeSound();
cat.makeSound(); */
//use parameterized constructor
class Animal {
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    makeSound() {
        console.log(`The ${this.name} says ${this.sound}`);
    }
}
{
    const dog = new Animal("Dog", "Canis lupus familiaris", "Ghew Ghew");
    const cat = new Animal("Cat", "Felis catus", "Meow");
    dog.makeSound();
    cat.makeSound();
}
/*
Explain the Working flow of the Code

1. `Animal` is defined with properties for `name`, `species`, and `sound`, and a `makeSound` method that prints a message including the animal's name and sound.

2.Within a block scope, two `Animal` instances (`dog` and `cat`) are created with specific values for `name`, `species`, and `sound`.

3.The `makeSound` method is called on each instance. This outputs a message indicating the sound each animal makes, based on the properties set when the instances were created.

*/
