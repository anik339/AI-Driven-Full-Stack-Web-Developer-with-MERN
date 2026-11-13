// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const result = [];
  for (let i = 1; i <= 10; i++) {
    if (i === 3) continue; // Skip 3 only.
    if (i === 8) break;    // Stop before adding 8.
    result.push(i);
  }
  output.textContent = result.join(", ");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
