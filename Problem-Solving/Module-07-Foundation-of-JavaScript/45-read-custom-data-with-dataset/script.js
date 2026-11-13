// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const button = document.createElement("button");
  button.className = "demo-button"; button.textContent = "Product details";
  button.dataset.productId = "P-104"; button.dataset.productName = "Wireless Mouse";
  area.replaceChildren(button);
  button.addEventListener("click", () => {
    output.textContent = `ID: ${button.dataset.productId}\nName: ${button.dataset.productName}`;
  });
  output.textContent = "Click the product button.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
