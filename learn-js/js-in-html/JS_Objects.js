const car = { type: "Fiat", model: "500", color: "white" };
document.getElementById(
  "pTagIdForCarObjectValues"
).innerHTML = `Car type: ${car.type}, model: ${car.model}, color: ${car.color}`;

// Create an object using an Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

document.getElementById(
  "pTagIdForPersonObjectValues"
).innerHTML = `Person firstName = ${person["firstName"]}, lastName = ${person["lastName"]}, age = ${person["age"]} and eyeColor = ${person["eyeColor"]}`;

// Create an empty object
const person2 = {};

person2.firstName = "Johnny";
person2.lastName = "Bravo";
person2.age = 25;
person2.eyeColor = "Brown";

document.getElementById(
  "pTagIdForPerson2ObjectValues"
).innerHTML = `Person2 firstName = ${person2.firstName}, lastName = ${person2.lastName}, age = ${person2.age} and eyeColor = ${person2.eyeColor}`;

// Create an object using new keyword
const person3 = new Object();

// Add properties
person3.firstName = "Chinu";
person3.lastName = "Umariya";
person3.age = 22;
person3.eyeColor = "brown";

document.getElementById(
  "pTagIdForPerson3ObjectValues"
).innerHTML = `Person3 firstName = ${person3.firstName}, lastName = ${person3.lastName}, age = ${person3.age} and eyeColor = ${person3.eyeColor}`;

// For readability, simplicity and execution speed, use the object literal method.

const personWithAction = {
  firstName: "Param",
  lastName: "Dhar",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.getElementById("pTagIdForPersonFullName").innerHTML =
  personWithAction.fullName();

// Object are mutable
const x = person;
x.email = "john.doe@gmail.com";
console.log(person.email);

person.age = 40;
console.log(x.age);

let y = person;
person.address = "California";
console.log(y.address);
