import { elements, renderStats, renderTasks, setActiveFilter, showToast, applyTheme } from "./dom.js";
import { loadTasks, saveTasks, loadTheme, saveTheme } from "./storage.js";
import { createTask, updateTask, toggleTask, removeTask, getTaskStats, getVisibleTasks } from "./task-service.js";
import { validateTask } from "./validation.js";
import { todayAsISODate } from "./dates.js";

let tasks = loadTasks();
let activeFilter = "all";
let theme = loadTheme();

function persistTasks() {
  if (!saveTasks(tasks)) showToast("Changes could not be saved in this browser. Export a backup.");
}

function refreshUI() {
  renderStats(getTaskStats(tasks));
  renderTasks(getVisibleTasks(tasks, {
    filter: activeFilter,
    query: elements.searchInput.value,
    sort: elements.sortSelect.value
  }));
}

function resetForm() {
  elements.form.reset();
  elements.taskId.value = "";
  elements.taskPriority.value = "medium";
  elements.taskCategory.value = "Learning";
  elements.formError.textContent = "";
  elements.taskTitle.removeAttribute("aria-invalid");
}

function openCreateDialog() {
  resetForm();
  elements.dialogTitle.textContent = "Create a task";
  elements.dialog.showModal();
  elements.taskTitle.focus();
}

function openEditDialog(id) {
  const task = tasks.find((item) => item.id === id);
  if (!task) return showToast("That task could not be found.");

  resetForm();
  elements.dialogTitle.textContent = "Edit task";
  elements.taskId.value = task.id;
  elements.taskTitle.value = task.title;
  elements.taskDescription.value = task.description;
  elements.taskPriority.value = task.priority;
  elements.taskCategory.value = task.category;
  elements.taskDueDate.value = task.dueDate;
  elements.dialog.showModal();
  elements.taskTitle.focus();
}

function handleSubmit(event) {
  event.preventDefault();
  const result = validateTask({
    title: elements.taskTitle.value,
    description: elements.taskDescription.value,
    priority: elements.taskPriority.value,
    category: elements.taskCategory.value,
    dueDate: elements.taskDueDate.value
  });

  if (!result.valid) {
    elements.formError.textContent = result.message;
    elements.taskTitle.setAttribute("aria-invalid", "true");
    elements.taskTitle.focus();
    return;
  }

  const id = elements.taskId.value;
  if (id) {
    tasks = updateTask(tasks, id, result.value);
    showToast("Task updated.");
  } else {
    tasks = [createTask(result.value), ...tasks];
    showToast("Task created.");
  }

  persistTasks();
  refreshUI();
  elements.dialog.close();
  resetForm();
}

function handleTaskAction(event) {
  const control = event.target.closest("[data-action]");
  if (!control || !elements.taskList.contains(control)) return;
  const { action, id } = control.dataset;
  if (!id) return;

  // Checkboxes are handled on change; action buttons are handled on click.
  if (action === "toggle" && event.type !== "change") return;
  if (action !== "toggle" && event.type !== "click") return;

  if (action === "toggle") {
    tasks = toggleTask(tasks, id);
    persistTasks();
    refreshUI();
  } else if (action === "edit") {
    openEditDialog(id);
  } else if (action === "delete") {
    const task = tasks.find((item) => item.id === id);
    if (!task || !window.confirm(`Delete "${task.title}"?`)) return;
    tasks = removeTask(tasks, id);
    persistTasks();
    refreshUI();
    showToast("Task deleted.");
  }
}

function exportTasks() {
  const backup = { app: "TaskFlow", version: 1, exportedAt: new Date().toISOString(), tasks };
  const blob = new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `taskflow-backup-${todayAsISODate()}.json`;
  document.body.append(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  showToast("Your JSON backup is ready.");
}

function clearCompleted() {
  const count = tasks.filter((task) => task.completed).length;
  if (count === 0) return showToast("There are no completed tasks to clear.");
  if (!window.confirm(`Clear ${count} completed task(s)?`)) return;
  tasks = tasks.filter((task) => !task.completed);
  persistTasks();
  refreshUI();
  showToast("Completed tasks cleared.");
}

function toggleTheme() {
  theme = theme === "light" ? "dark" : "light";
  applyTheme(theme);
  if (!saveTheme(theme)) showToast("Theme changed, but the preference could not be saved.");
}

function initialize() {
  elements.todayLabel.textContent = new Intl.DateTimeFormat(undefined, {
    weekday: "short", day: "numeric", month: "short", year: "numeric"
  }).format(new Date());

  applyTheme(theme);
  refreshUI();

  document.querySelector("#new-task-button").addEventListener("click", openCreateDialog);
  document.querySelector("#close-dialog-button").addEventListener("click", () => elements.dialog.close());
  document.querySelector("#cancel-button").addEventListener("click", () => elements.dialog.close());
  elements.form.addEventListener("submit", handleSubmit);
  elements.taskList.addEventListener("click", handleTaskAction);
  elements.taskList.addEventListener("change", handleTaskAction);
  elements.searchInput.addEventListener("input", refreshUI);
  elements.sortSelect.addEventListener("change", refreshUI);
  elements.themeToggle.addEventListener("click", toggleTheme);
  document.querySelector("#export-button").addEventListener("click", exportTasks);
  document.querySelector("#clear-completed-button").addEventListener("click", clearCompleted);

  elements.filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      setActiveFilter(activeFilter);
      refreshUI();
    });
  });

  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
}

initialize();
