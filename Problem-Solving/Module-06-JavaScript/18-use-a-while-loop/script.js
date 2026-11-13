// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  let count = 1;
  const values = [];
  while (count <= 5) {
    values.push(count);
    count++;
  }
  output.textContent = values.join(" → ");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
