const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

document.getElementById("pTagIdToAccessObjectUsingDot").innerHTML =
  person.firstName + " is " + person.age + " years old.";

document.getElementById(
  "pTagIdToAccessObjectUsingBrackets"
).innerHTML = `${person["firstName"]} is ${person["age"]} years old!`;

let x = "firstName";
let y = "age";

document.getElementById(
  "pTagIdToAccessObjectUsingExpression"
).innerHTML = `${person[x]} age = ${person[y]}`;

person.nationality = "English";

delete person.age; // or delete person["age"] or delete person[y]

document.getElementById(
  "pTagIdToCheckDeleteProp"
).innerHTML = `${person[x]} age = ${person[y]}`;

const myObj = {
  name: "John",
  age: 30,
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
};

let p1 = "myCars",
  p2 = "car1";
document.getElementById("pTagIdToAccessObjectOfObject").innerHTML =
  myObj[p1][p2];
/**
 * myObj.myCars.car1 or myObj["myCars"].car1 or myObj["myCars"]["car1"] or myObj[p1][p2]
 */
