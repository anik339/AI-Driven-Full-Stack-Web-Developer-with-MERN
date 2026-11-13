// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  let count = 0;
  const value = document.createElement("strong"); value.textContent = count;
  const minus = document.createElement("button"); minus.className = "demo-button"; minus.textContent = "−";
  const plus = document.createElement("button"); plus.className = "demo-button"; plus.textContent = "+";
  function render() { value.textContent = count; output.textContent = `Current count: ${count}`; }
  minus.addEventListener("click", () => { count--; render(); });
  plus.addEventListener("click", () => { count++; render(); });
  area.replaceChildren(minus, value, plus); render();
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
