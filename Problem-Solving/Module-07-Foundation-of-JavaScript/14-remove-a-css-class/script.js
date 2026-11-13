// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const card = document.createElement("div");
  card.className = "demo-card temporary active";
  card.textContent = "Temporary class will be removed.";
  area.replaceChildren(card);
  card.classList.remove("temporary");
  output.textContent = `Classes now: ${card.className}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
