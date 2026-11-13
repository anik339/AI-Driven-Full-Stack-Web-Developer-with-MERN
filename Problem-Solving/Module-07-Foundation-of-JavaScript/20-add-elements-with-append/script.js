// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const list = document.createElement("ul");
  list.append("Existing text");
  const first = document.createElement("li");
  first.textContent = "Learn DOM";
  const second = document.createElement("li");
  second.textContent = "Practice events";
  list.append(first, second);
  area.replaceChildren(list);
  output.textContent = `Child elements: ${list.children.length}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
