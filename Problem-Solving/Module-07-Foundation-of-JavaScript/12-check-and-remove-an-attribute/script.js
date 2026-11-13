// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const button = document.createElement("button");
  button.textContent = "Submit";
  button.setAttribute("disabled", "");
  area.replaceChildren(button);
  const before = button.hasAttribute("disabled");
  button.removeAttribute("disabled");
  const after = button.hasAttribute("disabled");
  output.textContent = `Disabled before: ${before}\nDisabled after: ${after}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
