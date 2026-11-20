const form = document.querySelector("#name-form");
const nameInput = document.querySelector("#name");
const output = document.querySelector("#output");

form.addEventListener("submit", (event) => {
  // Keep this exercise on the current page instead of reloading.
  event.preventDefault();
  const name = nameInput.value.trim();

  if (name.length < 2) {
    output.textContent = "Please enter at least two characters.";
    return;
  }

  output.textContent =
    `Event: ${event.type}; target: ${event.target.id}; listener: ${event.currentTarget.id}. Hello, ${name}!`;
});