// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const globalMessage = "I am in the outer scope.";
  function showFunctionScope() {
    const functionMessage = "I belong to this function.";
    let blockMessage = "";
    if (true) {
      const onlyInsideBlock = "I belong to this block.";
      blockMessage = onlyInsideBlock;
    }
    return `${functionMessage}\n${blockMessage}`;
  }
  output.textContent = `${globalMessage}\n${showFunctionScope()}`;
  area.textContent = "A block-only variable cannot be read outside its block.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
