// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function outerFunction() {
    const courseName = "JavaScript";
    function innerFunction() {
      // The inner function can read the variable in its outer lexical scope.
      return `I am learning ${courseName}.`;
    }
    return innerFunction();
  }
  output.textContent = outerFunction();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
