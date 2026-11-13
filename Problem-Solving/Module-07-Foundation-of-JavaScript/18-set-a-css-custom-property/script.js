// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const card = document.createElement("div");
  card.textContent = "Theme color comes from a CSS variable.";
  card.style.setProperty("--card-color", "#d9f7e8");
  card.style.backgroundColor = "var(--card-color)";
  card.style.padding = "18px";
  area.replaceChildren(card);
  output.textContent = `Custom property: ${card.style.getPropertyValue("--card-color")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
