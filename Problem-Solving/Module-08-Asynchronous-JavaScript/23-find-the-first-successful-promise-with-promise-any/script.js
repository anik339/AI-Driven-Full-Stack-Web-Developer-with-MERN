// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const task = (name, ms, fail) => new Promise((resolve, reject) => setTimeout(
    () => fail ? reject(new Error(`${name} failed`)) : resolve(`${name} succeeded`), ms
  ));
  Promise.any([
    task("Server A", 150, true),
    task("Server B", 350, false),
    task("Server C", 500, false)
  ]).then(result => output.textContent = result)
    .catch(error => output.textContent = `Every task failed: ${error.message}`);
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
