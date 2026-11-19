// ------------------------------------------------------------
// PROJECT 01: TASK MANAGER
// Concepts: arrays, objects, DOM events, rendering, localStorage
// ------------------------------------------------------------

const STORAGE_KEY = "js-project-01-tasks";

// Keep application data in one array. The UI is re-rendered from this state.
let tasks = loadTasks();
let currentFilter = "all";

// Cache frequently used DOM elements.
const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const priorityInput = document.querySelector("#task-priority");
const taskList = document.querySelector("#task-list");
const emptyState = document.querySelector("#empty-state");
const filters = document.querySelector("#filters");

// Read saved data safely. A damaged localStorage value should not crash the app.
function loadTasks() {
  try {
    const savedTasks = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(savedTasks) ? savedTasks : [];
  } catch (error) {
    console.warn("Could not read saved tasks:", error);
    return [];
  }
}

function saveTasks() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

// Create a new task from the form values.
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = taskInput.value.trim();
  if (!title) return;

  tasks.unshift({
    id: crypto.randomUUID(),
    title,
    priority: priorityInput.value,
    completed: false,
    createdAt: new Date().toISOString()
  });

  saveTasks();
  taskForm.reset();
  taskInput.focus();
  render();
});

// Event delegation: one listener handles buttons for every task row.
taskList.addEventListener("click", (event) => {
  const row = event.target.closest("[data-task-id]");
  if (!row) return;

  const task = tasks.find((item) => item.id === row.dataset.taskId);
  if (!task) return;

  if (event.target.matches("[data-action='toggle']")) {
    task.completed = !task.completed;
  }

  if (event.target.matches("[data-action='delete']")) {
    tasks = tasks.filter((item) => item.id !== task.id);
  }

  saveTasks();
  render();
});

// Change the visible list without changing the saved task data.
filters.addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;

  currentFilter = button.dataset.filter;
  filters.querySelectorAll("button").forEach((item) => {
    const isActive = item === button;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
  render();
});

document.querySelector("#clear-completed").addEventListener("click", () => {
  tasks = tasks.filter((task) => !task.completed);
  saveTasks();
  render();
});

// Build one list item using DOM methods and textContent (safer than HTML strings).
function createTaskElement(task) {
  const item = document.createElement("li");
  item.className = `task-item${task.completed ? " completed" : ""}`;
  item.dataset.taskId = task.id;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "task-check";
  checkbox.checked = task.completed;
  checkbox.dataset.action = "toggle";
  checkbox.setAttribute("aria-label", `Mark ${task.title} as ${task.completed ? "active" : "completed"}`);

  const title = document.createElement("span");
  title.className = "task-title";
  title.textContent = task.title;

  const priority = document.createElement("span");
  priority.className = `priority ${task.priority}`;
  priority.textContent = task.priority;

  const deleteButton = document.createElement("button");
  deleteButton.type = "button";
  deleteButton.className = "btn btn-danger small-btn";
  deleteButton.dataset.action = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.setAttribute("aria-label", `Delete ${task.title}`);

  item.append(checkbox, title, priority, deleteButton);
  return item;
}

function render() {
  const visibleTasks = tasks.filter((task) => {
    if (currentFilter === "active") return !task.completed;
    if (currentFilter === "completed") return task.completed;
    return true;
  });

  taskList.replaceChildren(...visibleTasks.map(createTaskElement));
  emptyState.hidden = visibleTasks.length > 0;

  document.querySelector("#total-count").textContent = tasks.length;
  document.querySelector("#active-count").textContent = tasks.filter((task) => !task.completed).length;
  document.querySelector("#completed-count").textContent = tasks.filter((task) => task.completed).length;
}

render();
