import { ProjectService } from "./services/project-service.js";
import { StorageRepository } from "./services/storage-repository.js";
import { STATUS_LABELS } from "./constants.js";

class AppController {
  constructor(service) {
    this.service = service;
    this.activeProjectId = service.getProjects()[0]?.id ?? null;
    this.editingTaskId = null;
    this.cacheElements();
    this.bindEvents();
    this.applySavedTheme();
    this.render();
  }

  cacheElements() {
    const byId = (id) => document.getElementById(id);
    this.projectForm = byId("project-form");
    this.projectNameInput = byId("project-name");
    this.projectList = byId("project-list");
    this.projectTitle = byId("active-project-title");
    this.taskForm = byId("task-form");
    this.taskTitleInput = byId("task-title");
    this.taskDescriptionInput = byId("task-description");
    this.taskPriorityInput = byId("task-priority");
    this.taskDueDateInput = byId("task-due-date");
    this.saveTaskButton = byId("save-task");
    this.cancelEditButton = byId("cancel-edit");
    this.taskList = byId("task-list");
    this.emptyState = byId("empty-state");
    this.searchInput = byId("search-input");
    this.statusFilter = byId("status-filter");
    this.priorityFilter = byId("priority-filter");
    this.sortSelect = byId("sort-select");
    this.visibleCount = byId("visible-count");
    this.themeToggle = byId("theme-toggle");
    this.exportButton = byId("export-button");
    this.importButton = byId("import-button");
    this.importFile = byId("import-file");
    this.toast = byId("toast");
    this.stats = {
      total: byId("stat-total"),
      todo: byId("stat-todo"),
      progress: byId("stat-progress"),
      done: byId("stat-done")
    };
  }

  bindEvents() {
    this.projectForm.addEventListener("submit", (event) => this.handleCreateProject(event));
    this.projectList.addEventListener("click", (event) => this.handleProjectSelect(event));
    this.taskForm.addEventListener("submit", (event) => this.handleTaskSubmit(event));
    this.cancelEditButton.addEventListener("click", () => this.resetTaskForm());
    this.taskList.addEventListener("click", (event) => this.handleTaskAction(event));
    [this.searchInput, this.statusFilter, this.priorityFilter, this.sortSelect]
      .forEach((control) => control.addEventListener("input", () => this.renderTasks()));
    this.themeToggle.addEventListener("click", () => this.toggleTheme());
    this.exportButton.addEventListener("click", () => this.exportBackup());
    this.importButton.addEventListener("click", () => this.importFile.click());
    this.importFile.addEventListener("change", (event) => this.importBackup(event));
  }

  handleCreateProject(event) {
    event.preventDefault();
    try {
      const project = this.service.createProject(this.projectNameInput.value);
      this.activeProjectId = project.id;
      this.projectForm.reset();
      this.render();
      this.notify("Project created.");
    } catch (error) {
      this.notify(error.message, true);
    }
  }

  handleProjectSelect(event) {
    const button = event.target.closest("[data-project-id]");
    if (!button) return;
    this.activeProjectId = button.dataset.projectId;
    this.resetTaskForm();
    this.render();
  }

  handleTaskSubmit(event) {
    event.preventDefault();
    const formData = new FormData(this.taskForm);
    const data = {
      title: formData.get("title"),
      description: formData.get("description"),
      priority: formData.get("priority"),
      dueDate: formData.get("dueDate")
    };

    try {
      if (this.editingTaskId) {
        this.service.updateTask(this.activeProjectId, this.editingTaskId, data);
        this.notify("Task updated.");
      } else {
        this.service.addTask(this.activeProjectId, data);
        this.notify("Task added.");
      }
      this.resetTaskForm();
      this.render();
    } catch (error) {
      this.notify(error.message, true);
    }
  }

  handleTaskAction(event) {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const { action, taskId } = button.dataset;
    const project = this.service.getProject(this.activeProjectId);
    const task = project?.findTask(taskId);
    if (!task) return;

    try {
      if (action === "advance") {
        this.service.advanceTask(this.activeProjectId, taskId);
        this.notify("Task status updated.");
      } else if (action === "edit") {
        this.startEditing(task);
      } else if (action === "delete") {
        if (!window.confirm(`Delete "${task.title}"? This cannot be undone.`)) return;
        this.service.deleteTask(this.activeProjectId, taskId);
        this.notify("Task deleted.");
      }
      this.render();
    } catch (error) {
      this.notify(error.message, true);
    }
  }

  startEditing(task) {
    this.editingTaskId = task.id;
    this.taskTitleInput.value = task.title;
    this.taskDescriptionInput.value = task.description;
    this.taskPriorityInput.value = task.priority;
    this.taskDueDateInput.value = task.dueDate;
    this.saveTaskButton.textContent = "Save changes";
    this.cancelEditButton.hidden = false;
    this.taskTitleInput.focus();
    document.getElementById("editor-title").textContent = "Edit task";
  }

  resetTaskForm() {
    this.editingTaskId = null;
    this.taskForm.reset();
    this.saveTaskButton.textContent = "Add task";
    this.cancelEditButton.hidden = true;
    document.getElementById("editor-title").textContent = "Create a task";
  }

  render() {
    this.renderProjects();
    this.renderTasks();
  }

