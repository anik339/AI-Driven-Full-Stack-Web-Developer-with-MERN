// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const values = [25, NaN, Infinity, "25"];
  output.textContent = values.map(value => `${String(value)} → Number.isNaN: ${Number.isNaN(value)}, finite: ${Number.isFinite(value)}`).join("\n");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
