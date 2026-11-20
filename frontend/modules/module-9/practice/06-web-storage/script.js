const input = document.querySelector("#note");
const status = document.querySelector("#status");
const key = "module9.practice.note";

function loadNote() {
  try {
    input.value = localStorage.getItem(key) ?? "";
    status.textContent = input.value ? "Saved note loaded." : "No saved note.";
  } catch (error) {
    status.textContent = "Browser storage is unavailable.";
    console.error(error);
  }
}

document.querySelector("#save").addEventListener("click", () => {
  try {
    const note = input.value.trim();
    if (!note) {
      status.textContent = "Write a note before saving.";
      return;
    }
    localStorage.setItem(key, note);
    status.textContent = "Note saved. Refresh to test persistence.";
  } catch (error) {
    status.textContent = "Could not save the note.";
    console.error(error);
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  localStorage.removeItem(key);
  input.value = "";
  status.textContent = "Saved note cleared.";
});

loadNote();