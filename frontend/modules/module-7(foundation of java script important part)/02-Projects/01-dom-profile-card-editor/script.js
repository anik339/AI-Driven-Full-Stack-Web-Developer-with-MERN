// PROJECT 01: DOM PROFILE CARD EDITOR
// This project combines element selection, text updates, attributes, classList, and styles.

const form = document.querySelector("#profile-form");
const card = document.querySelector("#profile-card");
const message = document.querySelector("#form-message");

// Listen for the form submit event instead of adding a click listener to the button.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.querySelector("#name-input").value.trim();
  const role = document.querySelector("#role-input").value.trim();
  const bio = document.querySelector("#bio-input").value.trim();
  const link = document.querySelector("#link-input").value.trim();
  const isAvailable = document.querySelector("#available-input").checked;

  if (!name || !role || !bio) {
    message.textContent = "Please complete the name, role, and bio.";
    return;
  }

  // Update text safely with textContent.
  document.querySelector("#profile-name").textContent = name;
  document.querySelector("#profile-role").textContent = role;
  document.querySelector("#profile-bio").textContent = bio;

  // Use the first letters of the name as simple avatar initials.
  const initials = name.split(/\s+/).slice(0, 2).map((part) => part[0].toUpperCase()).join("");
  const avatar = document.querySelector("#avatar");
  avatar.textContent = initials || "JD";
  avatar.setAttribute("aria-label", `Avatar initials for ${name}`);

  // Only allow a normal HTTP or HTTPS profile URL.
  try {
    const parsedUrl = new URL(link);
    if (!["http:", "https:"].includes(parsedUrl.protocol)) throw new Error("Invalid protocol");
    document.querySelector("#profile-link").setAttribute("href", parsedUrl.href);
  } catch {
    message.textContent = "Enter a valid http or https profile URL.";
    return;
  }

  // Change a status label and class based on the checkbox.
  const status = document.querySelector("#profile-status");
  status.textContent = isAvailable ? "Available for learning" : "Currently unavailable";
  status.classList.toggle("unavailable", !isAvailable);

  message.textContent = "Profile card updated successfully.";
});

// Demonstrate classList.toggle() and the style property.
document.querySelector("#theme-button").addEventListener("click", () => {
  card.classList.toggle("dark-theme");
});
