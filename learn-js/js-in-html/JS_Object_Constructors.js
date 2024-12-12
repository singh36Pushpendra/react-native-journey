/**
 * To create an object type we use an object constructor function.
 */

// Constructor function for person objects.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

// Create a Person object
const myFather = new Person("Narendra", "Thakur", 58, "black");

// Display age
document.getElementById(
  "pTagIdForObjectTypePerson"
).innerHTML = `My father age = ${myFather.age}`;
