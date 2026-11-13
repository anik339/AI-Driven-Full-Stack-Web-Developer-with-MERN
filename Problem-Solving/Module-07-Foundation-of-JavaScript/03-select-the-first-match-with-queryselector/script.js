// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  area.innerHTML = '<p class="notice">First notice</p><p class="notice">Second notice</p>';
  const first = area.querySelector(".notice");
  first.textContent = "The first notice was selected!";
  output.textContent = `Selected: ${first.textContent}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
