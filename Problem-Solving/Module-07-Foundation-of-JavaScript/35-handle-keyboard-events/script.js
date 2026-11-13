// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const input = document.createElement("input");
  input.className = "demo-input";
  input.placeholder = "Press any key here";
  area.replaceChildren(input);
  input.addEventListener("keydown", event => {
    output.textContent = `Key: ${event.key}\nCode: ${event.code}`;
  });
  input.focus();
  output.textContent = "Focus the input and press a key.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
