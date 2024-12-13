/**
 * To create an object type we use an object constructor function.
 */

// Constructor function for person objects.
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Indian"; // Property Default Values
  this.fullName = function () {
    // A Constructor function method.
    return this.firstName + " " + this.lastName;
  };
}

// Create a Person object
const myFather = new Person("Narendra", "Thakur", 58, "black");

// Display age
document.getElementById(
  "pTagIdForObjectTypePerson"
).innerHTML = `My father age = ${myFather.age}`;

const person = new Person("John", "Doe", 50, "blue");
document.getElementById(
  "pTagIdForObjectTypePerson2"
).innerHTML = `Person name: ${person.firstName} ${person.lastName}`;

console.log(myFather.nationality);

// Adding a property to a created object is easy
myFather.email = "narendra.singh@shrimad.com";

console.log(myFather.email);

// You can NOT add a new property to an object constructor
Person.phone = "8983298232";

console.log(myFather.phone);

const person2 = new Person("Shubham", "Thakur", 23, "black");
console.log(person2.phone);

// To add a new property, you must add it to the constructor function prototype:
Person.prototype.phone = "9923832983";

console.log(myFather.phone);
console.log(person.phone);
console.log(person2.phone);
console.log(myFather.fullName());

// Adding a method to a created object is easy:
person2.changeLastName = function (name) {
  this.lastName = name;
};

person2.changeLastName("Mendwar");
console.log(person2.fullName());

/* Person.changeFirstName = function (name) {
  this.firstName = name;
}; */
// person.changeFirstName("Johnny"); Uncaught TypeError: person.changeFirstName is not a function

/**
 * Adding a new method must be done to the constructor function prototype:
 */
Person.prototype.changeFirstName = function (name) {
  this.firstName = name;
};
person.changeFirstName("Smith");
console.log(person.fullName());

console.log(typeof new Object());
console.log(typeof new Array());
console.log(typeof new Map());
console.log(typeof new Set());
console.log(typeof new Date());
console.log(typeof new RegExp());
console.log(typeof new Function());

console.log("\nDid You know\n");
console.log(typeof "");
console.log(typeof 0);
console.log(typeof false);
console.log(typeof {});
console.log(typeof []);
console.log(typeof /()/);
console.log(typeof function () {});
