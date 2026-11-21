/**
 * MODULE 4 - JavaScript interactions
 * All code is commented so you can explain it in a job interview.
 * This is a FRONT-END ONLY project: the form intentionally does not send emails.
 */
'use strict';

// ------------------------------------------------------
// 1) Responsive mobile navigation
// ------------------------------------------------------
const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function setMenuOpen(open) {
  mobileMenu.classList.toggle('hidden', !open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
  menuIcon.classList.toggle('hidden', open);
  closeIcon.classList.toggle('hidden', !open);
}

menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  setMenuOpen(open);
});

// Close the menu after selecting an anchor link.
mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenuOpen(false));
});

// Close the menu on Escape. Also supports normal keyboard navigation.
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenuOpen(false);
});

// If the user enlarges the window to desktop width, reset the mobile menu.
window.matchMedia('(min-width: 1024px)').addEventListener('change', (event) => {
  if (event.matches) setMenuOpen(false);
});

// ------------------------------------------------------
// 2) Add a subtle navigation shadow after scrolling
// ------------------------------------------------------
const header = document.getElementById('site-header');
function updateHeaderShadow() {
  header.classList.toggle('is-scrolled', window.scrollY > 12);
}
window.addEventListener('scroll', updateHeaderShadow, { passive: true });
updateHeaderShadow();

// ------------------------------------------------------
// 3) Highlight the visible section in the desktop navigation
// ------------------------------------------------------
const navLinks = document.querySelectorAll('.nav-link');
const mainSections = document.querySelectorAll('main section[id]');
const sectionObserver = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting);
  if (visible.length === 0) return;
  const currentId = visible.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target.id;
  navLinks.forEach((link) => {
    const current = link.getAttribute('href') === `#${currentId}`;
    link.classList.toggle('is-active', current);
    if (current) link.setAttribute('aria-current', 'location');
    else link.removeAttribute('aria-current');
  });
}, { rootMargin: '-100px 0px -45% 0px', threshold: [0, .15, .4, .65] });
mainSections.forEach((section) => sectionObserver.observe(section));

// ------------------------------------------------------
// 4) Project detail popup / modal (3 working buttons)
// ------------------------------------------------------
// Titles and assets come from the provided Figma design.
const projectInfo = {
  ui: {
    title: 'UI Soup',
    image: './assets/images/project-ui-soup.webp',
    description: 'A design-resource website preview featured in the original Figma mockup. This demonstration card focuses on responsive image presentation and a clear project summary.'
  },
  gold: {
    title: 'Goldcrown Labs',
    image: './assets/images/project-goldcrown.webp',
    description: 'A web-agency homepage preview from the supplied design assets. This project card illustrates reusable Tailwind components and card layouts.'
  },
  concierge: {
    title: 'Close Concierge',
    image: './assets/images/project-close-concierge.webp',
    description: 'A business website preview included in the original Figma project. This card demonstrates responsive photography and a simple accessible details dialog.'
  }
};
const dialog = document.getElementById('project-dialog');
const dialogTitle = document.getElementById('dialog-title');
const dialogImage = document.getElementById('dialog-image');
const dialogDescription = document.getElementById('dialog-description');
const dialogClose = document.getElementById('dialog-close');

document.querySelectorAll('[data-project]').forEach((button) => {
  button.addEventListener('click', () => {
    const project = projectInfo[button.dataset.project];
    if (!project) return;
    dialogTitle.textContent = project.title;
    dialogImage.src = project.image;
    dialogImage.alt = `${project.title} design preview`;
    dialogDescription.textContent = project.description;
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
});
dialogClose.addEventListener('click', () => dialog.close());
// Click outside the white modal panel to close the dialog.
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

// ------------------------------------------------------
// 5) Validate the contact form without a back-end
// ------------------------------------------------------
// IMPORTANT: A static Live Server website cannot deliver real emails.
const contactForm = document.getElementById('contact-form');
const emailInput = document.getElementById('contact-email');
const formFeedback = document.getElementById('form-feedback');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent page refresh or accidental submission.
  if (!emailInput.value.trim() || !emailInput.validity.valid) {
    formFeedback.textContent = 'Please enter a valid email address (example: name@example.com).';
    formFeedback.classList.add('text-[#FFD5D5]');
    emailInput.focus();
    return;
  }
  formFeedback.classList.remove('text-[#FFD5D5]');
  formFeedback.textContent = 'Your email passed validation. This is a demo only — nothing was sent.';
  contactForm.reset();
});

// ------------------------------------------------------
// 6) Keep the copyright year up to date
// ------------------------------------------------------
document.getElementById('current-year').textContent = String(new Date().getFullYear());
