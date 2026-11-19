/* Shared output helpers for Module 08 supplementary JavaScript lessons. */
(() => {
  const output = document.getElementById("output");

  function ensureOutput() {
    if (!output) {
      console.warn("The lesson page is missing an element with id=\"output\".");
      return null;
    }
    return output;
  }

  function formatValue(value) {
    if (typeof value === "string") return value;
    if (typeof value === "undefined") return "undefined";
    if (typeof value === "function") return value.toString();
    try {
      return JSON.stringify(value, null, 2);
    } catch (error) {
      return String(value);
    }
  }

  window.showSection = function showSection(title) {
    const target = ensureOutput();
    if (!target) return;
    const heading = document.createElement("h3");
    heading.className = "section-title";
    heading.textContent = title;
    target.appendChild(heading);
  };

  window.showResult = function showResult(label, value) {
    const target = ensureOutput();
    if (!target) return;
    const row = document.createElement("div");
    row.className = "result-row";
    const name = document.createElement("span");
    name.className = "result-label";
    name.textContent = label;
    const result = document.createElement("pre");
    result.className = "result-value";
    result.textContent = formatValue(value);
    row.append(name, result);
    target.appendChild(row);
  };

  window.showNote = function showNote(message) {
    const target = ensureOutput();
    if (!target) return;
    const note = document.createElement("p");
    note.className = "note";
    note.textContent = message;
    target.appendChild(note);
  };
})();
