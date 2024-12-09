let xx = 100 + 50;

let a = 2,
  b = 3;
let $x = a + b;

let _x = (100 + 50) * a;

document.getElementById("pTagIdForLiteral").innerHTML = xx;
document.getElementById("pTagIdForVariable").innerHTML = $x;
document.getElementById("pTagIdForExpression").innerHTML = _x;

let x = 5,
  y = 2;
document.getElementById("pTagIdForAddition").innerHTML = x + y;
document.getElementById("pTagIdForSubtraction").innerHTML = x - y;
document.getElementById("pTagIdForMultiplication").innerHTML = x * y;
document.getElementById("pTagIdForDivision").innerHTML = x / y;
document.getElementById("pTagIdForModulus").innerHTML = x % y;

x++;
let z = x;
document.getElementById("pTagIdForIncrement").innerHTML = z;
y--;
z = y;
document.getElementById("pTagIdForDecrement").innerHTML = z;

z = x ** 2;
document.getElementById("pTagIdForExponentiation").innerHTML = z;

// x ** 2 produces the same result as Math.pow(x, 2)
document.getElementById("pTagIdForMathPow").innerHTML = Math.pow(x, 2);

x = 100 + 50 * 3;
document.getElementById(
  "pTagIdForPrecedence1"
).innerHTML = `100 + 50 * 3 = ${x}`;

x = (100 + 50) * 3;
document.getElementById(
  "pTagIdForPrecedence2"
).innerHTML = `(100 + 50) * 3 = ${x}`;

x = 100 + 50 - 3;
document.getElementById(
  "pTagIdForPrecedence3"
).innerHTML = `100 + 50 -3 = ${x}`;

x = (100 / 50) * 3;
document.getElementById(
  "pTagIdForPrecedence4"
).innerHTML = `100 / 50 * 3 = ${x}`;
