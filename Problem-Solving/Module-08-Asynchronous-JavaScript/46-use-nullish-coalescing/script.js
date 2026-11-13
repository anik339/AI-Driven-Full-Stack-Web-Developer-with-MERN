// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const quantity = 0;
  const isActive = false;
  const userName = "";
  output.textContent =
    `quantity ?? 10 = ${quantity ?? 10}\n` +
    `quantity || 10 = ${quantity || 10}\n` +
    `isActive ?? true = ${isActive ?? true}\n` +
    `userName ?? Guest = ${userName ?? "Guest"}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
