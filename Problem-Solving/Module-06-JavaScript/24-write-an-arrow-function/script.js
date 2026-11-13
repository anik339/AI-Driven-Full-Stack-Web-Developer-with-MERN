// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const multiply = (a, b) => a * b;
  const square = number => number * number;
  output.textContent = `Multiply: ${multiply(4, 6)}\nSquare: ${square(7)}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
