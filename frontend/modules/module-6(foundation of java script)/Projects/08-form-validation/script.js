// PROJECT 08: SMART FORM VALIDATION
// Concepts: input/blur/submit events, regular expressions, reusable validators, UX feedback.

const form = document.querySelector("#signup-form");
const fields = {
  name: document.querySelector("#full-name"),
  email: document.querySelector("#email"),
  password: document.querySelector("#password"),
  confirm: document.querySelector("#confirm-password"),
  terms: document.querySelector("#terms")
};

const errorElements = {
  name: document.querySelector("#name-error"),
  email: document.querySelector("#email-error"),
  password: document.querySelector("#password-error"),
  confirm: document.querySelector("#confirm-error"),
  terms: document.querySelector("#terms-error")
};

function showError(fieldName, message) {
  errorElements[fieldName].textContent = message;
  if (fields[fieldName].type !== "checkbox") {
    fields[fieldName].classList.toggle("invalid", Boolean(message));
    fields[fieldName].setAttribute("aria-invalid", String(Boolean(message)));
  }
}

function validateName() {
  const value = fields.name.value.trim();
  const message = value.length < 2 ? "Enter at least 2 characters." : "";
  showError("name", message);
  return !message;
}

function validateEmail() {
  const value = fields.email.value.trim();
  // This simple pattern catches common mistakes; production systems also validate on the server.
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const message = !emailPattern.test(value) ? "Enter a valid email address." : "";
  showError("email", message);
  return !message;
}

function validatePassword() {
  const value = fields.password.value;
  const message = value.length < 8 ? "Use at least 8 characters." : "";
  showError("password", message);
  updatePasswordStrength(value);
  return !message;
}

function validateConfirmPassword() {
  const message = fields.confirm.value !== fields.password.value || !fields.confirm.value
    ? "Passwords must match."
    : "";
  showError("confirm", message);
  return !message;
}

function validateTerms() {
  const message = fields.terms.checked ? "" : "Please check this box to continue.";
  showError("terms", message);
  return !message;
}

function updatePasswordStrength(password) {
  let score = 0;
  if (password.length >= 8) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^A-Za-z0-9]/.test(password)) score += 1;

  const bar = document.querySelector("#strength-bar");
  const label = document.querySelector("#strength-label");
  const levels = ["Not checked", "Weak", "Fair", "Good", "Strong"];
  bar.style.width = `${score * 25}%`;
  bar.style.background = score < 2 ? "#c43c4b" : score < 4 ? "#d69b26" : "#16845b";
  label.textContent = `Password strength: ${password ? levels[score] : "not checked"}`;
}

function validateForm() {
  // Run every validator. Do not stop after the first invalid field.
  return [
    validateName(),
    validateEmail(),
    validatePassword(),
    validateConfirmPassword(),
    validateTerms()
  ].every(Boolean);
}

// Validate a field when the user leaves it, then update feedback as they type.
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
  document.querySelector("#success-message").hidden = true;

  if (!validateForm()) {
    form.querySelector(".invalid")?.focus();
    return;
  }

  // No account is created. This message only confirms that client-side checks passed.
  const success = document.querySelector("#success-message");
  success.textContent = "All checks passed. This demo does not send or store your information.";
  success.hidden = false;
  form.reset();
  Object.keys(errorElements).forEach((key) => showError(key, ""));
  updatePasswordStrength("");
});
