// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const numbers = [];
  for (let i = 1; i <= 5; i++) {
    numbers.push(i); // Save each loop value for display.
  }
  output.textContent = numbers.join(", ");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
