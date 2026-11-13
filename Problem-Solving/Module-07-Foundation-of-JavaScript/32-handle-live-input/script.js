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
  input.placeholder = "Type your name";
  const count = document.createElement("p");
  count.textContent = "Characters: 0";
  area.replaceChildren(input, count);
  input.addEventListener("input", () => {
    count.textContent = `Characters: ${input.value.length}`;
    output.textContent = `Current value: ${input.value}`;
  });
  output.textContent = "Type in the input field.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
