// PROJECT 02: INTERACTIVE TASK BOARD
// Main ideas: createElement(), append(), remove(), event.target, event delegation, localStorage.

const STORAGE_KEY = "module7-project-task-board";
let tasks = loadTasks();
let activeFilter = "all";

const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

function loadTasks() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// CREATE: build a new task object when the form is submitted.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = input.value.trim();
  if (!title) return;

  tasks.unshift({ id: crypto.randomUUID(), title, completed: false });
  saveTasks();
  input.value = "";
  input.focus();
  renderTasks();
});

// EVENT DELEGATION: one listener on the list handles all task buttons.
list.addEventListener("click", (event) => {
  // closest() also works if the user clicks an icon or span inside a button.
  const actionButton = event.target.closest("button[data-action]");
  if (!actionButton) return;

  const task = tasks.find((item) => item.id === actionButton.dataset.id);
  if (!task) return;

  if (actionButton.dataset.action === "toggle") {
    task.completed = !task.completed;
  }

  if (actionButton.dataset.action === "delete") {
    // DELETE: remove the matching task from the data array.
    tasks = tasks.filter((item) => item.id !== task.id);
  }

  saveTasks();
  renderTasks();
});

// Filter buttons are handled by a single parent listener.
document.querySelector("#filters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach((filterButton) => {
    filterButton.classList.toggle("active", filterButton === button);
  });
  renderTasks();
});

function createTaskElement(task) {
  // Create each DOM element separately so the task text is never treated as HTML.
  const item = document.createElement("li");
  item.className = `task-item${task.completed ? " completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.dataset.action = "toggle";
  checkbox.dataset.id = task.id;
  checkbox.setAttribute("aria-label", `Complete ${task.title}`);

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "btn danger small-button";
  deleteButton.textContent = "Delete";
  deleteButton.dataset.action = "delete";
  deleteButton.dataset.id = task.id;

  item.append(checkbox, title, deleteButton);
  return item;
}

function renderTasks() {
  const visibleTasks = tasks.filter((task) => {
    if (activeFilter === "active") return !task.completed;
    if (activeFilter === "done") return task.completed;
    return true;
  });

  // Remove old child nodes, then append the elements built from current state.
  list.replaceChildren(...visibleTasks.map(createTaskElement));
  document.querySelector("#empty-state").hidden = visibleTasks.length > 0;
  document.querySelector("#task-count").textContent =
    `${tasks.length} total · ${tasks.filter((task) => !task.completed).length} active`;
}

renderTasks();
