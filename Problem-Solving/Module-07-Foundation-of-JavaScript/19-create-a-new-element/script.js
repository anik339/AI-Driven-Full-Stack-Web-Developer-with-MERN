// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const heading = document.createElement("h3");
  const paragraph = document.createElement("p");
  heading.textContent = "New heading";
  paragraph.textContent = "This paragraph was created with createElement().";
  area.replaceChildren(heading, paragraph);
  output.textContent = `Created: ${heading.tagName} and ${paragraph.tagName}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
