/**
 * JavaScript has 8 Datatypes
 * String
 * Number
 * Bigint
 * Boolean
 * Undefined
 * Null
 * Symbol
 * Object
 */

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Thakur";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "Pushpendra", lastName: "Songara" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

// When adding a number and a string, JavaScript will treat the number as a string.
let $x = 16 + "Volvo";
let $$x = "Volvo" + 16;

// JavaScript treats 16 and 4 as numbers, until it reaches "Volvo".
let $$$x = 16 + 4 + "Volvo";

// As the first operand is a string, all operands are treated as strings
let $$$$x = "Volvo" + 16 + 4;
/* 
console.log(`length = ${length}`);
console.log(`weight = ${weight}`);
console.log(`color = ${color}`);
console.log(`lastName = ${lastName}`);
console.log(`x = ${x}`);
console.log(`y = ${y}`);
console.log(`person = ${person}`);
console.log(`cars = ${cars}`);
console.log(`date = ${date}`);
console.log(`$x = ${$x}`);
console.log(`$$x = ${$$x}`);
console.log(`$$$x = ${$$$x}`);
console.log(`$$$$x = ${$$$$x}`);
 */

/*
 JavaScript has dynamic types. 
This means that the same variable can be 
used to hold different data types:
 */
let _x; // Now x is undefined
console.log(`_x = ${_x}`);
_x = 5; // Now x is a Number
console.log(`_x = ${_x}`);
_x = "Pushpa"; // Now x is a String
console.log(`_x = ${_x}`);

// A string (or a text string) is a series of characters like "Pushpa Raj".
// Strings are written with quotes. You can use single or double quotes.
// let carName1 = 'Volvo XC60';
let carName2 = "Volvo XC60";

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

console.log(`answer1 = ${answer1}`);
console.log(`answer2 = ${answer2}`);
console.log(`answer3 = ${answer3}`);

/**
All JavaScript numbers are stored as decimal numbers (floating point).
Numbers can be written with, or without decimals:
 */

// With decimals:
let x1 = 34.0,
  x3 = 3.14;

// Without decimals:
let x2 = 34;

console.log(`x1 = ${x1}`);
console.log(`x2 = ${x2}`);
document.getElementById(
  "pTagIdForNumbers"
).innerHTML = `x1 = ${x1}<br>x2 = ${x2}<br>x3 = ${x3}`;

/**
 * Extra large or extra small numbers can be written with
 * scientific (exponential) notation:
 */
let _y = 123e5; // 12300000
let z = 123e-5; // 0.00123

document.getElementById(
  "pTagIdForExponentialNotation"
).innerHTML = `_y = ${_y}<br>z = ${z}`;

/**
Javascript numbers are always one type:
double (64-bit floating point).
 */
// All JavaScript numbers are stored in a 64-bit floating-point format.

let _$x = BigInt("123456789012345678901234567890");
document.getElementById("pTagIdForBigInt").innerHTML = `_$x = ${_$x}`;

let x$ = 5,
  y$ = 5,
  z$ = 6;
document.getElementById("pTagIdForBoolean").innerHTML = `(x$ == y$) = ${
  x$ == y$
}<br>(x$ == z$) = ${x$ == z$}`;

const cars$ = ["Saab", "Volvo", "BMW"];
document.getElementById("pTagIdForArrays").innerHTML = `cars$ = ${cars$}`;

const person$ = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
document.getElementById("pTagIdForObject").innerHTML =
  "person name = " +
  person$.firstName +
  "<br>person eye color = " +
  person$.eyeColor;

// console.log(typeof ""); // Returns "string"
// console.log(typeof "Pushpa"); // Returns "string"
// console.log(typeof "Pushpa Raj"); // Returns "string"

// console.log(typeof 0); // Returns "number"
// console.log(typeof 314); // Returns "number"
// console.log(typeof 3.14); // Returns "number"
// console.log(typeof 3); // Returns "number"
// console.log(typeof (3 + 4)); // Returns "number"

// A variable without a value, has the value undefined. The type is also undefined.
let _car; // Value is undefined, type is undefined

console.log(`typeof _car = ${typeof _car}`);
console.log(`Value of _car = ${_car}`);

let __car = undefined;
console.log(`typeof __car = ${typeof __car}\nValue of __car = ${__car}`);

let _$car = ""; // The value is "", the typeof is "string"
console.log(`typeof _$car = ${typeof _$car}\nValue of _$car = ${_$car}`);
