// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const prices = [100, 200, 300];
  const withTax = prices.map(price => price * 1.1);
  output.textContent = withTax.map(price => price.toFixed(2)).join(", ");
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
