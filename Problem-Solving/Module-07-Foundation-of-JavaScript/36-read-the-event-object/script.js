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
  button.textContent = "Trigger event";
  area.replaceChildren(button);
  button.addEventListener("click", event => {
    output.textContent = `Type: ${event.type}\nTarget: ${event.target.tagName}\nTimestamp: ${Math.round(event.timeStamp)} ms`;
  });
  output.textContent = "Click the demo button to inspect the event object.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
