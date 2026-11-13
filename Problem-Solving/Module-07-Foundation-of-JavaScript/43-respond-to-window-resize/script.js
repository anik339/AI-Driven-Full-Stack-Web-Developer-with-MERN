// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function showSize() {
    output.textContent = `Width: ${window.innerWidth}px\nHeight: ${window.innerHeight}px`;
  }
  window.addEventListener("resize", showSize);
  showSize();
  area.textContent = "Resize the browser window to update the values.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
