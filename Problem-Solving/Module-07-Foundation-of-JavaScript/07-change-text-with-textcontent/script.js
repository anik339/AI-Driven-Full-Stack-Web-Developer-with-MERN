// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This is the old paragraph.";
  area.replaceChildren(paragraph);
  paragraph.textContent = "This paragraph was updated with textContent.";
  output.textContent = paragraph.textContent;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
