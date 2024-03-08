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

// callback function

function getCallback(callback) {

    console.log('getCallback');
    let callbackArgument = 12;
    callback(callbackArgument);
}

function callbackFunction(arg) {
    console.log('callbackFunction', arg);
}

getCallback(callbackFunction);

