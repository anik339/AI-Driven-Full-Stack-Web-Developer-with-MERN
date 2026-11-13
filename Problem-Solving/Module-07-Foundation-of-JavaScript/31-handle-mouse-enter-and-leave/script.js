// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const panel = document.createElement("div");
  panel.className = "demo-card";
  panel.textContent = "Move your mouse over this panel.";
  area.replaceChildren(panel);
  panel.addEventListener("mouseenter", () => {
    panel.textContent = "Pointer entered!";
    output.textContent = "mouseenter event";
  });
  panel.addEventListener("mouseleave", () => {
    panel.textContent = "Pointer left. Move over me again.";
    output.textContent = "mouseleave event";
  });
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
