// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const paragraph = document.createElement("p");
  paragraph.textContent = "This paragraph will be removed.";
  area.replaceChildren(paragraph);
  paragraph.remove();
  output.textContent = `Paragraph still connected? ${paragraph.isConnected}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
