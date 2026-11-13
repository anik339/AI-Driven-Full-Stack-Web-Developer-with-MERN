// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const wait = (name, ms) => new Promise(resolve => setTimeout(() => resolve(name), ms));
  async function loadDashboard() {
    const start = performance.now();
    const results = await Promise.all([
      wait("Profile loaded", 600),
      wait("Messages loaded", 300),
      wait("Settings loaded", 500)
    ]);
    const seconds = ((performance.now() - start) / 1000).toFixed(1);
    output.textContent = `${results.join("\n")}\nTotal: about ${seconds}s`;
  }
  loadDashboard();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
