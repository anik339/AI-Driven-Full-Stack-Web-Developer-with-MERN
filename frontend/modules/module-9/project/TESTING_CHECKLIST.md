# CodeTrack Testing Checklist

## Project management
- [ ] The default project appears on first load.
- [ ] A new project can be created.
- [ ] Blank and duplicate project names are rejected with a readable message.
- [ ] Switching projects shows that project's own tasks.

## Task CRUD and validation
- [ ] A task can be created with a title only.
- [ ] A task can be created with description, priority, and due date.
- [ ] Blank task titles are rejected.
- [ ] A task can be edited and saved.
- [ ] Cancel edit restores the create-task form.
- [ ] A task can be deleted after confirmation.

## Status, search, and filters
- [ ] Next status cycles To do → In progress → Completed → To do.
- [ ] Search matches title and description.
- [ ] Status and priority filters can be combined.
- [ ] Sorting works for newest, due date, priority, and title.
- [ ] Empty-state message appears when there are no matching tasks.

## Persistence and backup
- [ ] Refreshing the page preserves projects and tasks.
- [ ] Export creates a JSON backup.
- [ ] Import restores a valid CodeTrack JSON backup.
- [ ] Invalid JSON or an invalid backup displays an error message.
- [ ] Theme preference survives refresh when browser storage is available.

## Quality
- [ ] No JavaScript errors appear in DevTools Console.
- [ ] All user-provided text is rendered as text, not injected HTML.
- [ ] Buttons and inputs have accessible names.
- [ ] Keyboard focus is visible.
- [ ] Layout works at mobile and desktop widths.
