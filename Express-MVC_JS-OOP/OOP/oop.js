// New keyword

// New Keyword is used to create an instance of an object. It creates a new object with the specified prototype object and properties.


// Example 1

function person(name, age) {
    this.name = name;
    this.age = age;
    return this; // This is not necessary in the case of using NEW keyword, because the new keyword will automatically return the object.
}

let person1 = person('John', 30);
let person2 = person('Doe', 10);

console.log(person1.name, person1.age); // Doe, 10 Because person2 has been created after person1 and it is overriding the value of person1 in the global scope.


// Here we will use the NEW keyword so that every object will have its own scope. Meaning creating a new instance of the object.

let person3 = new person('Hasil', 20);
let person4 = new person('Pur', 23);

console.log(person3); // person { name: 'Hasil', age: 20 }
console.log(person4); // person { name: 'Pur', age: 23 }


// Class -- It is a blueprint for creating objects with predefined properties and methods.

// Example 2

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method

    greet() {
        console.log(`Hello ${this.name}`);
    }

    // Static Method -- It is a method that is called on the class itself, not on the object instance.
    // Static methods are often used to create utility functions for an application.

    static info() {
        console.log('This is a person class');
    }
}

let person5 = new Person('Abdullah', 25);
console.log("person5", person5); // Person { name: 'Abdullah', age: 25 }



class Student extends Person {
    constructor(name, age, grade) {
        // super() // It will call the constructor of the parent class.
        // If we want to use the properties of the parent class, we have to call the constructor of the parent class.
        // super() must be called before using 'this' keyword.
        super(name, age) // It will call the constructor of the parent class and pass the parameters and the parent class will set the values of the properties for the instance of the child class.
        this.name = name;
        this.grade = grade;
    }

    printInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}

let student1 = new Student('Ali', 20, 'A');

console.log("student1", student1); // Student { name: 'Ali', age: 20, grade: 'A' }
student1.greet(); // Hello Ali





// instanceof -- It is used to check if an object is an instance of a class or not.

console.log(student1 instanceof Person); // true





// Static Keyword -- It is used to define a static method for a class. Static methods are called on the class itself, not on the object instance.
//  They cant be accessed by the object instance of the class and also cant be accessed by child classes.
