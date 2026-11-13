// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const colors = ["red", "green", "blue", "purple"];
  const first = colors[0];
  const last = colors[colors.length - 1];
  output.textContent = `First: ${first}\nLast: ${last}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
