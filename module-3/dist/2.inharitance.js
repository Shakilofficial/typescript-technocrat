//Inheritance
class Person {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    getSleepTime(numOfHours) {
        console.log(`Student will sleep for ${numOfHours} hours.`);
    }
}
class Student extends Person {
    constructor(name, age, address) {
        super(name, age, address);
    }
}
const student = new Student("John", 25, "New York");
student.getSleepTime(7);
class Teacher extends Person {
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    takeClass(className) {
        console.log(`Teacher are taking ${className} class.`);
    }
}
const teacher = new Teacher("Jane", 50, "London", "Teacher");
teacher.takeClass("Math");
/*
Explain the Working flow of the Code =>

1. The `Person` class is defined with properties `name`, `age`, and `address`, and a `getSleepTime` method that prints a message indicating how many hours the person will sleep.
2. The `Student` class is defined as a subclass of `Person` with a constructor that calls the `Person` constructor and does not define any additional properties or methods.
3. The `teacher` object is created  using the `Teacher` class, which is a subclass of `Person` constructor and has an additional property `designation`.
4. The `takeClass` method is called on the `teacher` object, which prints a message indicating that the teacher is taking a class.
5. The `getSleepTime` method is called on the `student` object, which prints a message indicating that the student will sleep for 7 hours.
 
*/
