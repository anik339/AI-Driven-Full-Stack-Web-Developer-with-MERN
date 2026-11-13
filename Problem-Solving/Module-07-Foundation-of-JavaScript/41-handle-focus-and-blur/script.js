// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const input = document.createElement("input");
  input.className = "demo-input"; input.placeholder = "Click inside, then outside";
  area.replaceChildren(input);
  input.addEventListener("focus", () => output.textContent = "Input is focused.");
  input.addEventListener("blur", () => output.textContent = "Input lost focus.");
  input.focus();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
