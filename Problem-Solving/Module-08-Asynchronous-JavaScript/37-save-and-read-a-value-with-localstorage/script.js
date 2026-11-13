// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const key = "my-learning-goal";
  const value = "Become a confident JavaScript developer";
  localStorage.setItem(key, value);
  const savedValue = localStorage.getItem(key);
  output.textContent = `Saved value:\n${savedValue}`;
  area.textContent = "This value remains for this browser origin after reopening the browser.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
