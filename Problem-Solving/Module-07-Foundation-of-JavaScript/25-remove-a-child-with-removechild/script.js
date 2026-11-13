// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const list = document.createElement("ul");
  list.innerHTML = "<li>HTML</li><li>CSS</li><li>JavaScript</li>";
  const removed = list.removeChild(list.children[1]);
  area.replaceChildren(list);
  output.textContent = `Remaining: ${Array.from(list.children, x => x.textContent).join(", ")}\nRemoved: ${removed.textContent}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
