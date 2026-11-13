// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const age = 19;
  let message;
  if (age >= 18) {
    message = "You meet the age requirement.";
  } else {
    message = "You do not meet the age requirement.";
  }
  output.textContent = message;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
