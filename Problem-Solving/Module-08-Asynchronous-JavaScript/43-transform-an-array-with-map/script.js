// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const prices = [100, 200, 300];
  const pricesWithTax = prices.map(price => price * 1.1);
  output.textContent = `Original: ${prices.join(", ")}\nWith tax: ${pricesWithTax.map(value => value.toFixed(2)).join(", ")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
