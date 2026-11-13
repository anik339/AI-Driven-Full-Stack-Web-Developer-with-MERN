// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const result = (function () {
    const privateNumber = 10;
    return privateNumber * 5;
  })();
  output.textContent = `IIFE result: ${result}`;
  area.textContent = "privateNumber is inside the IIFE and is not available outside.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
