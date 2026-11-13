// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const list = document.createElement("ul");
  list.className = "demo-list";
  ["HTML", "CSS", "JavaScript"].forEach(name => {
    const item = document.createElement("li");
    item.textContent = name;
    item.dataset.skill = name;
    list.append(item);
  });
  area.replaceChildren(list);
  list.addEventListener("click", event => {
    const item = event.target.closest("li");
    if (!item || !list.contains(item)) return;
    output.textContent = `You selected: ${item.dataset.skill}`;
  });
  output.textContent = "Click any list item.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
