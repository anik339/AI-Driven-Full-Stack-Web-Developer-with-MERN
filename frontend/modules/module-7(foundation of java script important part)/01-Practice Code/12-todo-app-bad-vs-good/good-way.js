// VERSION B: refactored version with separated state, rendering and actions.
const goodForm = document.querySelector("#good-form");
const goodInput = document.querySelector("#good-input");
const goodList = document.querySelector("#good-list");
const goodEmpty = document.querySelector("#good-empty");
const goodCount = document.querySelector("#good-count");
let goodTasks = [];

function createTodoElement(task) {
  const item = document.createElement("li");
  item.classList.toggle("done", task.done);
  const text = document.createElement("span");
  text.textContent = task.title; // User input is inserted as text, not HTML.
  const toggle = document.createElement("input");
  toggle.type = "checkbox";
  toggle.checked = task.done;
  toggle.dataset.action = "toggle";
  toggle.dataset.id = task.id;
  toggle.setAttribute("aria-label", `Complete ${task.title}`);
  const remove = document.createElement("button");
  remove.type = "button";
  remove.textContent = "Delete";
  remove.dataset.action = "delete";
  remove.dataset.id = task.id;
  item.append(toggle, text, remove);
  return item;
}

function renderGoodTasks() {
  goodList.replaceChildren(...goodTasks.map(createTodoElement));
  goodEmpty.hidden = goodTasks.length > 0;
  goodCount.textContent = `${goodTasks.length} task(s) · ${goodTasks.filter(task => !task.done).length} active`;
}

goodForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = goodInput.value.trim();
  if (!title) return;
  goodTasks.push({ id: crypto.randomUUID(), title, done: false });
  goodInput.value = "";
  goodInput.focus();
  renderGoodTasks();
});

// One listener on the list handles dynamically created checkboxes and buttons.
goodList.addEventListener("click", (event) => {
  const control = event.target.closest("[data-action]");
  if (!control || !goodList.contains(control)) return;
  const task = goodTasks.find(item => item.id === control.dataset.id);
  if (!task) return;
  if (control.dataset.action === "toggle" && control.matches('input[type="checkbox"]')) {
    task.done = control.checked;
  }
  if (control.dataset.action === "delete" && control.matches("button")) {
    goodTasks = goodTasks.filter(item => item.id !== task.id);
  }
  renderGoodTasks();
});

renderGoodTasks();
