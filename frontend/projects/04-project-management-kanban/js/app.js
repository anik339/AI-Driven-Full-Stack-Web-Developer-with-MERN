/*
 * TASKFLOW — Project Management and Kanban Board
 * ------------------------------------------------------------
 * Vanilla JavaScript only. Workspaces, projects, tasks, profile
 * settings, and preferences are stored locally in this browser.
 * No server, API, account system, or database is connected.
 */

// 1. Seed content gives the first-time visitor a realistic board to explore.
const seedTasks = [
  { id: 1, title: "Create homepage wireframe", description: "Map the main sections and define the first-screen experience.", category: "Design", status: "todo", priority: "High", assignee: "AD", due: "2026-11-20" },
  { id: 2, title: "Collect competitor references", description: "Review comparable websites and note useful patterns.", category: "Research", status: "todo", priority: "Medium", assignee: "MR", due: "2026-11-22" },
  { id: 3, title: "Prepare brand colour palette", description: "Explore accessible colour combinations for the new identity.", category: "Design", status: "todo", priority: "Low", assignee: "FN", due: "2026-11-24" },
  { id: 4, title: "Build navigation component", description: "Create responsive navigation and mobile menu states.", category: "Development", status: "progress", priority: "High", assignee: "AD", due: "2026-11-19" },
  { id: 5, title: "Design product card system", description: "Define reusable product cards and interaction states.", category: "Design", status: "progress", priority: "Medium", assignee: "MR", due: "2026-11-21" },
  { id: 6, title: "Write homepage copy", description: "Draft concise headings, descriptions and calls to action.", category: "Content", status: "progress", priority: "Low", assignee: "SK", due: "2026-11-25" },
  { id: 7, title: "Review mobile breakpoints", description: "Check spacing and layout across common viewport widths.", category: "Development", status: "review", priority: "High", assignee: "FN", due: "2026-11-18" },
  { id: 8, title: "Create footer layout", description: "Build footer columns, links and responsive behaviour.", category: "Design", status: "review", priority: "Medium", assignee: "AD", due: "2026-11-18" },
  { id: 9, title: "Set up project structure", description: "Organise HTML, CSS and JavaScript files.", category: "Development", status: "done", priority: "Medium", assignee: "AD", due: "2026-11-15" },
  { id: 10, title: "Define user personas", description: "Summarise target audience needs and key use cases.", category: "Research", status: "done", priority: "Low", assignee: "MR", due: "2026-11-14" },
  { id: 11, title: "Create initial moodboard", description: "Collect visual references for the website direction.", category: "Design", status: "done", priority: "Low", assignee: "SK", due: "2026-11-13" },
  { id: 12, title: "Confirm project scope", description: "Agree on the pages and core functionality for release.", category: "Content", status: "done", priority: "High", assignee: "FN", due: "2026-11-12" }
];

const defaultProjects = [
  { id: "website", name: "Website redesign", colour: "purple" },
  { id: "mobile", name: "Mobile application", colour: "blue" },
  { id: "marketing", name: "Marketing campaign", colour: "orange" }
];
const STORAGE = {
  projects: "taskflow-projects-v2", activeProject: "taskflow-active-project-v2",
  workspace: "taskflow-workspace-v2", profile: "taskflow-profile-v2",
  theme: "taskflow-theme", notifications: "taskflow-notifications-v2"
};
const TASK_KEY_PREFIX = "taskflow-project-tasks-v2-";
const LEGACY_TASK_KEY = "taskflow-kanban-tasks-v1";
const $ = (selector) => document.querySelector(selector);

// 2. Safe localStorage helpers prevent the app from crashing if storage is blocked.
function readStorage(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; }
  catch (error) { console.warn(`Could not read ${key}; using sample data.`, error); return fallback; }
}
function writeStorage(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); return true; }
  catch (error) { notify("Browser storage is unavailable; changes may not persist."); console.error(error); return false; }
}
function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}
function notify(message) {
  const el = $("#toast");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(notify.timer);
  notify.timer = setTimeout(() => el.classList.remove("show"), 2300);
}
function formatDateKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
function formatDue(date) {
  if (!date) return "No due date";
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-GB", { day: "2-digit", month: "short" });
}
function statusName(status) {
  return ({ todo: "To do", progress: "In progress", review: "In review", done: "Done" })[status] || status;
}
function initials(name) { return name === "Unassigned" ? "—" : name; }

