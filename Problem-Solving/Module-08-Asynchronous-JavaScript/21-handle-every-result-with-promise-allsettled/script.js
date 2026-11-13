// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const task = (name, fail) => new Promise((resolve, reject) => {
    setTimeout(() => fail ? reject(new Error(`${name} failed`)) : resolve(`${name} completed`), 250);
  });
  async function runTasks() {
    const results = await Promise.allSettled([
      task("Profile", false), task("Messages", true), task("Settings", false)
    ]);
    output.textContent = results.map((result, index) =>
      result.status === "fulfilled"
        ? `${index + 1}. SUCCESS: ${result.value}`
        : `${index + 1}. ERROR: ${result.reason.message}`
    ).join("\n");
  }
  runTasks();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
