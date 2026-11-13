// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  area.innerHTML = "<p id='visible-text'>Original visible text</p>";
  const paragraph = area.querySelector("#visible-text");
  paragraph.innerText = "The visible text is now updated.";
  output.textContent = `innerText: ${paragraph.innerText}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