// 3. Workspace, project, profile, and notification state.
let workspaces = readStorage(STORAGE.workspace, ["Northstar Studio"]);
if (!Array.isArray(workspaces) || !workspaces.length) workspaces = ["Northstar Studio"];
let activeWorkspace = readStorage("taskflow-active-workspace-v2", workspaces[0]);
if (!workspaces.includes(activeWorkspace)) activeWorkspace = workspaces[0];
let projects = readStorage(STORAGE.projects, defaultProjects);
if (!Array.isArray(projects) || !projects.length) projects = defaultProjects.map((item) => ({ ...item }));
let activeProjectId = readStorage(STORAGE.activeProject, projects[0].id);
if (!projects.some((project) => project.id === activeProjectId)) activeProjectId = projects[0].id;
let profile = readStorage(STORAGE.profile, { name: "Anik Chandra Dey", email: "anik65605@gmail.com" });
let notifications = readStorage(STORAGE.notifications, [
  { id: 1, title: "Welcome to Taskflow", detail: "Your first project board is ready.", read: false },
  { id: 2, title: "Task due soon", detail: "Review your upcoming due dates on the calendar view.", read: false }
]);
let taskSettings = readStorage("taskflow-settings-v2", { taskReminders: true, confirmDelete: true });
let viewMode = "board";
let dueFilter = "all";
let activeDragId = null;
let calendarDate = new Date();

// 4. Each project has its own task list, so switching projects changes the board data.
function taskStorageKey(projectId) { return `${TASK_KEY_PREFIX}${projectId}`; }
function loadTasks(projectId) {
  const stored = readStorage(taskStorageKey(projectId), null);
  if (Array.isArray(stored)) return stored;
  // Migrate the earlier single-board version into the first project once.
  if (projectId === "website") {
    const legacy = readStorage(LEGACY_TASK_KEY, null);
    if (Array.isArray(legacy)) return legacy;
    return seedTasks.map((task) => ({ ...task }));
  }
  return [];
}
let tasks = loadTasks(activeProjectId);
function persistTasks() {
  writeStorage(taskStorageKey(activeProjectId), tasks);
  $("#last-updated").textContent = "Updated just now";
}
function currentProject() { return projects.find((project) => project.id === activeProjectId) || projects[0]; }

// 5. Filters are shared by Board, List, and Calendar views.
function filteredTasks() {
  const query = $("#task-search").value.trim().toLowerCase();
  const priority = $("#priority-filter").value;
  const assignee = $("#assignee-filter").value;
  const today = formatDateKey(new Date());
  return tasks.filter((task) => {
    const text = `${task.title} ${task.description} ${task.category} ${task.assignee}`.toLowerCase();
    const matchesQuery = !query || text.includes(query);
    const matchesPriority = priority === "all" || task.priority === priority;
    const matchesAssignee = assignee === "all" || task.assignee === assignee;
    const matchesDate = dueFilter === "all" || (dueFilter === "today" && task.due === today) ||
      (dueFilter === "upcoming" && task.due && task.due >= today && task.status !== "done");
    return matchesQuery && matchesPriority && matchesAssignee && matchesDate;
  });
}

