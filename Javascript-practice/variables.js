//Variables


// let and const are block scope variables

{
    const b = 9
    let a = 5
} // block scope variable 

let c = 10; // global scope variable

const example = ()  => {
    console.log(c); // 10
    console.log(b); // undefined
    console.log(a); // undefined
}
example(); 

console.log(c); // 10
console.log("a", a);  // undefined


// var is a function scope variable

function example1() {
    var d = 10;
    console.log(d); // 10
}

example1();
console.log(d); // undefined

// var can be redeclared

var e = 10;
var e = 20;
console.log(e); // 20


// let and const cannot be redeclared

let f = 10;
let f = 20;
console.log(f); // error

const g = 10;
const g = 20;
console.log(g); // error

// let can be reassigned and const cannot be reassigned

let h = 10;
h = 20;
console.log(h); // 20

const i = 10;
i = 20;
console.log(i); // error



