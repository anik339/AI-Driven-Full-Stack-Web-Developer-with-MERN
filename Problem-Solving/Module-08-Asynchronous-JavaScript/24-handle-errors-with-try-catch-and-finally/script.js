// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function divide(a, b) {
    if (b === 0) throw new Error("You cannot divide by zero.");
    return a / b;
  }
  try {
    const answer = divide(20, 0);
    output.textContent = `Answer: ${answer}`;
  } catch (error) {
    output.textContent = `Handled error: ${error.message}`;
  } finally {
    area.textContent = "The calculation attempt has finished.";
  }
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
