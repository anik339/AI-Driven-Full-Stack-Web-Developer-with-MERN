const themeText = document.querySelector("#theme");
const status = document.querySelector("#status");
const preference = window.matchMedia("(prefers-color-scheme: dark)");

themeText.textContent = preference.matches
  ? "Your system prefers dark mode."
  : "Your system prefers light mode.";

preference.addEventListener("change", (event) => {
  themeText.textContent = event.matches
    ? "Your system now prefers dark mode."
    : "Your system now prefers light mode.";
});

document.querySelector("#copy").addEventListener("click", async () => {
  if (!navigator.clipboard?.writeText) {
    status.textContent = "Clipboard API is unavailable here.";
    return;
  }

  try {
    await navigator.clipboard.writeText("Practice JavaScript every day.");
    status.textContent = "Reminder copied.";
  } catch (error) {
    status.textContent = "Clipboard permission was not granted.";
    console.error(error);
  }
});