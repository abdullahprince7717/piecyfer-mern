//converting data types

//string to number

let str = "123";
let num = Number(str);
console.log(num); // 123

//number to string

let num1 = 123;
let str1 = num1.toString();
console.log(str1); // "123"

//string to boolean

let str2 = "true";
let bool = Boolean(str2);
console.log(bool); // true

//boolean to string

let bool1 = true;
let str3 = bool1.toString();
console.log(str3); // "true"

//number to boolean

let num2 = 1;
let bool2 = Boolean(num2);

console.log(bool2); // true

let num3 = 0;
let bool3 = Boolean(num3);

console.log(bool3); // false

//boolean to number

let bool4 = true;
let num4 = Number(bool4);
console.log(num4); // 1

let bool5 = false;
let num5 = Number(bool5);
console.log(num5); // 0

//truthy and falsy values

//falsy values
// 0
// -0
// null
// undefined
// NaN
// ""

//truthy values
// "0"
// " "
// []
// {}

//converting to number

let str4 = "123";
let num6 = +str4;
console.log(num6); // 123

let str5 = "123";
let num7 = parseInt(str5);
console.log(num7); // 123

let str6 = "123.45";
let num8 = parseFloat(str6);
console.log(num8); // 123.45

//converting to string

let num9 = 123;
let str7 = "" + num9;
console.log(str7); // "123"

let num10 = 123;
let str8 = num10.toString();
console.log(str8); // "123"


//converting to boolean

let str9 = "true";
let bool6 = !!str9;
console.log(bool6); // true


let str10 = "true";
let bool7 = Boolean(str10);
console.log(bool7); // true

let str11 = "true";
let bool8 = str11 === "true";
console.log(bool8); // true

let str12 = "true";
let bool9 = str12 === "false";
console.log(bool9); // false

