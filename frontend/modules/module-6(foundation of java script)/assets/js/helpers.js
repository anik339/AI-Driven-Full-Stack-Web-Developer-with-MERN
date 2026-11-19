// SHARED HELPER FUNCTIONS FOR ALL LESSONS
// These helpers show each result on the webpage and in the browser Console.
function formatLessonValue(value) {
    if (value === undefined) return "undefined";
    if (value === null) return "null";
    if (value instanceof Date) return value.toString();
    if (value instanceof Map) return `Map ${JSON.stringify(Array.from(value.entries()), null, 2)}`;
    if (value instanceof Set) return `Set ${JSON.stringify(Array.from(value.values()), null, 2)}`;
    if (typeof value === "function") return value.toString();
    if (typeof value === "object") {
        try { return JSON.stringify(value, null, 2); }
        catch (error) { return String(value); }
    }
    return String(value);
}
function showSection(title) {
    const output = document.getElementById("output");
    if (!output) return;
    const emptyMessage = output.querySelector(".empty-state");
    if (emptyMessage) emptyMessage.remove();
    const heading = document.createElement("h3");
    heading.textContent = title;
    heading.style.color = "#ffffff";
    output.appendChild(heading);
}
function showResult(label, value) {
    const output = document.getElementById("output");
    console.log(label + ":", value);
    if (!output) return;
    const emptyMessage = output.querySelector(".empty-state");
    if (emptyMessage) emptyMessage.remove();
    const row = document.createElement("div");
    row.className = "result-row";
    const labelSpan = document.createElement("span");
    labelSpan.className = "result-label";
    labelSpan.textContent = label + ": ";
    const valueSpan = document.createElement("span");
    valueSpan.textContent = formatLessonValue(value);
    row.append(labelSpan, valueSpan);
    output.appendChild(row);
}
function showNote(message) {
    const output = document.getElementById("output");
    if (!output) return;
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = message;
    output.parentElement.appendChild(note);
}
