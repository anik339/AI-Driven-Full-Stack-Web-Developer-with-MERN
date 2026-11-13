// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const outer = document.createElement("div");
  outer.className = "demo-card";
  outer.textContent = "Outer container ";
  const button = document.createElement("button");
  button.className = "demo-button";
  button.textContent = "Inner button";
  outer.append(button);
  area.replaceChildren(outer);
  outer.addEventListener("click", event => {
    output.textContent = `target: ${event.target.tagName}\ncurrentTarget: ${event.currentTarget.tagName}`;
  });
  output.textContent = "Click the inner button.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
