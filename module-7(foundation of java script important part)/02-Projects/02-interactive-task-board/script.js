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
function saveTasks() { localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }

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

// Handle checkbox state with the change event. The original code looked only
// for button[data-action], so the input checkbox could never be found.
list.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[type="checkbox"][data-action="toggle"]');
  if (!checkbox || !list.contains(checkbox)) return;
  const task = tasks.find((item) => item.id === checkbox.dataset.id);
  if (!task) return;
  task.completed = checkbox.checked;
  saveTasks();
  renderTasks();
});

// Delete buttons are handled by one delegated click listener.
list.addEventListener("click", (event) => {
  const deleteButton = event.target.closest('button[data-action="delete"]');
  if (!deleteButton || !list.contains(deleteButton)) return;
  const taskId = deleteButton.dataset.id;
  tasks = tasks.filter((item) => item.id !== taskId);
  saveTasks();
  renderTasks();
});

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
  list.replaceChildren(...visibleTasks.map(createTaskElement));
  document.querySelector("#empty-state").hidden = visibleTasks.length > 0;
  document.querySelector("#task-count").textContent =
    `${tasks.length} total · ${tasks.filter((task) => !task.completed).length} active`;
}
renderTasks();
