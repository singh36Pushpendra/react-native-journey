// const PI; Uncaught SyntaxError: Missing initializer in const declaration
// PI = 3.14; Uncaught TypeError: Assignment to constant variable.
// PI = PI + 10; Uncaught TypeError: Assignment to constant variable.
const PI = 3.14159265359;
console.log(PI);
document.getElementById("pTagIdForConst").innerHTML = PI;

/**
 * Constant Objects and Arrays.
 */

// Create a constant array.
const cars = ["Saab", "Volvo", "BMW"];

// Change an element.
cars[0] = "Toyota";

// Push an element.
cars.push("Audi");

console.log(cars);
document.getElementById("pTagIdForArray").innerHTML = `${cars}`;

// Cannot reassign the const array.
try {
  const cars = ["Saab", "Volvo", "BMW"];
  cars = ["Audi", "Tesla"];
} catch (err) {
  console.log(err);
  document.getElementById("pTagIdForArrayErr").innerHTML = err;
}

// Create a const object.
const car = { type: "Fiat", model: "500", color: "white" };

// Change a property.
car.color = "red";

// You can add a property.
car.owner = "Johnson";

document.getElementById(
  "pTagIdForObjectProperty"
).innerHTML = `Car detail: type = ${car.type}, model = ${car.model}, color = ${car.color} and owner = ${car.owner}`;

try {
  const car = { type: "Fiat", model: "500", color: "white" };
  car = { type: "Volvo", model: "EX60", color: "red" };
} catch (carErr) {
  console.log(carErr);
  document.getElementById("pTagIdForObjectErr").innerHTML = carErr;
}

const x = 10;

{
  const x = 2;
}
document.getElementById("pTagIdForBlockScopeConst").innerHTML = x;

try {
  alert(carName);
  const carName = "Volvo";
} catch (error) {
  console.log(error);
  document.getElementById("pTagIdForConstErr").innerHTML = error;
}
