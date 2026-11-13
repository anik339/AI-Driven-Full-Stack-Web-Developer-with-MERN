// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  Promise.resolve("Step 1 completed")
    .then(message => {
      output.textContent = message;
      return "Step 2 completed";
    })
    .then(message => output.textContent += `\n${message}`)
    .catch(error => output.textContent += `\nError: ${error.message}`)
    .finally(() => output.textContent += "\nFinally: cleanup is complete.");
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
