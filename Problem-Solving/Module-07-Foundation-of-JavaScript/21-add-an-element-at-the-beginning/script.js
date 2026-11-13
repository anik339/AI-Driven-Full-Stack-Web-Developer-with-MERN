// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const list = document.createElement("ul");
  list.innerHTML = "<li>Second</li><li>Third</li>";
  const first = document.createElement("li");
  first.textContent = "First";
  list.prepend(first);
  area.replaceChildren(list);
  output.textContent = Array.from(list.children, item => item.textContent).join(" → ");
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
