// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const list = document.createElement("ul");
  list.innerHTML = "<li>One</li><li id='target'>Three</li>";
  const two = document.createElement("li");
  two.textContent = "Two";
  list.insertBefore(two, list.querySelector("#target"));
  area.replaceChildren(list);
  output.textContent = Array.from(list.children, item => item.textContent).join(" → ");
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
