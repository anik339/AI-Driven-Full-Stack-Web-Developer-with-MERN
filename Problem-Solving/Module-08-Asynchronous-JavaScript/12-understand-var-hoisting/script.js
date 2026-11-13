// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function showHoisting() {
    // The declaration is hoisted, but the assigned value is not.
    const before = courseName;
    var courseName = "JavaScript";
    return `Before assignment: ${before}\nAfter assignment: ${courseName}`;
  }
  output.textContent = showHoisting();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
