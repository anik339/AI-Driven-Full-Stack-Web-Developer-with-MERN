# Project 04 — Taskflow Project Management & Kanban Board

A responsive frontend-only project management app built with HTML5, CSS3, and vanilla JavaScript.

## Working features
- Create, edit, and delete tasks with title, description, status, priority, assignee, and due date
- Drag and drop tasks between Kanban columns on desktop browsers
- Switch between Board, List, and Calendar views
- Search and filter by priority, assignee, due today, and upcoming due dates
- Create, switch, rename, and delete projects; each project has its own locally saved tasks
- Create, switch, rename, and delete workspace labels
- Edit local profile details, notifications, and appearance settings
- Notifications can be marked read or all read
- Dark mode and responsive mobile navigation
- localStorage persistence for projects, tasks, profile, and preferences

## Folder structure
```text
04-project-management-kanban/
├── index.html
├── README.md
├── css/style.css
├── js/app.js
└── assets/
```

## Run
Open `index.html` with VS Code Live Server. No npm install, backend, or database is required.

## Important limitations
- Workspace labels and projects are local to the current browser. Workspace labels share the sample project list in this frontend exercise.
- Tasks are saved separately for each project in localStorage. Clearing browser storage removes those changes.
- Native drag-and-drop is best supported on desktop; on touch devices use the task edit action and status selector.
- This is not a multi-user collaboration service and does not sync between devices.
