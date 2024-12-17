let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

console.log(`Length of ${text} = ${length}`);

text = "HELLO WORLD";
let char = text.charAt(0);

console.log(`text.charAt(0) = ${char}`);

char = text.charCodeAt(0);
console.log(`text.charCodeAt(0) = ${char}`);

const name = "W3Schools";
let letter = name.at(2);
console.log(`name.at(2) = ${letter}`);

letter = name[3];
console.log(`name[3] = ${letter}`);

// The at() method allows the use of negative indexes while charAt() do not.
letter = name.at(-2);
console.log(`name.at(-2) = ${letter}`);

console.log(`text[0] = ${text[0]}`);

// It is read only.
text[0] = "A"; // Gives no error, but does not work

console.log(text[0]);

text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

console.log(`text.slice(7, 13) = ${part}`);

// If you omit the second parameter, the method will slice out the rest of the strin
part = text.slice(7);
console.log(`text.slice(7) = ${part}`);

// If a parameter is negative, the position is counted from the end of the string
part = text.slice(-12);
console.log(`text.slice(-12) = ${part}`);

// This example slices out a portion of a string from position -12 to position -6
part = text.slice(-12, -6);
console.log(`text.slice(-12, -6) = ${part}`);

// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
let str = "Apple, Banana, Kiwi";
part = str.substring(7, 13);
console.log(`str.substring(7, 13) = ${part}`);
// If you omit the second parameter, substring() will slice out the rest of the string.

// substr() is similar to slice().
// The difference is that the second parameter specifies the length of the extracted part.
part = str.substr(7, 6);
console.log(`str.substr(7, 6) = ${part}`);

// If you omit the second parameter, substr() will slice out the rest of the string.
part = str.substr(7);
console.log(`str.substr(7) = ${part}`);

// If the first parameter is negative, the position counts from the end of the string.
part = str.substr(-4);
console.log(`str.substr(-4) = ${part}`);

let text1 = "Hello, World!";
let text2 = text1.toUpperCase();

console.log(`text1.toUpperCase() = ${text2}`);

text2 = text1.toLowerCase();
console.log(`text1.toLowerCase() = ${text2}`);

text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// The concat() method can be used instead of the plus operator. These two lines do the same
console.log("Hello" + " " + "World!");
console.log("Hello".concat(" ", "World!"));

/*
 All string methods return a new string. They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced.
 */

// The trim() method removes whitespace from both sides of a string:
text1 = "           Hello, World!        ";
text2 = text1.trim();
console.log(text1);
console.log(text2);

console.log(text1.trimStart() + "only trim's to start");
console.log("before" + text1.trimEnd() + "only trim's to end");

text = "5";
let padded = text.padStart(4, "0");
console.log(`text.padStart(4, "0") = ${padded}`);
console.log(`text.padStart(4, "x") = ${text.padStart(4, "x")}`);

let numb = 9;
text = numb.toString();
padded = text.padStart(4, "om");
console.log(`text.padStart(3, "om") = ${padded}`);

text = "5";
padded = text.padEnd(4, "y");
console.log(`text.padEnd(4, "y") = ${padded}`);

text = "Hello world!";
let result = text.repeat(4);
console.log(result);

// The replace() method replaces a specified value with another value in a string:
text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
console.log(`text.replace("Microsoft", "W3Schools") = ${newText}`);

// By default, the replace() method replaces only the first match.
text = "Please visit Microsoft and Microsoft!";
newText = text.replace("Microsoft", "W3Schools");
console.log(`text.replace("Microsoft", "W3Schools") = ${newText}`);

// By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:
text = "Please visit Microsoft!";
newText = text.replace("MICROSOFT", "W3Schools");
console.log(`text.replace("MICROSOFT", "W3Schools") = ${newText}`);

// To replace case insensitive, use a regular expression with an /i flag (insensitive):
newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(`text.replace(/MICROSOFT/i, "W3Schools") = ${newText}`);

// To replace all matches, use a regular expression with a /g flga (global match):
text = "Please visit Microsoft and Microsoft!";
newText = text.replace(/Microsoft/g, "W3Schools");
console.log(`text.replace(/Microsoft/g, "W3Schools") = ${newText}`);

// In 2021, string method replaceAll()
text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll("Cats", "Dogs");
text = text.replaceAll("cats", "dogs");
console.log(`text.replaceAll("Cats", "Dogs") = ${text}`);

/* The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown. */
text = "I love cats. Cats are very easy to love. Cats are very popular.";
text = text.replaceAll(/Cats/g, "Dogs");
text = text.replaceAll(/cats/g, "dogs");
console.log(`text.replaceAll(/Cats/g, "Dogs") = ${text}`);

text = "a,b,c,d,e,f"; // A string can be converted to an array with the split() method:
const myArray = text.split(",");
console.log(`myArray[0] = ${myArray[0]}`);

text = "Hello";
const myArr = text.split("");
text = "";
for (let i = 0; i < myArr.length; i++) {
  text += `${myArr[i]}<br>`;
  console.log(`${myArr[i]}\n`);
}
document.getElementById("pTagIdForSplitMethod").innerHTML = text;

/* If the separator is omitted, the returned array will contain the whole string in index [0].
If the separator is "", the returned array will be an array of single characters: */

text = "Hello, I am Developer";
const myArr1 = text.split();
console.log(myArr1[0]);
