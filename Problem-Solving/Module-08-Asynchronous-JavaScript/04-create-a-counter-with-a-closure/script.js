// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function createCounter() {
    let count = 0; // The returned function keeps access to this variable.
    return function increment() {
      count++;
      return count;
    };
  }
  const counter = createCounter();
  output.textContent = `First: ${counter()}\nSecond: ${counter()}\nThird: ${counter()}`;
  area.textContent = "The inner function remembers count after createCounter returns.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
