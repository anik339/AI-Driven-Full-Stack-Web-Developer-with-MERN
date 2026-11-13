// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function createUnstableTask() {
    let attempts = 0;
    return async function runTask() {
      attempts++;
      await new Promise(resolve => setTimeout(resolve, 200));
      if (attempts < 3) throw new Error(`Attempt ${attempts} failed.`);
      return `Success on attempt ${attempts}.`;
    };
  }
  async function runWithRetries() {
    const task = createUnstableTask();
    const messages = [];
    const maxAttempts = 3;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        messages.push(await task());
        break;
      } catch (error) {
        messages.push(error.message);
        if (attempt === maxAttempts) messages.push("No more retries.");
      }
    }
    output.textContent = messages.join("\n");
  }
  runWithRetries();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
