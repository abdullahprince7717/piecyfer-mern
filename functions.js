// Arrow functions

const add = (a, b) => {
    return a + b;
}

console.log(add(5, 6)); // 11

// if there is only one line of code in the function, we can remove the return keyword and the curly braces

const add1 = (a, b) => a + b;

console.log(add1(5, 6)); // 11


// if there is only one parameter, we can remove the parenthesis

const add2 = a => a + 5;

console.log(add2(5)); // 10


// Default parameters 

const add3 = (a, b = 5) => a + b;

console.log(add3(5)); // 10


// Rest parameters

const add4 = (a, b, ...c) => {

    console.log(c); // [3, 4, 5]
    return a + b + c.reduce((acc, val) => acc + val, 0);
}

console.log(add4(1, 2, 3, 4, 5)); // 15


// Spread operator

const arr = [1, 2, 3, 4, 5];
console.log(...arr); // 1 2 3 4 5

const arr1 = [6, 7, 8, 9, 10];
console.log([...arr, ...arr1]); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const obj = {
    name: "John",
    age: 25
}

const obj1 = {
    ...obj,
    city: "New York"
}

console.log(obj1); // {name: "John", age: 25, city: "New York"}