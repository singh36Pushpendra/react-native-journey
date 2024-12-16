let text = 'Volvo "XC60"';

console.log(text);

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string.

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';
console.log(`answer1\nanswer2\nanswer3`);

text = `He's often called "Johnny"`;
console.log(text);

text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(`Length of "${text}" = ${text.length}`);

text = 'We are the so-called "Vikings" from the north.';
console.log(text);

text = "It's alright.";
console.log(text);

text = "The character \\ is called backslash.";
console.log(text);

document.getElementById("pTagIdToShowString").innerHTML = "Hello Dolly";

// Templates allow multiline strings:
text = `The quick
brown fox
jumps over
the lazy dog`;
console.log(text);

// JS Strings as Objects.
let x = "John";
console.log(x);

let y = new String("John");
console.log(y);
console.log(`x == y = ${x == y}`);

console.log(`x === y = ${x === y}`);

let z = new String("John");
console.log(`y == z = ${y == z}`);
console.log(`y === z = ${y === z}`);
