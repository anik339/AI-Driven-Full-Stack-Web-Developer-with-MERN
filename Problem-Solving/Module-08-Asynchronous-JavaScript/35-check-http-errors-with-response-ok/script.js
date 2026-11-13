// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  async function requestMissingResource() {
    output.textContent = "Requesting a missing resource...";
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/999999");
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      const data = await response.json();
      output.textContent = `HTTP ${response.status}\n${JSON.stringify(data, null, 2)}`;
    } catch (error) {
      output.textContent = `Handled result: ${error.message}`;
    }
  }
  requestMissingResource();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
