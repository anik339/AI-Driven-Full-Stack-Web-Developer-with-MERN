// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function createMultiplier(multiplier) {
    // The returned function remembers multiplier.
    return number => number * multiplier;
  }
  const double = createMultiplier(2);
  const triple = createMultiplier(3);
  output.textContent = `Double 8: ${double(8)}\nTriple 8: ${triple(8)}\nDouble 5: ${double(5)}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
