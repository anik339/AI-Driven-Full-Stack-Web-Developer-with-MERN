// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const card = document.createElement("article");
  card.className = "demo-card product-card";
  card.innerHTML = "<h3>Keyboard</h3>";
  const button = document.createElement("button");
  button.className = "demo-button"; button.textContent = "Select product";
  card.append(button); area.replaceChildren(card);
  button.addEventListener("click", event => {
    const parentCard = event.target.closest(".product-card");
    output.textContent = `Found card: ${parentCard.querySelector("h3").textContent}`;
  });
  output.textContent = "Click Select product.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
