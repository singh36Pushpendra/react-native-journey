// Function to compute the product of p1 and p2
function computeProduct(p1, p2) {
  return p1 * p2; // Function returns the product of a and b
}

// Function to convert the value Fahrenheit to Celsius
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

// Function is called, the return value will end up in result
let result = computeProduct(4, 3);

document.getElementById("pTagIdForResult").innerHTML = result;

let value = toCelsius(77);
document.getElementById("pTagIdForCelsiusValue").innerHTML = value;
document.getElementById("pTagIdForIncorrectParam").innerHTML = toCelsius();
document.getElementById("pTagIdForFunction").innerHTML = toCelsius;

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
