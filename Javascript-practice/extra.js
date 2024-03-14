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



// Closure scope chain

var globalVariable = "I am global";

function outerFunction1() {
    let outerVariable = "I am from outer";

    function innerFunction1() {
        console.log(outerVariable); // Accessing outerVariable from the outer function
        console.log(innerVariable); // Accessing innerVariable from the inner function
        console.log(globalVariable); // Accessing globalVariable from the global scope
    }

    let innerVariable = "I am from inner";
    return innerFunction1;
}

var closure1 = outerFunction1();
closure1();



//Currying 

// Currying is a function that takes one parameter at a time and returns a new function that takes the next parameter.
// When calling a curried function, we will pass the arguments one by one.

function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log(add(1)); // [Function]
console.log(add(1)(2)); // 3



// Currying Interview Question

// Sum(1)(2)(3)(4)() // 10

function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function () {
                    return a + b + c + d;
                }
            }
        }
    }
}

console.log(sum(1)(2)(3)(4)()); // 10


// Currying Interview Question 2

// evaluate("sum")(2)(5) // 7
// evaluate("sub")(5)(2) // 3
// evaluate("mul")(5)(2) // 10
// evaluate("div")(10)(2) // 5

function evaluate(operation) {
    if (operation == 'sum') {
        return function (a) {
            return function (b) {
                return a + b;
            }
        }
    }
    else if (operation == 'sub') {
        return function (a) {
            return function (b) {
                return a - b;
            }
        }
    }
    else if (operation == 'mul') {
        return function (a) {
            return function (b) {
                return a * b;
            }
        }
    }
    else if (operation == 'div') {
        return function (a) {
            return function (b) {
                return a / b;
            }
        }
    }
}


//Better implementation of above Interview Question!

function evaluate(operation) {
    return function (a) {
        return function (b) {
            if (operation == 'sum') {
                return a + b;
            }
            else if (operation == 'sub') {
                return a - b;
            }
            else if (operation == 'mul') {
                return a * b;
            }
            else if (operation == 'div') {
                return a / b;
            }
        }
    }
}

console.log("sum", evaluate("sum")(2)(5)); // 7
console.log("sub", evaluate("sub")(5)(2)); // 3
console.log("mul", evaluate("mul")(5)(2)); // 10
console.log("div", evaluate("div")(10)(2)); // 5


function now() {
    for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000)
    }
}

now();



