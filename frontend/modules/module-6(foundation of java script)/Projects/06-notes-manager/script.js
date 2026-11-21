// PROJECT 06: NOTES MANAGER
// Concepts: CRUD (create, read, update, delete), search, state, localStorage.

const STORAGE_KEY = "js-project-06-notes";
let notes = loadNotes();
let editingId = null;

const form = document.querySelector("#note-form");
const titleInput = document.querySelector("#note-title");
const bodyInput = document.querySelector("#note-body");
const notesGrid = document.querySelector("#notes-grid");

function loadNotes() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveNotes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = titleInput.value.trim();
  const body = bodyInput.value.trim();
  if (!title || !body) return;

  if (editingId) {
    // UPDATE: find the note being edited and replace its content.
    notes = notes.map((note) => note.id === editingId
      ? { ...note, title, body, updatedAt: new Date().toISOString() }
      : note);
  } else {
    // CREATE: add a new note to the beginning of the array.
    notes.unshift({
      id: crypto.randomUUID(),
      title,
      body,
      pinned: false,
      createdAt: new Date().toISOString()
    });
  }

  saveNotes();
  resetEditor();
  render();
});

function resetEditor() {
  editingId = null;
  form.reset();
  document.querySelector("#editor-heading").textContent = "New note";
  document.querySelector("#save-note").textContent = "Save note";
  document.querySelector("#cancel-edit").hidden = true;
}

document.querySelector("#cancel-edit").addEventListener("click", resetEditor);

document.querySelector("#note-search").addEventListener("input", render);
document.querySelector("#note-filter").addEventListener("change", render);

notesGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-action]");
  if (!button) return;
  const note = notes.find((item) => item.id === button.dataset.id);
  if (!note) return;

  if (button.dataset.action === "edit") {
    editingId = note.id;
    titleInput.value = note.title;
    bodyInput.value = note.body;
    document.querySelector("#editor-heading").textContent = "Edit note";
    document.querySelector("#save-note").textContent = "Update note";
    document.querySelector("#cancel-edit").hidden = false;
    titleInput.focus();
    return;
  }

  if (button.dataset.action === "pin") note.pinned = !note.pinned;
  if (button.dataset.action === "delete") notes = notes.filter((item) => item.id !== note.id);

  saveNotes();
  render();
});

function createNoteCard(note) {
  const card = document.createElement("article");
  card.className = `note-card${note.pinned ? " pinned" : ""}`;

  const title = document.createElement("h3");
  title.textContent = `${note.pinned ? "📌 " : ""}${note.title}`;
  const body = document.createElement("p");
  body.textContent = note.body;
  const meta = document.createElement("div");
  meta.className = "note-meta";
  meta.textContent = `Updated ${new Date(note.updatedAt || note.createdAt).toLocaleString()}`;

  const actions = document.createElement("div");
  actions.className = "note-actions";
  actions.append(
    makeActionButton("Edit", "edit", note.id, "btn btn-secondary"),
    makeActionButton(note.pinned ? "Unpin" : "Pin", "pin", note.id, "btn btn-secondary"),
    makeActionButton("Delete", "delete", note.id, "btn btn-danger")
  );

  card.append(title, body, meta, actions);
  return card;
}

function makeActionButton(label, action, id, className) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = className;
  button.textContent = label;
  button.dataset.action = action;
  button.dataset.id = id;
  return button;
}

function render() {
  const query = document.querySelector("#note-search").value.trim().toLowerCase();
  const filter = document.querySelector("#note-filter").value;

  const visible = notes
    .filter((note) => filter !== "pinned" || note.pinned)
    .filter((note) => `${note.title} ${note.body}`.toLowerCase().includes(query))
    .sort((a, b) => Number(b.pinned) - Number(a.pinned));

  notesGrid.replaceChildren(...visible.map(createNoteCard));
  document.querySelector("#empty-state").hidden = visible.length > 0;
}

render();
