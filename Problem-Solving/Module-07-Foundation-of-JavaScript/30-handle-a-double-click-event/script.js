// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const card = document.createElement("div");
  card.className = "demo-card";
  card.textContent = "Double-click this card.";
  area.replaceChildren(card);
  card.addEventListener("dblclick", () => {
    card.textContent = "Double-click detected!";
    output.textContent = "The dblclick event fired.";
  });
  output.textContent = "Double-click the card.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
