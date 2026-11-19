// LESSON 05: classList METHODS

const card = document.querySelector("#demo-card");
const output = document.querySelector("#class-output");

function showClasses(message) {
  // className shows the complete class string on this element.
  output.textContent = `${message} Current classes: ${card.className}`;
}

document.querySelector("#add-class").addEventListener("click", () => {
  // add() adds a class without removing existing classes.
  card.classList.add("highlight");
  showClasses("Added the highlight class.");
});

document.querySelector("#remove-class").addEventListener("click", () => {
  // remove() removes only the class named inside the method.
  card.classList.remove("highlight");
  showClasses("Removed the highlight class.");
});

document.querySelector("#toggle-class").addEventListener("click", () => {
  // toggle() adds the class if missing, or removes it if already present.
  card.classList.toggle("dark-mode");
  showClasses("Toggled the dark-mode class.");
});

document.querySelector("#check-class").addEventListener("click", () => {
  // contains() returns true or false.
  const hasHighlight = card.classList.contains("highlight");
  showClasses(`Does this card have highlight? ${hasHighlight}`);
});
