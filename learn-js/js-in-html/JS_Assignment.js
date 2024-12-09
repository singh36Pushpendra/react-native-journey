let x = 10,
  y = 5;
x += y;
document.getElementById(
  "pTagIdForAdditionAssignment"
).innerHTML = `x (x += y) = ${x}`;

let text = "Hello";
text += " World";
document.getElementById(
  "pTagIdForStringAdditionAssignment"
).innerHTML = `text (text += " World") = ${text}`;
x = 10;
x -= y;

document.getElementById(
  "pTagIdForSubtractionAssignment"
).innerHTML = `x (x -= y) = ${x}`;

x = 10;
x *= y;
document.getElementById(
  "pTagIdForMultiplicationAssignment"
).innerHTML = `x (x *= y) = ${x}`;

x = 10;
x **= y;
document.getElementById(
  "pTagIdForExponentiationAssignment"
).innerHTML = `x (x **= y) = ${x}`;

x = 10;
x /= y;
document.getElementById(
  "pTagIdForDivisionAssignment"
).innerHTML = `x (x /= y) = ${x}`;

x = 10;
x %= y;
document.getElementById(
  "pTagIdForRemainderAssignment"
).innerHTML = `x (x %= y) = ${x}`;

x = 10;
x <<= y;
document.getElementById(
  "pTagIdForLeftShiftAssignment"
).innerHTML = `x (x <<= y) = ${x}`;

x = 10;
x >>= y;
document.getElementById(
  "pTagIdForRightShiftAssignment"
).innerHTML = `x (x >>= y) = ${x}`;

x = 10;
x >>>= y;
document.getElementById(
  "pTagIdForUnsignedRightShiftAssignment"
).innerHTML = `x (x >>>= y) = ${x}`;

x = 10;
x &= y;
document.getElementById(
  "pTagIdForBitwiseAndAssignment"
).innerHTML = `x (x &= y) = ${x}`;

x = 10;
x |= y;
document.getElementById(
  "pTagIdForBitwiseOrAssignment"
).innerHTML = `x (x |= y) = ${x}`;

x = 10;
x ^= y;
document.getElementById(
  "pTagIdForBitwiseXorAssignment"
).innerHTML = `x (x ^= y) = ${x}`;

x = 10;
x &&= y;
document.getElementById(
  "pTagIdForLogicalAndAssignment"
).innerHTML = `x (x &&= y) = ${x}`;

x = 10;
x ||= y;
document.getElementById(
  "pTagIdForLogicalOrAssignment"
).innerHTML = `x (x ||= y) = ${x}`;

x = null;
x ??= y; // If the first value is undefined or null, the second value is assigned.
document.getElementById(
  "pTagIdForNullishCoalescingAssignment"
).innerHTML = `x (x ??= y) = ${x}`;
