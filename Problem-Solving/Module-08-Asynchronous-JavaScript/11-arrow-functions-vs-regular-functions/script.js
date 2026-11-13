// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const addRegular = function(a, b) { return a + b; };
  const addArrow = (a, b) => a + b;
  const user = {
    name: "Sam",
    regularMethod() { return this.name; },
    arrowMethod: () => "Arrow this comes from the outer scope."
  };
  output.textContent = `Regular add: ${addRegular(4, 6)}\nArrow add: ${addArrow(4, 6)}\nRegular method: ${user.regularMethod()}\nArrow method: ${user.arrowMethod()}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
