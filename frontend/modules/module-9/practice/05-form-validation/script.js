const form = document.querySelector("#form");
const password = document.querySelector("#password");
const feedback = document.querySelector("#feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  password.setCustomValidity("");

  if (password.value.length < 8) {
    password.setCustomValidity("Use at least 8 characters.");
  }

  if (!form.checkValidity()) {
    form.reportValidity();
    feedback.textContent = "Please correct the highlighted fields.";
    return;
  }

  feedback.textContent = "The form passed this practice validation.";
});