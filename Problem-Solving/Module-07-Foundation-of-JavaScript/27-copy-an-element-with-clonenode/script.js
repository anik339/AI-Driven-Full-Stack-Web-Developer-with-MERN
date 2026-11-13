// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const original = document.createElement("article");
  original.className = "demo-card";
  original.innerHTML = "<h3>Original card</h3><p>Card content</p>";
  const copy = original.cloneNode(true); // true copies children too.
  copy.querySelector("h3").textContent = "Cloned card";
  area.replaceChildren(original, copy);
  output.textContent = `Cards shown: ${area.children.length}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
