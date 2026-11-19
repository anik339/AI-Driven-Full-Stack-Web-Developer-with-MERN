// PROJECT 05: SMART SIGNUP FORM VALIDATOR
// This is a front-end practice project. It does not create an account or send data to a server.

const form = document.querySelector("#signup-form");

const fields = {
  name: document.querySelector("#full-name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  confirm: document.querySelector("#confirm-password"),
  terms: document.querySelector("#terms")
};

const errors = {
  name: document.querySelector("#name-error"),
  email: document.querySelector("#email-error"),
  password: document.querySelector("#password-error"),
  confirm: document.querySelector("#confirm-error"),
  terms: document.querySelector("#terms-error")
};

// One reusable function displays an error and updates the input's accessibility state.
function showError(fieldName, message) {
  errors[fieldName].textContent = message;

  if (fieldName !== "terms") {
    fields[fieldName].classList.toggle("invalid", Boolean(message));
    fields[fieldName].setAttribute("aria-invalid", String(Boolean(message)));
  }
}

function validateName() {
  const valid = fields.name.value.trim().length >= 2;
  showError("name", valid ? "" : "Please enter at least 2 characters.");
  return valid;
}

function validateEmail() {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailPattern.test(fields.email.value.trim());
  showError("email", valid ? "" : "Enter a valid email address.");
  return valid;
}

function validatePassword() {
  const value = fields.password.value;
  const valid = value.length >= 8;
  showError("password", valid ? "" : "Password must contain at least 8 characters.");
  updateStrength(value);
  return valid;
}

function validateConfirmPassword() {
  const valid = fields.confirm.value.length > 0 &&
    fields.confirm.value === fields.password.value;
  showError("confirm", valid ? "" : "The passwords do not match.");
  return valid;
}

function validateTerms() {
  const valid = fields.terms.checked;
  showError("terms", valid ? "" : "Please tick the checkbox to continue.");
  return valid;
}

function updateStrength(value) {
  let score = 0;
  if (value.length >= 8) score += 1;
  if (/[A-Z]/.test(value)) score += 1;
  if (/[0-9]/.test(value)) score += 1;
  if (/[^A-Za-z0-9]/.test(value)) score += 1;

  const bar = document.querySelector("#strength-bar");
  const text = document.querySelector("#strength-text");
  const labels = ["Not checked", "Weak", "Fair", "Good", "Strong"];

  // Change the bar width and colour using the style property.
  bar.style.width = `${score * 25}%`;
  bar.style.backgroundColor = score < 2 ? "#c43c4b" : score < 4 ? "#d69b26" : "#16845b";
  text.textContent = `Password strength: ${value ? labels[score] : "not checked"}`;
}

function validateAll() {
  // Run all checks so the user can see every problem at once.
  return [
    validateName(),
    validateEmail(),
    validatePassword(),
    validateConfirmPassword(),
    validateTerms()
  ].every(Boolean);
}

// Validate some fields while the user types.
fields.name.addEventListener("blur", validateName);
fields.email.addEventListener("blur", validateEmail);
fields.password.addEventListener("input", () => {
  validatePassword();
  if (fields.confirm.value) validateConfirmPassword();
});
fields.confirm.addEventListener("input", validateConfirmPassword);
fields.terms.addEventListener("change", validateTerms);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const success = document.querySelector("#success-message");
  success.hidden = true;

  if (!validateAll()) {
    form.querySelector(".invalid")?.focus();
    return;
  }

  // This success message is only a demonstration of successful client-side validation.
  success.textContent = "All validation checks passed. No information was sent or stored.";
  success.hidden = false;
  success.classList.add("visible");
});