// 6. Board view: render task cards and attach drag/drop and edit handlers.
function taskCard(task) {
  const tagClass = `tag-${String(task.category).toLowerCase()}`;
  return `<article class="task-card" draggable="true" data-task-id="${task.id}" tabindex="0" aria-label="Edit task ${escapeHTML(task.title)}">
    <div class="task-top"><span class="task-tag ${tagClass}">${escapeHTML(task.category)}</span><button class="task-menu" data-edit="${task.id}" type="button" aria-label="Edit ${escapeHTML(task.title)}">•••</button></div>
    <h3>${escapeHTML(task.title)}</h3><p class="task-description">${escapeHTML(task.description || "No description added.")}</p>
    <div class="task-footer"><div class="task-meta"><span class="priority priority-${task.priority.toLowerCase()}">${escapeHTML(task.priority)}</span><span class="due-date">◷ ${formatDue(task.due)}</span></div><span class="assignee ${escapeHTML(task.assignee)}">${escapeHTML(initials(task.assignee))}</span></div>
  </article>`;
}
function attachDragEvents() {
  document.querySelectorAll(".task-card").forEach((card) => {
    card.addEventListener("dragstart", (event) => {
      activeDragId = Number(card.dataset.taskId);
      card.classList.add("dragging");
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", String(activeDragId));
    });
    card.addEventListener("dragend", () => {
      card.classList.remove("dragging");
      document.querySelectorAll(".task-list").forEach((list) => list.classList.remove("drag-over"));
    });
    card.addEventListener("dblclick", () => openTaskModal(Number(card.dataset.taskId)));
    card.addEventListener("keydown", (event) => { if (event.key === "Enter") openTaskModal(Number(card.dataset.taskId)); });
  });
  document.querySelectorAll("[data-edit]").forEach((button) => button.addEventListener("click", (event) => {
    event.stopPropagation(); openTaskModal(Number(button.dataset.edit));
  }));
}
function renderBoardView(items) {
  ["todo", "progress", "review", "done"].forEach((status) => {
    const group = items.filter((task) => task.status === status);
    $(`#count-${status}`).textContent = group.length;
    $(`#list-${status}`).innerHTML = group.map(taskCard).join("");
  });
  attachDragEvents();
}

// 7. List view uses the same records as the board.
function renderListView(items) {
  $("#list-view-container").innerHTML = `<div class="list-view-heading"><div><h2>Task list</h2><p>${items.length} task(s) in the current filtered view</p></div><button class="primary-button" id="list-add-task" type="button">+ Add task</button></div>
    <div class="table-scroll"><table class="task-table"><thead><tr><th>TASK</th><th>STATUS</th><th>PRIORITY</th><th>ASSIGNEE</th><th>DUE DATE</th><th>ACTION</th></tr></thead><tbody>${items.map((task) => `<tr><td><strong>${escapeHTML(task.title)}</strong><small>${escapeHTML(task.description || "No description")}</small></td><td>${statusName(task.status)}</td><td><span class="priority priority-${task.priority.toLowerCase()}">${escapeHTML(task.priority)}</span></td><td>${escapeHTML(initials(task.assignee))}</td><td>${formatDue(task.due)}</td><td><button class="small-action" data-list-edit="${task.id}" type="button">Edit</button></td></tr>`).join("") || `<tr><td colspan="6" class="empty-cell">No tasks match the current filters.</td></tr>`}</tbody></table></div>`;
}

// 8. Calendar view builds a month grid and places each due task on its date.
function renderCalendarView(items) {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells = [];
  for (let index = 0; index < 42; index += 1) {
    const day = index - firstDay + 1;
    if (day < 1 || day > daysInMonth) { cells.push(`<div class="calendar-day outside-month"></div>`); continue; }
    const dateKey = formatDateKey(new Date(year, month, day));
    const dayTasks = items.filter((task) => task.due === dateKey);
    cells.push(`<div class="calendar-day"><span class="calendar-date">${day}</span>${dayTasks.slice(0, 3).map((task) => `<button class="calendar-task" type="button" data-calendar-edit="${task.id}" title="${escapeHTML(task.title)}">${escapeHTML(task.title)}</button>`).join("")}${dayTasks.length > 3 ? `<small>+${dayTasks.length - 3} more</small>` : ""}</div>`);
  }
  $("#calendar-view-container").innerHTML = `<div class="calendar-heading"><div><h2>${calendarDate.toLocaleDateString("en-US", { month: "long", year: "numeric" })}</h2><p>Tasks are placed by their due date.</p></div><div><button class="small-action" id="calendar-prev" type="button">← Previous</button><button class="small-action" id="calendar-today" type="button">Today</button><button class="small-action" id="calendar-next" type="button">Next →</button></div></div>
    <div class="calendar-grid"><div class="calendar-weekday">Sun</div><div class="calendar-weekday">Mon</div><div class="calendar-weekday">Tue</div><div class="calendar-weekday">Wed</div><div class="calendar-weekday">Thu</div><div class="calendar-weekday">Fri</div><div class="calendar-weekday">Sat</div>${cells.join("")}</div>`;
}

