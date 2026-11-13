// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const card = document.createElement("div");
  card.textContent = "Styled using JavaScript";
  card.style.backgroundColor = "#e7efff";
  card.style.padding = "18px";
  card.style.borderRadius = "12px";
  area.replaceChildren(card);
  output.textContent = `Background: ${card.style.backgroundColor}\nPadding: ${card.style.padding}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
