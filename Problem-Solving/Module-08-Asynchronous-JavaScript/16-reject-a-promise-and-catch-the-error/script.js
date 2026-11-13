// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function loadData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error("Demo data could not be loaded.")), 300);
    });
  }
  output.textContent = "Trying to load data...";
  loadData()
    .then(result => output.textContent = result)
    .catch(error => output.textContent = `Handled rejection: ${error.message}`);
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
