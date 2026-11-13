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
  input.className = "demo-input";
  input.placeholder = "Your name";
  input.required = true;
  const button = document.createElement("button");
  button.className = "demo-button";
  button.textContent = "Submit";
  form.append(input, button);
  area.replaceChildren(form);
  form.addEventListener("submit", event => {
    event.preventDefault(); // Stop the browser's normal page navigation.
    output.textContent = `Welcome, ${input.value.trim()}!`;
  });
  output.textContent = "Enter a name and submit the form.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
