// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const form = document.createElement("form");
  const input = document.createElement("input");
  input.className = "demo-input"; input.name = "name"; input.value = "Anik";
  const reset = document.createElement("button");
  reset.type = "reset"; reset.className = "demo-button"; reset.textContent = "Reset form";
  form.append(input, reset); area.replaceChildren(form);
  form.addEventListener("reset", () => output.textContent = "The form is returning to its original values.");
  output.textContent = "Change the input, then click Reset form.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
