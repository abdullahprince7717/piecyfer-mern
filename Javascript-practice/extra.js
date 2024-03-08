//variable and function hoisting 

var b = 15;
{
    var x = 10  // function scope variable
    let y = 20   // block scope variable
    const z = 30 // block scope variable
}

abc();


function abc() {
    console.log('abc');
    console.log('x :', x);  // 10
    // console.log('y :', y);  // undefined error
    // console.log('z :', z);  // undefined error
    let g = 50; // function scope variable
    console.log('p', p);    // 100 (global scope variable)
}

var p = 100; // global scope variable


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


// closure

function outerFunction() {
    let outerVariable = "I am from outer";

    function innerFunction() {   // this functions forms a closure
        console.log(outerVariable); // Accessing outerVariable from the outer function
    }
    return innerFunction;
}

var closure = outerFunction();
closure();


/* 
    The concept of lexical scope ensures that when innerFunction is invoked,
    it still has access to the variables from its lexical scope, which includes the variables from the outer function.
*/


// Closure 2

//lexical scope ensures that when displayName is invoked, it still has access to the variable name from the outer function makeFunc.

function makeFunc() {

    var name = "Abc";  // this is a closure variable
    function displayName() { // this functions forms a closure
        console.log(name); // Accessing name from the outer function
    }
    return displayName;
}

makeFunc()(); // makeFunc() returns displayName function and then we are invoking displayName function followed by (). 


