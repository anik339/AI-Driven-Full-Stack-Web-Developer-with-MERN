// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const list = document.createElement("ul");
  const item = document.createElement("li");
  item.textContent = "Added with appendChild()";
  const returnedNode = list.appendChild(item);
  area.replaceChildren(list);
  output.textContent = `Child: ${list.firstElementChild.textContent}\nReturned same node: ${returnedNode === item}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