  renderProjects() {
    this.projectList.replaceChildren();
    this.service.getProjects().forEach((project) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = `project-link${project.id === this.activeProjectId ? " active" : ""}`;
      button.dataset.projectId = project.id;
      button.setAttribute("aria-pressed", String(project.id === this.activeProjectId));
      const icon = document.createElement("span");
      icon.className = "project-icon";
      icon.textContent = "▦";
      const name = document.createElement("span");
      name.textContent = project.name;
      button.append(icon, name);
      this.projectList.append(button);
    });
  }

  renderTasks() {
    const project = this.service.getProject(this.activeProjectId);
    if (!project) return;
    this.projectTitle.textContent = project.name;
    const summary = project.summary;
    this.stats.total.textContent = summary.total;
    this.stats.todo.textContent = summary.todo;
    this.stats.progress.textContent = summary["in-progress"];
    this.stats.done.textContent = summary.done;

    const search = this.searchInput.value.trim().toLowerCase();
    const status = this.statusFilter.value;
    const priority = this.priorityFilter.value;
    let tasks = project.tasks.filter((task) => {
      const matchesSearch = `${task.title} ${task.description}`.toLowerCase().includes(search);
      const matchesStatus = status === "all" || task.status === status;
      const matchesPriority = priority === "all" || task.priority === priority;
      return matchesSearch && matchesStatus && matchesPriority;
    });

    const priorityRank = { high: 0, medium: 1, low: 2 };
    tasks.sort((a, b) => {
      switch (this.sortSelect.value) {
        case "due-date":
          return (a.dueDate || "9999-12-31").localeCompare(b.dueDate || "9999-12-31");
        case "priority":
          return priorityRank[a.priority] - priorityRank[b.priority];
        case "title":
          return a.title.localeCompare(b.title);
        default:
          return b.createdAt.localeCompare(a.createdAt);
      }
    });

    this.taskList.replaceChildren();
    tasks.forEach((task) => this.taskList.append(this.createTaskCard(task)));
    this.visibleCount.textContent = `${tasks.length} ${tasks.length === 1 ? "task" : "tasks"}`;
    this.emptyState.hidden = tasks.length !== 0;
  }

  createTaskCard(task) {
    const card = document.createElement("article");
    card.className = "task-card";

    const top = document.createElement("div");
    top.className = "task-card-top";
    const title = document.createElement("h3");
    title.className = "task-title";
    title.textContent = task.title;
    const status = document.createElement("span");
    status.className = "chip";
    status.textContent = STATUS_LABELS[task.status];
    top.append(title, status);

    const description = document.createElement("p");
    description.className = "task-description";
    description.textContent = task.description || "No description added.";

    const meta = document.createElement("div");
    meta.className = "task-meta";
    const priority = document.createElement("span");
    priority.className = `chip priority-${task.priority}`;
    priority.textContent = `${task.priority[0].toUpperCase()}${task.priority.slice(1)} priority`;
    meta.append(priority);
    if (task.isOverdue) {
      const overdue = document.createElement("span");
      overdue.className = "chip priority-high";
      overdue.textContent = "Overdue";
      meta.append(overdue);
    }

    const footer = document.createElement("div");
    footer.className = "task-footer";
    const due = document.createElement("span");
    due.className = "due-date";
    due.textContent = task.dueDate
      ? `Due ${new Date(`${task.dueDate}T00:00:00`).toLocaleDateString()}`
      : "No due date";
    const actions = document.createElement("div");
    actions.className = "task-actions";
    actions.append(
      this.makeActionButton("Next status", "advance", task.id),
      this.makeActionButton("Edit", "edit", task.id),
      this.makeActionButton("Delete", "delete", task.id)
    );
    footer.append(due, actions);
    card.append(top, description, meta, footer);
    return card;
  }

  makeActionButton(label, action, taskId) {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.dataset.action = action;
    button.dataset.taskId = taskId;
    return button;
  }

  toggleTheme() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("codetrack.theme", next); } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  }

  applySavedTheme() {
    try {
      document.documentElement.dataset.theme = localStorage.getItem("codetrack.theme") || "light";
    } catch {
      document.documentElement.dataset.theme = "light";
    }
  }

  exportBackup() {
    const blob = new Blob([this.service.exportJSON()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "codetrack-backup.json";
    link.click();
    URL.revokeObjectURL(url);
    this.notify("JSON backup exported.");
  }

  async importBackup(event) {
    const [file] = event.target.files ?? [];
    if (!file) return;
    try {
      this.service.importJSON(await file.text());
      this.activeProjectId = this.service.getProjects()[0].id;
      this.resetTaskForm();
      this.render();
      this.notify("Backup imported successfully.");
    } catch (error) {
      this.notify(`Import failed: ${error.message}`, true);
    } finally {
      this.importFile.value = "";
    }
  }

  notify(message, isError = false) {
    this.toast.textContent = message;
    this.toast.style.borderColor = isError ? "#efb8bf" : "";
    this.toast.style.background = isError ? "#fff0f1" : "";
    this.toast.style.color = isError ? "#9e2637" : "";
    this.toast.hidden = false;
    window.clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => { this.toast.hidden = true; }, 2800);
  }
}

new AppController(new ProjectService(new StorageRepository()));