function render() {
  const visible = filteredTasks();
  $("#board-total").textContent = tasks.length;
  $("#nav-task-count").textContent = tasks.filter((task) => task.status !== "done").length;
  $("#kanban-board").hidden = viewMode !== "board";
  $("#list-view-container").hidden = viewMode !== "list";
  $("#calendar-view-container").hidden = viewMode !== "calendar";
  document.querySelectorAll(".tab-button").forEach((button) => button.classList.remove("active"));
  $(`#${viewMode}-view-button`).classList.add("active");
  $("#view-toggle").textContent = viewMode === "board" ? "☷ List view" : "▦ Board view";
  if (viewMode === "board") renderBoardView(visible);
  if (viewMode === "list") renderListView(visible);
  if (viewMode === "calendar") renderCalendarView(visible);
}

// 9. Task create/edit/delete modal.
function openTaskModal(id = null, status = "todo") {
  const task = id ? tasks.find((item) => item.id === id) : null;
  $("#task-form").reset();
  $("#task-id").value = task ? task.id : "";
  $("#modal-title").textContent = task ? "Edit task" : "Create a task";
  $("#save-task").textContent = task ? "Save changes" : "Create task";
  $("#delete-task").hidden = !task;
  $("#form-error").textContent = "";
  $("#task-title").value = task?.title || "";
  $("#task-description").value = task?.description || "";
  $("#task-status").value = task?.status || status;
  $("#task-priority").value = task?.priority || "Medium";
  $("#task-assignee").value = task?.assignee || "AD";
  $("#task-due").value = task?.due || "";
  $("#modal-backdrop").hidden = false;
  $("#task-title").focus();
}
function closeTaskModal() { $("#modal-backdrop").hidden = true; }
function guessCategory(title) {
  const value = title.toLowerCase();
  if (/design|wireframe|colour|color|visual|layout/.test(value)) return "Design";
  if (/research|review|competitor|persona|analyse|analyze/.test(value)) return "Research";
  if (/write|copy|content|text|article/.test(value)) return "Content";
  return "Development";
}

$("#open-add-task").addEventListener("click", () => openTaskModal());
$("#close-modal").addEventListener("click", closeTaskModal);
$("#cancel-modal").addEventListener("click", closeTaskModal);
$("#modal-backdrop").addEventListener("click", (event) => { if (event.target.id === "modal-backdrop") closeTaskModal(); });
document.querySelectorAll("[data-add-status]").forEach((button) => button.addEventListener("click", () => openTaskModal(null, button.dataset.addStatus)));
$("#task-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const title = $("#task-title").value.trim();
  if (title.length < 3) { $("#form-error").textContent = "Please enter a task title with at least 3 characters."; $("#task-title").focus(); return; }
  const id = $("#task-id").value;
  const values = { title, description: $("#task-description").value.trim(), status: $("#task-status").value, priority: $("#task-priority").value, assignee: $("#task-assignee").value, due: $("#task-due").value, category: guessCategory(title) };
  if (id) { Object.assign(tasks.find((task) => task.id === Number(id)), values); notify("Task updated."); }
  else { tasks.unshift({ id: Date.now(), ...values }); notify("Task created."); }
  persistTasks(); render(); closeTaskModal();
});
$("#delete-task").addEventListener("click", () => {
  const id = Number($("#task-id").value);
  if (id && (!taskSettings.confirmDelete || confirm("Delete this task? This cannot be undone."))) {
    tasks = tasks.filter((task) => task.id !== id);
    persistTasks(); render(); closeTaskModal(); notify("Task deleted.");
  }
});

