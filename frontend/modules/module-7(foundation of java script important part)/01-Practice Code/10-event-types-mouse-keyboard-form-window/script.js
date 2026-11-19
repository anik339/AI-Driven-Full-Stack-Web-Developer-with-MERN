// LESSON 10: MOUSE, KEYBOARD, FORM, AND WINDOW EVENTS

const mouseZone = document.querySelector("#mouse-zone");
const mouseOutput = document.querySelector("#mouse-output");

// Mouse events happen when the pointer interacts with an element.
mouseZone.addEventListener("click", () => {
  mouseOutput.textContent = "Mouse event: click";
});
mouseZone.addEventListener("dblclick", () => {
  mouseOutput.textContent = "Mouse event: double-click";
});
mouseZone.addEventListener("mouseenter", () => {
  mouseZone.classList.add("mouse-active");
  mouseOutput.textContent = "Mouse event: mouseenter";
});
mouseZone.addEventListener("mouseleave", () => {
  mouseZone.classList.remove("mouse-active");
  mouseOutput.textContent = "Mouse event: mouseleave";
});

// Keyboard events fire while the user interacts with a keyboard.
document.querySelector("#keyboard-input").addEventListener("keydown", (event) => {
  document.querySelector("#keyboard-output").textContent =
    `Key pressed: ${event.key} | Code: ${event.code}`;
});

// A form's submit event fires when the user submits the form.
document.querySelector("#event-form").addEventListener("submit", (event) => {
  // Prevent the browser from reloading the page for this practice example.
  event.preventDefault();
  const name = document.querySelector("#event-name").value.trim();
  document.querySelector("#form-output").textContent = `Form submitted. Hello, ${name}!`;
});

// Window events belong to the browser window, not a particular HTML button.
function showWindowSize() {
  document.querySelector("#window-output").textContent =
    `Window size: ${window.innerWidth}px wide × ${window.innerHeight}px high`;
}
window.addEventListener("resize", showWindowSize);
showWindowSize();
