// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function waitForMessage() {
    return new Promise(resolve => {
      setTimeout(() => resolve("The Promise completed successfully."), 500);
    });
  }
  output.textContent = "Promise is pending...";
  waitForMessage().then(message => output.textContent = message);
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
