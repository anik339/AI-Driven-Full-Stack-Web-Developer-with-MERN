// PROJECT 03: DOM EVENT PLAYGROUND
// This project brings together the event types from video 10 and the Event object from video 11.

// 1. MOUSE EVENTS
const mousePad = document.querySelector("#mouse-pad");
const mouseLog = document.querySelector("#mouse-log");

mousePad.addEventListener("click", (event) => {
  mouseLog.textContent = `Event: ${event.type} | Target: ${event.target.id}`;
});
mousePad.addEventListener("mouseenter", () => {
  mousePad.classList.add("hovered");
  mouseLog.textContent = "Mouse entered the event area.";
});
mousePad.addEventListener("mouseleave", () => {
  mousePad.classList.remove("hovered");
  mouseLog.textContent = "Mouse left the event area.";
});
mousePad.addEventListener("dblclick", () => {
  mouseLog.textContent = "Double-click event detected.";
});

// 2. KEYBOARD EVENTS
document.querySelector("#key-input").addEventListener("keydown", (event) => {
  document.querySelector("#key-log").textContent =
    `Key: ${event.key} | Code: ${event.code} | Event: ${event.type}`;
});

// 3. FORM EVENTS
document.querySelector("#demo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.querySelector("#demo-name").value.trim();
  document.querySelector("#form-log").textContent = `Submit event received. Hello ${name}!`;
});

// 4. EVENT OBJECT, target, currentTarget, AND EVENT DELEGATION
const delegatedArea = document.querySelector("#delegated-area");

delegatedArea.addEventListener("click", (event) => {
  const clickedButton = event.target.closest("button[data-name]");
  if (!clickedButton) return;

  document.querySelector("#target-log").textContent =
    `event.target: ${event.target.tagName}; ` +
    `event.currentTarget: ${event.currentTarget.id}; ` +
    `button data-name: ${clickedButton.dataset.name}`;
});

// 5. WINDOW EVENT
function updateWindowDimensions() {
  document.querySelector("#resize-log").textContent =
    `Window width: ${window.innerWidth}px | Window height: ${window.innerHeight}px`;
}
window.addEventListener("resize", updateWindowDimensions);
updateWindowDimensions();
