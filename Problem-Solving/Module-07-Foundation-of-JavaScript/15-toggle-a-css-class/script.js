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
  panel.textContent = "Watch the active class.";
  area.replaceChildren(panel);
  const first = panel.classList.toggle("active");
  const second = panel.classList.toggle("active");
  output.textContent = `After first toggle: ${first}\nAfter second toggle: ${second}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