// 10. Drag-and-drop updates the task status and saves the new board.
document.querySelectorAll(".task-list").forEach((list) => {
  list.addEventListener("dragover", (event) => { event.preventDefault(); list.classList.add("drag-over"); });
  list.addEventListener("dragleave", (event) => { if (!list.contains(event.relatedTarget)) list.classList.remove("drag-over"); });
  list.addEventListener("drop", (event) => {
    event.preventDefault(); list.classList.remove("drag-over");
    const id = Number(event.dataTransfer.getData("text/plain")) || activeDragId;
    const task = tasks.find((item) => item.id === id);
    if (!task) return;
    task.status = list.dataset.dropStatus;
    persistTasks(); render(); notify(`Task moved to ${statusName(task.status)}.`);
  });
});

// 11. Project management: add, switch, rename, and delete projects.
function renderProjects() {
  $("#project-nav").innerHTML = projects.map((project) => `<a href="#board" class="project-link ${project.id === activeProjectId ? "selected" : ""}" data-project-id="${escapeHTML(project.id)}"><i class="project-dot dot-${escapeHTML(project.colour || "purple")}"></i>${escapeHTML(project.name)}</a>`).join("");
  const project = currentProject();
  $(".crumb strong").textContent = project.name;
  $(".title-line h1").textContent = project.name;
  $(".project-title-icon").textContent = "✦";
}
function switchProject(projectId) {
  if (!projects.some((project) => project.id === projectId)) return;
  activeProjectId = projectId;
  writeStorage(STORAGE.activeProject, activeProjectId);
  tasks = loadTasks(activeProjectId);
  $("#task-search").value = "";
  $("#priority-filter").value = "all";
  $("#assignee-filter").value = "all";
  dueFilter = "all";
  renderProjects(); render();
  notify(`Switched to ${currentProject().name}.`);
}
function renderProjectManager() {
  openUtilityModal("Project settings", `<p class="utility-description">Manage the projects in the current local workspace.</p>
    <div class="utility-project-list">${projects.map((project) => `<div><span class="project-dot dot-${escapeHTML(project.colour || "purple")}"></span><strong>${escapeHTML(project.name)}</strong><span>${project.id === activeProjectId ? "Active" : ""}</span></div>`).join("")}</div>
    <form id="project-rename-form" class="utility-form"><label>Rename active project<input name="name" required minlength="2" maxlength="40" value="${escapeHTML(currentProject().name)}"></label><button class="primary-button" type="submit">Save project name</button></form>
    <button class="text-danger" id="delete-project" type="button" ${projects.length <= 1 ? "disabled" : ""}>Delete active project and its local tasks</button>`);
}
function openCreateProject() {
  openUtilityModal("Create project", `<form id="project-create-form" class="utility-form"><label>Project name<input name="name" required minlength="2" maxlength="40" placeholder="e.g. Portfolio redesign"></label><label>Project colour<select name="colour"><option value="purple">Purple</option><option value="blue">Blue</option><option value="orange">Orange</option></select></label><button class="primary-button" type="submit">Create project</button></form>`);
}
$("#add-project-button").addEventListener("click", openCreateProject);
$("#project-menu").addEventListener("click", renderProjectManager);
$("#project-nav").addEventListener("click", (event) => {
  const link = event.target.closest("[data-project-id]");
  if (!link) return;
  event.preventDefault(); switchProject(link.dataset.projectId);
});

