// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  sessionStorage.setItem("temporary-draft", "My temporary message");
  const draft = sessionStorage.getItem("temporary-draft");
  output.textContent = `Draft in this tab: ${draft}`;
  sessionStorage.removeItem("temporary-draft");
  output.textContent += `\nAfter removeItem(): ${sessionStorage.getItem("temporary-draft")}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
