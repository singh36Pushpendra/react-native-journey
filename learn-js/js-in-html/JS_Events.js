// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get the button element by its ID
  const button = document.getElementById("buttonIdToShowTime");

  // Attach the event listener to the button
  button.addEventListener("click", handleClick);
});

// Define the function to run on button click
function handleClick() {
  document.getElementById("pTagIdToShowDate").innerHTML = Date();
  // button.innerHTML = Date();
}
