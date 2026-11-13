// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const button = document.createElement("button");
  button.className = "demo-button";
  button.textContent = "Click me";
  area.replaceChildren(button);
  button.addEventListener("click", () => {
    output.textContent = "Great! The click event was handled.";
    button.textContent = "Clicked!";
  });
  output.textContent = "Click the button in the demo area.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
