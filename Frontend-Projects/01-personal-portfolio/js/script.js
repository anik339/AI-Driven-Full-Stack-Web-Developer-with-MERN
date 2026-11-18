/* =========================================================
   PERSONAL PORTFOLIO — interactions
   Update CONTACT_EMAIL before using the contact form.
   ========================================================= */

const CONTACT_EMAIL = "anik65605@gmail.com";

const menuToggle = document.querySelector("#menu-toggle");
const navigation = document.querySelector("#primary-navigation");
const navLinks = document.querySelectorAll(".nav-link");
const themeToggle = document.querySelector("#theme-toggle");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

// Mobile navigation
if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Light / dark theme
const savedTheme = localStorage.getItem("portfolio-theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-theme");
  themeToggle?.setAttribute("aria-label", "Switch to light mode");
}

themeToggle?.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark-theme");
  localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );
});

// Current year in footer
const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        navLinks.forEach((link) => {
          const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isCurrent);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

// Contact form validation and mailto handoff
if (contactForm) {
  const fields = {
    name: {
      input: document.querySelector("#name"),
      error: document.querySelector("#name-error"),
      message: "Please enter your name (at least 2 characters).",
      valid: (value) => value.trim().length >= 2
    },
    email: {
      input: document.querySelector("#email"),
      error: document.querySelector("#email-error"),
      message: "Please enter a valid email address.",
      valid: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
    },
    subject: {
      input: document.querySelector("#subject"),
      error: document.querySelector("#subject-error"),
      message: "Please enter a subject (at least 3 characters).",
      valid: (value) => value.trim().length >= 3
    },
    message: {
      input: document.querySelector("#message"),
      error: document.querySelector("#message-error"),
      message: "Please enter a message (at least 10 characters).",
      valid: (value) => value.trim().length >= 10
    }
  };

  Object.values(fields).forEach(({ input, error, valid, message }) => {
    input?.addEventListener("input", () => {
      const isValid = valid(input.value);
      input.setAttribute("aria-invalid", String(!isValid));
      error.textContent = isValid || input.value.length === 0 ? "" : message;
    });
  });

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let formIsValid = true;

    Object.values(fields).forEach(({ input, error, valid, message }) => {
      const isValid = valid(input.value);
      input.setAttribute("aria-invalid", String(!isValid));
      error.textContent = isValid ? "" : message;
      if (!isValid) formIsValid = false;
    });

    if (!formIsValid) {
      formStatus.textContent = "Please correct the highlighted fields and try again.";
      fields[Object.keys(fields).find((key) => !fields[key].valid(fields[key].input.value))]
        ?.input.focus();
      return;
    }


    const name = fields.name.input.value.trim();
    const senderEmail = fields.email.input.value.trim();
    const subject = fields.subject.input.value.trim();
    const message = fields.message.input.value.trim();

    const emailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`
    );

    formStatus.textContent = "Opening your email application. The message is not sent by this website.";
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${emailSubject}&body=${emailBody}`;
  });
}