// 12. Workspace management. Projects are shared between workspace labels in this demo.
function updateWorkspaceLabel() {
  $("#workspace-name").textContent = activeWorkspace;
  $("#workspace-avatar").textContent = activeWorkspace.charAt(0).toUpperCase();
}
function renderWorkspaceManager() {
  openUtilityModal("Manage workspaces", `<p class="utility-description">Create and switch between local workspace labels. The sample project list is shared between these labels because this is a frontend-only exercise.</p>
    <div class="utility-project-list">${workspaces.map((name) => `<div><span class="workspace-avatar">${escapeHTML(name.charAt(0).toUpperCase())}</span><strong>${escapeHTML(name)}</strong><span>${name === activeWorkspace ? "Current" : ""}</span><button class="small-action" data-workspace-switch="${escapeHTML(name)}" type="button">Switch</button></div>`).join("")}</div>
    <form id="workspace-create-form" class="utility-form"><label>New workspace<input name="name" required minlength="2" maxlength="35" placeholder="Workspace name"></label><button class="primary-button" type="submit">Create workspace</button></form>
    <form id="workspace-rename-form" class="utility-form"><label>Rename current workspace<input name="name" required minlength="2" maxlength="35" value="${escapeHTML(activeWorkspace)}"></label><button class="small-action" type="submit">Rename</button></form>
    <button class="text-danger" id="delete-workspace" type="button" ${workspaces.length <= 1 ? "disabled" : ""}>Delete current workspace</button>`);
}
$("#workspace-selector").addEventListener("click", renderWorkspaceManager);

// 13. Shared modal helpers for profile, settings, and notifications.
function openUtilityModal(title, html) {
  $("#utility-title").textContent = title;
  $("#utility-content").innerHTML = html;
  $("#utility-backdrop").hidden = false;
}
function closeUtilityModal() { $("#utility-backdrop").hidden = true; }
function renderProfile() {
  openUtilityModal("Profile", `<form id="profile-form" class="utility-form"><label>Full name<input name="name" required minlength="2" value="${escapeHTML(profile.name)}"></label><label>Email address<input name="email" type="email" required value="${escapeHTML(profile.email)}"></label><button class="primary-button" type="submit">Save profile</button><button class="small-action" id="open-settings" type="button">Open settings</button></form>`);
}
function renderSettings() {
  openUtilityModal("Settings", `<form id="settings-form" class="utility-form"><label>Appearance<select name="theme"><option value="light" ${document.body.classList.contains("dark") ? "" : "selected"}>Light</option><option value="dark" ${document.body.classList.contains("dark") ? "selected" : ""}>Dark</option></select></label><label class="check-option"><input name="taskReminders" type="checkbox" ${taskSettings.taskReminders ? "checked" : ""}> Show task reminder notifications</label><label class="check-option"><input name="confirmDelete" type="checkbox" ${taskSettings.confirmDelete ? "checked" : ""}> Confirm before deleting tasks or projects</label><p class="utility-description">Preferences are saved in this browser. There is no login or cloud sync.</p><button class="primary-button" type="submit">Save settings</button></form>`);
}
function renderNotifications() {
  openUtilityModal("Notifications", `<div class="notification-toolbar"><p>${notifications.filter((item) => !item.read).length} unread item(s)</p><button class="small-action" id="mark-all-read" type="button">Mark all read</button></div><div class="utility-notifications">${notifications.map((item) => `<article class="${item.read ? "read" : "unread"}"><div><strong>${escapeHTML(item.title)}</strong><p>${escapeHTML(item.detail)}</p></div><button class="small-action" type="button" data-read-notification="${item.id}">${item.read ? "Read" : "Mark read"}</button></article>`).join("")}</div>`);
}
$("#profile-menu").addEventListener("click", renderProfile);
$("#profile-shortcut").addEventListener("click", renderProfile);
$("#notification-button").addEventListener("click", renderNotifications);
$("#theme-toggle").addEventListener("click", () => {
  const dark = document.body.classList.toggle("dark");
  writeStorage(STORAGE.theme, dark ? "dark" : "light");
});
$("#utility-close").addEventListener("click", closeUtilityModal);
$("#utility-backdrop").addEventListener("click", (event) => { if (event.target.id === "utility-backdrop") closeUtilityModal(); });

