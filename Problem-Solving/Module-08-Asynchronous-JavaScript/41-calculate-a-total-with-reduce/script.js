// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const prices = [120, 80, 50, 150];
  const total = prices.reduce((accumulator, currentPrice) => {
    return accumulator + currentPrice;
  }, 0);
  output.textContent = `Prices: ${prices.join(", ")}\nTotal: ${total}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
