// Adding a property to object having key with spaces

const obj = {
    name: "John",
    age: 25,
    "unique key": "I am unique"
}

//accessign the property with key having spaces

console.log(obj["unique key"]); // I am unique


// Adding dynamic keys and values to object

const key = "fullName";
const fullName = "John Doe";

const user = {
    [key]: fullName
}

console.log(user.fullName);


// iterating through an object! (use FOR IN loop)

const person = {
    name: "John",
    age: 25,
    city: "New York"
}

console.log("Object Iteration:");

for (let key in person) {
    console.log(key, ':', person[key])
}


// Object destructuring

const person1 = {
    name: "John",
    age: 25,
    city: "New York"
}

const { name, age, city } = person1;

console.log("Object destructuring:");
console.log(name, age, city); // John 25 New York


// Object destructuring with different variable names

const person2 = {
    name: "John",
    age: 25,
    city: "New York"
}

const { name: personName, age: personAge, city: personCity } = person2;

console.log("Object destructuring with different variable names:");
console.log(personName, personAge, personCity); // John 25 New York


// Object destructuring with default values

const person3 = {
    name: "John",
    age: 25
}

const { name: personName1, age: personAge1, city: personCity1 = "New York" } = person3;

console.log("Object destructuring with default values:");
console.log(personName1, personAge1, personCity1); // John 25 New York


// Object destructuring with rest operator

const person4 = {
    name: "John",
    age: 25,
    city: "New York",
    country: "USA"
}

const { name: personName2, ...rest } = person4;

console.log("Object destructuring with rest operator:");
console.log(personName2, rest); // John {age: 25, city: "New York", country: "USA"}


// Object destructuring with nested objects

const person5 = {
    name: "John",
    age: 25,
    address: {
        city: "New York",
        country: "USA"
    }
}

const { name: personName3, address: { city: personCity2, country: personCountry } } = person5;

console.log("Object destructuring with nested objects:");
console.log(personName3, personCity2, personCountry); // John New York USA



// Referencing the object properties in the object itself

console.log("Referencing the object properties in the object itself:");

const person6 = {
    name: "John",
    age: 25,
    city: "New York",
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
    }
}

person6.getDetails(); // John is 25 years old and lives in New York




// Object methods with arrow function

console.log("Object methods with arrow function:");

const person8 = {
    name: "John",
    age: 25,
    city: "New York",
    getDetails: () => {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
    }
}

person8.getDetails(); // undefined is undefined years old and lives in undefined


// Shallow Copy of an object ( pass by reference)

const shallowCopy = person8;
shallowCopy.name = "JOHN DOE";

console.log("Shallow Copy of an object:");

console.log("original object: ", person8); // Doe
console.log('Name changed in shallow copy also changes the original object');
console.log("shallow Copy: ", shallowCopy); // Doe


// Deep Copy of an object ( pass by value) using spread operator

const deepCopy = { ...person8 };
deepCopy.name = "Deep Copy ";

console.log("Original object:", person8);
console.log("Deep Copy of an object:", deepCopy);


// Deep Copy of an object using Object.assign()

const deepCopy1 = Object.assign({}, person8);
deepCopy1.name = "Deep Copy 1 John";

console.log("Original object:", person8);
console.log("Deep Copy of an object using Object.assign():", deepCopy1);


// Deep copy of an object using JSON.parse() and JSON.stringify()

const deepCopy2 = JSON.parse(JSON.stringify(person8));
deepCopy2.name = "Deep Copy 2 John";

console.log("Original object:", person8);
console.log("Deep Copy of an object using JSON.parse() and JSON.stringify():", deepCopy2);


// This keyword in object
// This keyword refers to the object itself in which it is used. It is used to access the properties and methods of the object. The value of this is determined by how a function is called.
// There are four rules to determine the value of this:
// 1. Default binding
// 2. Explicit binding
// 3. New binding
// 4. Implicit binding

// Default binding

function getDetails() {
    console.log(this.name);
}

const person7 = {
    name: "John",
    age: 25,
    city: "New York",
    getDetails: getDetails
}

person7.getDetails(); // John



// New binding

// function Person(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.getDetails = function () {
//         console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
//     }
// }

// const person11 = new Person("John", 25, "New York");
// person11.getDetails(); // John is 25 years old and lives in New York




// Implicit binding

const person9 = {
    name: "John",
    age: 25,
    city: "New York",
    getDetails() {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
    }
}

person9.getDetails(); // John is 25 years old and lives in New York


// this in global scope

this.a = 10; // this refers to the window object(global scope)
console.log(this.a); // 10
console.log(this); // Window object

// Arrow function and this keyword
// Arrow functions do not have their own this. They inherit the this value from the enclosing lexical scope. 
// Arrow functions are best suited for functions. They are not good for defining object methods.

const person12 = {
    name: "John",
    age: 25,
    city: "New York",
    getDetails: () => {
        console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`); // this refers to the window object(global scope)
    }
}

person12.getDetails(); // undefined is undefined years old and lives in undefined


// Explicit binding

function getDetails1() {
    console.log(`${this.name} is ${this.age} years old and lives in ${this.city}`);
}

const person10 = {
    name: "John",
    age: 25,
    city: "New York"
}

getDetails1.call(person10); // John is 25 years old and lives in New York
getDetails1.apply(person10); // John is 25 years old and lives in New York

const bound = getDetails1.bind(person10);

bound(); // John is 25 years old and lives in New York


// Explicit binding with arguments

function getDetails2(city, country) {
    console.log(`${this.name} is ${this.age} years old and lives in ${city}, ${country}`);
}

const person11 = {
    name: "Abdullah Ali",
    age: 23
}

getDetails2.call(person11, "Lahore", "Pakistan"); // John is 25 years old and lives in New York, USA
getDetails2.apply(person11, ["Lahore", "Pakistan"]); // John is 25 years old and lives in New York, USA

const bound1 = getDetails2.bind(person11, "Lahore", "Pakistan");
bound1(); // John is 25 years old and lives in New York, USA



// Object.freeze()
// Object.freeze() is used to freeze an object. It prevents the properties of an object from being modified, added, or deleted. It returns the same object that was passed as an argument.

const person13 = {
    name: "John",
    age: 25,
    city: "New York"
}

Object.freeze(person13);
person13.name = "John Doe";
console.log("Object.freeze():", person13); // {name: "John", age: 25, city: "New York"}


// Object.seal()
// Object.seal() is used to seal an object. It prevents the properties of an object from being added or deleted. However, the properties can still be modified.

const person14 = {
    name: "John",
    age: 25,
    city: "New York"
}

Object.seal(person14);
person14.name = "John Doe";
person14.country = "USA";

console.log("Object.seal():", person14); // {name: "John Doe", age: 25, city: "New York"}


// Object.keys()
// Object.keys() is used to return an array of the object's own enumerable property names.

const person15 = {
    name: "John",
    age: 25,
    city: "New York"
}

console.log("Object.keys():", Object.keys(person15)); // ["name", "age", "city"]

// Object.values()
// Object.values() is used to return an array of the object's own enumerable property values.

const person16 = {
    name: "John",
    age: 25,
    city: "New York"
}

console.log("Object.values():", Object.values(person16)); // ["John", 25, "New York"]

// Object.entries()
// Object.entries() is used to return an array of the object's own enumerable property [key, value] pairs.

const person17 = {
    name: "John",
    age: 25,
    city: "New York"
}

console.log("Object.entries():", Object.entries(person17)); // [["name", "John"], ["age", 25], ["city", "New York"]]









