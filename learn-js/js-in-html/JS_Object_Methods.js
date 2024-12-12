const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

document.getElementById("pTagIdForFunctionDefinition").innerHTML =
  person.fullName();

document.getElementById("pTagIdForPersonFullName").innerHTML = person.fullName;

person.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(`Name = ${person.name()}`);
console.log(`Name = ${person.name().toUpperCase()}`);
