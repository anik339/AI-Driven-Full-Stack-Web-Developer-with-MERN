// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const delay = message => new Promise(resolve => setTimeout(() => resolve(message), 600));
  async function showResult() {
    output.textContent = "Waiting...";
    const result = await delay("The awaited task is finished.");
    output.textContent = result;
  }
  showResult();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
