// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function demonstrateTDZ() {
    let message = "";
    try {
      console.log(valueBeforeDeclaration); // Expected ReferenceError.
    } catch (error) {
      message = `${error.name}: cannot access before initialization.`;
    }
    let valueBeforeDeclaration = "Now initialized";
    return `${message}\nAfter declaration: ${valueBeforeDeclaration}`;
  }
  output.textContent = demonstrateTDZ();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
