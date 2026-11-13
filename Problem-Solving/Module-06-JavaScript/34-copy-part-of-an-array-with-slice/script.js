// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const numbers = [10, 20, 30, 40, 50];
  const middle = numbers.slice(1, 4);
  output.textContent = `Original: ${numbers.join(", ")}\nSlice: ${middle.join(", ")}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
