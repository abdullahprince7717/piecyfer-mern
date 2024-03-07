//if statement

let x = 10;
let y = 20;

if (x > y) {
    console.log("x is greater than y");
}
else {
    console.log("x is less than or equal to y");
}

//if else if statement

let time = 11;

if (time < 10) {
    console.log("Good morning");
}
else if (time < 20) {
    console.log("Good day");
}
else {
    console.log("Good evening");
}

//switch statement
//switch statement is used to perform different actions based on different conditions

let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday ");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}


//for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop

let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}

//do while loop
//do while loop is similar to while loop, but the difference is that do while loop will execute the code block at least once before checking the condition

let k = 0;
do {
    console.log(k);
    k++;
}
while (k < 5);


//break statement 
//break statement is used to terminate the loop

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}

//continue statement
//continue statement is used to skip the current iteration of the loop

for (let i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}

//return statement
//return statement is used to stop the execution of a function and return a value from that function

function add(a, b) {
    return a + b;
}

console.log(add(5, 6)); // 11

//throw statement and try...catch...finally statement
//throw statement is used to throw an exception

/* 
    finally block will execute no matter what happens. It will execute if the try block executes successfully or if the catch block executes because of an exception.
    It will also execute if there is a return statement in the try or catch block. 
*/

function divide(a, b) {
    if (b === 0) {
        throw "Division by zero";
    }
    return a / b;
}

try {
    console.log(divide(5, 0));
}
catch (e) {
    console.log("throw exception", e);
}
finally {
    console.log("This will execute no matter what");
}


//label statement
//label statement is used to label a block of code

outer: for (let i = 0; i < 5; i++) {
    inner: for (let j = 0; j < 5; j++) {
        if (i === 3) {
            break outer;
        }
        console.log(i, j);
    }
}


//ternary operator
//ternary operator is a short form of if else statement

let p = 10;
let q = 20;

let result = p > q ? "p is greater than q" : "p is less than or equal to q";
console.log(result);


//logical operators

let r = 10;
let s = 20;

console.log(r > 5 && s > 10); // true
console.log(r > 5 && s > 30); // false


//for-in loop
//for-in loop is used to iterate over the properties of an object 

const person = {
    name: "John",
    age: 25
}

let array = [10, 20, 30, 40, 50];

for (let key in person) {
    console.log(key, person[key]);
}

for (let key in array) {
    console.log(key, array[key]);
}

for (let num of array) {
    console.log("num is: ", num);
}

for (let key in array) {
    console.log("key is : ", key);
}

//for-of loop
//for-of loop is used to iterate over the elements of an array

const arr = [1, 2, 3, 4, 5];

for (let val of arr) {
    console.log(val);
}

//forEach method
//forEach method is used to iterate over the elements of an array. It accepts a callback function as an argument and this callback function is called for each element of the array.
// Callback functions can accept upto 3 arguments: value, index, array.

arr.forEach((val, index) => {
    console.log(val, index);
});

arr.forEach((val, index, array) => {
    console.log("val: ", val, "index: ", index, "array: ", array);
})







