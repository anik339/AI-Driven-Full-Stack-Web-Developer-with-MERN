// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const color = "blue";
  if (true) {
    const color = "green"; // This inner variable shadows the outer one.
    output.textContent = `Inside block: ${color}`;
  }
  output.textContent += `\nOutside block: ${color}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
