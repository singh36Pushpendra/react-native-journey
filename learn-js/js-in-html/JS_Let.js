var y = "omkar";
{
  let x = 2; // Block scope variable
  //   let x = "Om"; Can't be redeclare
  document.getElementById("pTagIdForLet").innerHTML = x;

  var y = 7; // Global scope variable
  var y = "pushpa"; // Can be redeclare
}
var y = 5;

{
  let x = "Namah";
}
{
  let x = 88;
}
// console.log(x); Not accessible here
console.log(y);
document.getElementById("pTagIdForVar").innerHTML = y;
try {
  carName = "Volvo2";
  document.getElementById("pTagIdForVar").innerHTML = carName;
  let carName; // Uncaught ReferenceError: Cannot access 'carName' before initialization}
} catch (err) {
  document.getElementById("pTagIdForCarName").innerHTML = err;
}