// Modal buttons are delegated because the contents change depending on the active panel.
$("#utility-content").addEventListener("click", (event) => {
  const workspaceButton = event.target.closest("[data-workspace-switch]");
  const readButton = event.target.closest("[data-read-notification]");
  const listEdit = event.target.closest("[data-list-edit]");
  const calendarEdit = event.target.closest("[data-calendar-edit]");
  if (workspaceButton) { activeWorkspace = workspaceButton.dataset.workspaceSwitch; writeStorage("taskflow-active-workspace-v2", activeWorkspace); updateWorkspaceLabel(); closeUtilityModal(); notify(`Switched to ${activeWorkspace}.`); }
  if (readButton) { const id = Number(readButton.dataset.readNotification); notifications = notifications.map((item) => item.id === id ? { ...item, read: true } : item); writeStorage(STORAGE.notifications, notifications); renderNotifications(); }
  if (event.target.id === "mark-all-read") { notifications = notifications.map((item) => ({ ...item, read: true })); writeStorage(STORAGE.notifications, notifications); renderNotifications(); notify("Notifications marked as read."); }
  if (event.target.id === "open-settings") renderSettings();
  if (event.target.id === "delete-workspace" && workspaces.length > 1 && (!taskSettings.confirmDelete || confirm(`Delete workspace “${activeWorkspace}”?`))) {
    workspaces = workspaces.filter((name) => name !== activeWorkspace); activeWorkspace = workspaces[0];
    writeStorage(STORAGE.workspace, workspaces); writeStorage("taskflow-active-workspace-v2", activeWorkspace); updateWorkspaceLabel(); renderWorkspaceManager();
  }
  if (event.target.id === "delete-project" && projects.length > 1 && (!taskSettings.confirmDelete || confirm(`Delete “${currentProject().name}” and its tasks?`))) {
    const removedId = activeProjectId;
    projects = projects.filter((project) => project.id !== removedId);
    localStorage.removeItem(taskStorageKey(removedId));
    activeProjectId = projects[0].id; tasks = loadTasks(activeProjectId);
    writeStorage(STORAGE.projects, projects); writeStorage(STORAGE.activeProject, activeProjectId);
    renderProjects(); render(); renderProjectManager(); notify("Project deleted.");
  }
  if (listEdit) openTaskModal(Number(listEdit.dataset.listEdit));
  if (calendarEdit) openTaskModal(Number(calendarEdit.dataset.calendarEdit));
  if (event.target.id === "calendar-prev") { calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1); render(); }
  if (event.target.id === "calendar-next") { calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1); render(); }
  if (event.target.id === "calendar-today") { calendarDate = new Date(); render(); }
});

$("#utility-content").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  if (form.id === "workspace-create-form") {
    const name = form.elements.name.value.trim();
    if (workspaces.some((item) => item.toLowerCase() === name.toLowerCase())) { notify("That workspace already exists."); return; }
    workspaces.push(name); activeWorkspace = name; writeStorage(STORAGE.workspace, workspaces); writeStorage("taskflow-active-workspace-v2", activeWorkspace); updateWorkspaceLabel(); renderWorkspaceManager(); notify("Workspace created.");
  }
  if (form.id === "workspace-rename-form") {
    const name = form.elements.name.value.trim();
    if (workspaces.some((item) => item !== activeWorkspace && item.toLowerCase() === name.toLowerCase())) { notify("That workspace name is already used."); return; }
    workspaces = workspaces.map((item) => item === activeWorkspace ? name : item); activeWorkspace = name; writeStorage(STORAGE.workspace, workspaces); writeStorage("taskflow-active-workspace-v2", activeWorkspace); updateWorkspaceLabel(); renderWorkspaceManager(); notify("Workspace renamed.");
  }
  if (form.id === "project-create-form") {
    const name = form.elements.name.value.trim();
    const project = { id: `project-${Date.now()}`, name, colour: form.elements.colour.value };
    projects.push(project); writeStorage(STORAGE.projects, projects); activeProjectId = project.id; tasks = []; persistTasks(); writeStorage(STORAGE.activeProject, activeProjectId); renderProjects(); render(); closeUtilityModal(); notify("Project created.");
  }
  if (form.id === "project-rename-form") {
    const name = form.elements.name.value.trim();
    currentProject().name = name; writeStorage(STORAGE.projects, projects); renderProjects(); renderProjectManager(); notify("Project renamed.");
  }
  if (form.id === "profile-form") {
    profile = { name: form.elements.name.value.trim(), email: form.elements.email.value.trim() };
    writeStorage(STORAGE.profile, profile); $("#profile-name").textContent = profile.name; $("#profile-avatar").textContent = profile.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase(); $("#profile-shortcut").textContent = $("#profile-avatar").textContent; closeUtilityModal(); notify("Profile saved.");
  }
  if (form.id === "settings-form") {
    const theme = form.elements.theme.value;
    document.body.classList.toggle("dark", theme === "dark");
    writeStorage(STORAGE.theme, theme);
    taskSettings = { taskReminders: form.elements.taskReminders.checked, confirmDelete: form.elements.confirmDelete.checked };
    writeStorage("taskflow-settings-v2", taskSettings);
    closeUtilityModal(); notify("Settings saved.");
  }
});

