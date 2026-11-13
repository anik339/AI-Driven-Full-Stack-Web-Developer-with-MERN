// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function sum(...numbers) {
    // numbers is an array containing all supplied arguments.
    return numbers.reduce((total, number) => total + number, 0);
  }
  output.textContent = `sum(2, 3) = ${sum(2, 3)}\nsum(2, 3, 4, 5) = ${sum(2, 3, 4, 5)}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
