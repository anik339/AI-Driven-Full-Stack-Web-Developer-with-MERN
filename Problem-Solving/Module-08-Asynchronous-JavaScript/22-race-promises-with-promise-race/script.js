// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const wait = (name, ms) => new Promise(resolve => setTimeout(() => resolve(name), ms));
  output.textContent = "Two tasks are racing...";
  Promise.race([wait("Fast task", 250), wait("Slow task", 800)])
    .then(winner => output.textContent = `First result: ${winner}`);
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
