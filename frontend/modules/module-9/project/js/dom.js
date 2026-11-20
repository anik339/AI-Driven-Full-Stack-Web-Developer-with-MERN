import { formatDate, isOverdue } from "./dates.js";

export const elements = {
  todayLabel: document.querySelector("#today-label"),
  taskList: document.querySelector("#task-list"),
  resultCount: document.querySelector("#result-count"),
  searchInput: document.querySelector("#search-input"),
  sortSelect: document.querySelector("#sort-select"),
  filterButtons: document.querySelectorAll("[data-filter]"),
  statTotal: document.querySelector("#stat-total"),
  statActive: document.querySelector("#stat-active"),
  statCompleted: document.querySelector("#stat-completed"),
  statOverdue: document.querySelector("#stat-overdue"),
  dialog: document.querySelector("#task-dialog"),
  form: document.querySelector("#task-form"),
  dialogTitle: document.querySelector("#dialog-title"),
  taskId: document.querySelector("#task-id"),
  taskTitle: document.querySelector("#task-title"),
  taskDescription: document.querySelector("#task-description"),
  taskPriority: document.querySelector("#task-priority"),
  taskCategory: document.querySelector("#task-category"),
  taskDueDate: document.querySelector("#task-due-date"),
  formError: document.querySelector("#form-error"),
  toastRegion: document.querySelector("#toast-region"),
  themeToggle: document.querySelector("#theme-toggle"),
  themeIcon: document.querySelector("#theme-icon")
};

export function renderStats(stats) {
  elements.statTotal.textContent = String(stats.total);
  elements.statActive.textContent = String(stats.active);
  elements.statCompleted.textContent = String(stats.completed);
  elements.statOverdue.textContent = String(stats.overdue);
}

function makePill(text, className = "") {
  const pill = document.createElement("span");
  pill.className = `meta-pill ${className}`.trim();
  pill.textContent = text;
  return pill;
}

function makeTaskCard(task) {
  const card = document.createElement("article");
  card.className = `task-card${task.completed ? " is-completed" : ""}`;

  const checkbox = document.createElement("input");
  checkbox.className = "task-check";
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.dataset.action = "toggle";
  checkbox.dataset.id = task.id;
  checkbox.setAttribute("aria-label", `Mark ${task.title} ${task.completed ? "active" : "completed"}`);

  const main = document.createElement("div");
  main.className = "task-main";
  const title = document.createElement("h3");
  title.className = "task-title";
  title.textContent = task.title;
  main.append(title);

  if (task.description) {
    const description = document.createElement("p");
    description.className = "task-description";
    description.textContent = task.description;
    main.append(description);
  }

  const meta = document.createElement("div");
  meta.className = "task-meta";
  meta.append(makePill(task.category), makePill(task.priority, `priority-${task.priority}`));
  meta.append(makePill(task.dueDate
    ? `${isOverdue(task) ? "Overdue · " : "Due · "}${formatDate(task.dueDate)}`
    : "No due date"));
  main.append(meta);

  const actions = document.createElement("div");
  actions.className = "task-actions";
  for (const action of ["edit", "delete"]) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "small-action";
    button.dataset.action = action;
    button.dataset.id = task.id;
    button.textContent = action === "edit" ? "Edit" : "Delete";
    button.setAttribute("aria-label", `${action} task: ${task.title}`);
    actions.append(button);
  }

  card.append(checkbox, main, actions);
  return card;
}

export function renderTasks(tasks) {
  elements.taskList.replaceChildren();

  if (tasks.length === 0) {
    const empty = document.createElement("div");
    empty.className = "empty-state";
    const heading = document.createElement("strong");
    heading.textContent = "No tasks found";
    const message = document.createElement("p");
    message.textContent = "Try another filter or create a new task to get started.";
    empty.append(heading, message);
    elements.taskList.append(empty);
  } else {
    const fragment = document.createDocumentFragment();
    tasks.forEach((task) => fragment.append(makeTaskCard(task)));
    elements.taskList.append(fragment);
  }

  elements.resultCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
}

export function showToast(message) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.textContent = message;
  elements.toastRegion.replaceChildren(toast);
  window.setTimeout(() => { if (toast.isConnected) toast.remove(); }, 2800);
}

export function setActiveFilter(filter) {
  elements.filterButtons.forEach((button) => {
    const active = button.dataset.filter === filter;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
}

export function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  elements.themeIcon.textContent = theme === "dark" ? "☀" : "◐";
  elements.themeToggle.setAttribute("aria-label", theme === "dark" ? "Switch to light theme" : "Switch to dark theme");
}
