// Reduce method
// The reduce() method reduces the array to a single value. The reduce() method executes a provided function for each value of the array (from left-to-right). 
//The return value of the function is stored in an accumulator (result/total).


const users = [{
    firstName: 'John',
    lastName: 'Doe',
    age: 25
},
{
    firstName: 'dsfdsf ',
    lastName: 'sdf',
    age: 24
},
{
    firstName: 'ewrwr',
    lastName: 'Doe',
    age: 25
},
{
    firstName: 'John',
    lastName: 'pti',
    age: 28
}


]

let result = users.reduce((acc, curr) => {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    }
    else {
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(result); // {25: 2, 24: 1, 28: 1}


// Map method
// returns a new array with the results of calling a function for every array element

const fullNames = users.map((user) => {
    return user.firstName + " " + user.lastName;
})

console.log(fullNames); // ["John Doe", "dsfdsf  sdf", "ewrwr Doe", "John pti"]


// Filter method
// returns a new array with elements that satisfy the condition

const filteredUsers = users.filter((user) => {
    return user.age > 25
})

console.log(filteredUsers); // [{firstName: "John", lastName: "pti", age: 28}]


// Find method
// returns the first element in the array that satisfies the condition

const foundUser = users.find((user) => {
    return user.age === 25
})

console.log(foundUser); // {firstName: "John", lastName: "Doe", age: 25}


// Some method
// returns true if at least one element in the array satisfies the condition

const hasUser = users.some((user) => {
    return user.age === 25
})

console.log(hasUser); // true


// Every method
// returns true if all elements in the array satisfy the condition


const allUsers = users.every((user) => {
    return user.age > 20
})

console.log(allUsers); // true (all users are above 20)



// Sort method
// sorts the array

const sortedUsers = users.sort((a, b) => {
    return a.age - b.age;
})

console.log(sortedUsers); // [{firstName: "dsfdsf ", lastName: "sdf", age: 24}, {firstName: "John", lastName: "Doe", age: 25}, {firstName: "ewrwr", lastName: "Doe", age: 25}, {firstName: "John", lastName: "pti", age: 28}]


// Reduce method

const totalAge = users.reduce((acc, user) => {
    return acc + user.age;
}, 0)

console.log(totalAge); // 102


// Includes method
// returns true if the array contains the specified element

const arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // true


// IndexOf method
// returns the index of the specified element in the array

console.log(arr.indexOf(3)); // 2


// Push method
// adds new elements to the end of an array and returns the new length

arr.push(6);


// Pop method
// removes the last element from an array and returns that element

arr.pop();


// Shift method
// removes the first element from an array and returns that element

arr.shift();


// Unshift method
// adds new elements to the beginning of an array and returns the new length

arr.unshift(0);


// Slice method
// returns the selected elements in an array, as a new array object

console.log(arr.slice(2, 4)); // [3, 4]


// Splice method
// adds/removes elements from an array

arr.splice(2, 0, 3, 4, 5); // [1, 2, 3, 4, 5] (adds 3, 4, 5 at index 2) (0 is the number of elements to remove)


// Concat method
// returns a new array by combining two or more arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
console.log(arr1.concat(arr2)); // [1, 2, 3, 4, 5, 6]


// Join method
// joins all elements of an array into a string

console.log(arr.join(" ")); // "1 2 3 4 5"


// Reverse method
// reverses the elements in an array

console.log(arr.reverse()); // [5, 4, 3, 2, 1]


// Fill method
// fills the elements in an array with a static value

console.log(arr.fill(0)); // [0, 0, 0, 0, 0]


// FindIndex method
// returns the index of the first element in an array that satisfies the condition

console.log(arr.findIndex((num) => num === 3)); // 2








