// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const products = [
    { name: "Keyboard", price: 40 },
    { name: "Mouse", price: 20 },
    { name: "Monitor", price: 180 }
  ];
  const productNames = products.map(({ name }) => name);
  output.textContent = `Product names:\n${productNames.join("\n")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
