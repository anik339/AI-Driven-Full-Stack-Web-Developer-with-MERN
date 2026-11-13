// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const input = document.createElement("input"); input.className = "demo-input"; input.placeholder = "Write a task";
  const add = document.createElement("button"); add.className = "demo-button"; add.textContent = "Add task";
  const list = document.createElement("ul"); list.className = "demo-list";
  area.replaceChildren(input, add, list);
  add.addEventListener("click", () => {
    const text = input.value.trim();
    if (!text) { output.textContent = "Please type a task first."; return; }
    const item = document.createElement("li");
    const label = document.createElement("span"); label.textContent = text;
    const remove = document.createElement("button"); remove.className = "demo-button";
    remove.textContent = "Delete"; remove.dataset.action = "delete";
    item.append(label, remove); list.append(item); input.value = "";
    output.textContent = `Tasks: ${list.children.length}`;
  });
  list.addEventListener("click", event => {
    if (event.target.dataset.action === "delete") {
      event.target.closest("li").remove();
      output.textContent = `Tasks: ${list.children.length}`;
    }
  });
  output.textContent = "Add a task, then use its Delete button.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
