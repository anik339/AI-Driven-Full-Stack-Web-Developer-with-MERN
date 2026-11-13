// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  area.innerHTML = "<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>";
  const items = area.querySelectorAll("li");
  items.forEach((item, index) => item.textContent = `${index + 1}. ${item.textContent}`);
  output.textContent = `Number of items: ${items.length}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
