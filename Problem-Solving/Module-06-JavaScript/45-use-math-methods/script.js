// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const value = 7.65;
  const values = [12, 4, 28, 9];
  output.textContent = `Round: ${Math.round(value)}\nFloor: ${Math.floor(value)}\nCeil: ${Math.ceil(value)}\nMin: ${Math.min(...values)}\nMax: ${Math.max(...values)}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
