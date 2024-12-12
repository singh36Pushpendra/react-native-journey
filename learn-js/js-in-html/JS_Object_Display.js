// Create an object
const person = {
  name: "John",
  age: 30,
  city: "New York",
};

document.getElementById("pTagIdToDisplayObject").innerHTML = person;

// Display properties
document.getElementById(
  "pTagIdToDisplayObjectPropByName"
).innerHTML = `${person.name}, ${person.age}, ${person.city}`;

/**
 * The properties of an object can be collected in a loop.
 */

// Build a text
let text = "";
for (let x in person) {
  text += person[x] + " ";
}

document.getElementById("pTagIdToDisplayObjectPropInALoop").innerHTML = text;
/**
 * You must use person[x] in the loop.
 * person.x will not work (Because x is the loop variable).
 */

// Create an array
const myArray = Object.values(person);

// Display the array
document.getElementById("pTagIdToDisplayObjectUsingObjectValues").innerHTML =
  myArray;

const fruits = {
  Bananas: 300,
  Oranges: 200,
  Apples: 500,
};

let $text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  $text += `${fruit}: ${value}<br>`;
}
document.getElementById("pTagIdToDisplayObjectUsingObjectEntries").innerHTML =
  $text;

// Stringify object
let myString = JSON.stringify(person);

// Display String
document.getElementById("pTagIdToDisplayObjectUsingJSONStringify").innerHTML =
  myString;
