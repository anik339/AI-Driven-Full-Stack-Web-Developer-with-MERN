// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const wait = (name, ms) => new Promise(resolve => setTimeout(() => resolve(name), ms));
  async function runTasks() {
    const start = performance.now();
    const first = await wait("Task A done", 350);
    const second = await wait("Task B done", 350);
    const seconds = ((performance.now() - start) / 1000).toFixed(1);
    output.textContent = `${first}\n${second}\nTotal: about ${seconds}s`;
  }
  runTasks();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
