// Assign the value 10 to x
let x = 10;

// Assign the value 2 to y
let y = 2;

// Assign the value x + y to z:
let z = x + y;

// Assign the value x * y to z2:
let z2 = x * y;

let a = 3;
let x2 = (100 + 50) * a;

document.getElementById("pTagIdForAssignment").innerHTML = x;
document.getElementById("pTagIdForAddition").innerHTML = z;
document.getElementById("pTagIdForMultiplication").innerHTML = z2;
document.getElementById("pTagIdForArithmetic").innerHTML = x2;

x += 5;
document.getElementById("pTagIdForAdditionAssignment").innerHTML = x;

let text1 = "A";
let text2 = "B";
let result = text1 < text2;
document.getElementById("pTagIdForStringComparison").innerHTML = result;

// Note that strings are compared alphabetically
let _text1 = "20";
let _text2 = "5";
let _result = _text1 < _text2;
document.getElementById("pTagIdForStringComparison2").innerHTML = _result;

// The + can also be used to add (concatenate) strings
let $text1 = "Pushpendra";
let $text2 = "Singh";
let $text3 = $text1 + " " + $text2;
document.getElementById("pTagIdForStringAddition").innerHTML = $text3;

// The += assignment operator can also be used to add (concatenate) strings
let $$text1 = "What a very ";
$$text1 += "nice day";
document.getElementById("pTagIdForStringAdditionAssignment").innerHTML =
  $$text1;

// Adding two numbers, will return the sum, but adding a number and a string will return a string.
let $x = 5 + 5;
let $y = "5" + 5;
let $z = "Hello" + 5;
document.getElementById("pTagIdForStringNumberAddition").innerHTML = `${x}
${y}
${z}`;
