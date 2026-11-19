const key = document.querySelector("#key");
const value = document.querySelector("#value");
const output = document.querySelector("#out");

document.querySelector("#run").addEventListener("click", () => {
  localStorage.setItem(key.value, value.value);
  output.textContent = `Saved in localStorage: ${localStorage.getItem(key.value)}`;
});
document.querySelector("#session").addEventListener("click", () => {
  sessionStorage.setItem(key.value, value.value);
  output.textContent = `Saved in sessionStorage: ${sessionStorage.getItem(key.value)}`;
});
document.querySelector("#read").addEventListener("click", () => {
  output.textContent = `localStorage: ${localStorage.getItem(key.value) ?? "(empty)"}; sessionStorage: ${sessionStorage.getItem(key.value) ?? "(empty)"}`;
});
document.querySelector("#remove").addEventListener("click", () => {
  localStorage.removeItem(key.value);
  sessionStorage.removeItem(key.value);
  output.textContent = "Removed this key from both storage areas.";
});

// Store objects with JSON.stringify() and restore them with JSON.parse().
// Never store passwords, tokens or sensitive data in browser storage.