// 14. Search, filters, and view controls.
$("#task-search").addEventListener("input", render);
$("#priority-filter").addEventListener("change", render);
$("#assignee-filter").addEventListener("change", render);
$("#clear-filters").addEventListener("click", () => {
  $("#task-search").value = ""; $("#priority-filter").value = "all"; $("#assignee-filter").value = "all"; dueFilter = "all"; render(); notify("Filters cleared.");
});
$("#board-view-button").addEventListener("click", () => { viewMode = "board"; render(); });
$("#list-view-button").addEventListener("click", () => { viewMode = "list"; render(); });
$("#calendar-view-button").addEventListener("click", () => { viewMode = "calendar"; render(); });
$("#view-toggle").addEventListener("click", () => { viewMode = viewMode === "board" ? "list" : "board"; render(); });
$("#list-view-container").addEventListener("click", (event) => {
  if (event.target.id === "list-add-task") openTaskModal();
  const edit = event.target.closest("[data-list-edit]"); if (edit) openTaskModal(Number(edit.dataset.listEdit));
});
$("#calendar-view-container").addEventListener("click", (event) => {
  if (event.target.id === "calendar-prev") { calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() - 1, 1); render(); }
  if (event.target.id === "calendar-next") { calendarDate = new Date(calendarDate.getFullYear(), calendarDate.getMonth() + 1, 1); render(); }
  if (event.target.id === "calendar-today") { calendarDate = new Date(); render(); }
  const edit = event.target.closest("[data-calendar-edit]"); if (edit) openTaskModal(Number(edit.dataset.calendarEdit));
});

// 15. Today and Upcoming links now apply real date filters to all three views.
$("#today-link").addEventListener("click", (event) => { event.preventDefault(); dueFilter = "today"; render(); notify("Showing tasks due today."); closeMobile(); });
$("#upcoming-link").addEventListener("click", (event) => { event.preventDefault(); dueFilter = "upcoming"; render(); notify("Showing upcoming open tasks."); closeMobile(); });

// 16. Responsive navigation and first render.
$("#mobile-menu").addEventListener("click", () => { $("#sidebar").classList.add("open"); $("#mobile-backdrop").hidden = false; });
function closeMobile() { $("#sidebar").classList.remove("open"); $("#mobile-backdrop").hidden = true; }
$("#mobile-backdrop").addEventListener("click", closeMobile);
document.addEventListener("keydown", (event) => {
  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); $("#task-search").focus(); }
  if (event.key === "Escape") { closeTaskModal(); closeUtilityModal(); closeMobile(); }
});
if (readStorage(STORAGE.theme, "light") === "dark") document.body.classList.add("dark");
$("#profile-name").textContent = profile.name;
$("#profile-avatar").textContent = profile.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join("").toUpperCase();
$("#profile-shortcut").textContent = $("#profile-avatar").textContent;
$("#workspace-name").textContent = activeWorkspace;
$("#workspace-avatar").textContent = activeWorkspace.charAt(0).toUpperCase();
$("#year").textContent = new Date().getFullYear();
renderProjects(); render();
