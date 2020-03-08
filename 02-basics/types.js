let a = 1; // number type

a = Number('1'); // convert to 1

let str = String(123); // '123'

str.indexOf('m'); // -1

let isAdmin = false;

if (isAdmin) {
    console.log('hello admin');
} else {
    console.log('hello user');
}

let abcd = null; // null

let obj = {
    number: 123,
    str: 'value',
    bool: true,
};

let obj2 = Object(); // {}

// function expression
const fn = function () {
    console.log('hello');
}

// function declaration
function fn2() {
    console.log('hello');
}
fn();
fn2();

const myArray = [1, 2, 3, 4];
const catNamesArray = ["string1", "string2"];

let fruits = ['Apple', 'Banana']

console.log(fruits.length) // 2

let first = fruits[0]
// Apple

let newLength = fruits.push('Orange')
// ["Apple", "Banana", "Orange"]
let last = fruits.pop() // remove Orange (from the end)
// ["Apple", "Banana"]

let pos = fruits.indexOf('Banana') // 1

fruits.forEach(function (item, index, array) {
    console.log(item, index)
})
// Apple 0
// Banana 1

let mapped = fruits.map(function (item, index, array) {
    return item + index;
});

console.log(mapped); // ['Apple0', 'Banana1']

const fn3 = () => {
    console.log('hello');
}
