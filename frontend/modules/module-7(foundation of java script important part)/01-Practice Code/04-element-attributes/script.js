// LESSON 04: GETTING AND SETTING ATTRIBUTES

const link = document.querySelector("#resource-link");
const input = document.querySelector("#demo-input");
const output = document.querySelector("#attribute-output");

// getAttribute() reads the exact attribute value written on an element.
document.querySelector("#read-attributes").addEventListener("click", () => {
  const href = link.getAttribute("href");
  const target = link.getAttribute("target");
  const placeholder = input.getAttribute("placeholder");

  output.textContent = `Link href: ${href} | target: ${target} | input placeholder: ${placeholder}`;
});

// setAttribute() creates or updates an HTML attribute.
document.querySelector("#change-attributes").addEventListener("click", () => {
  link.setAttribute("title", "This title was added by JavaScript");
  input.setAttribute("placeholder", "New placeholder from JavaScript");
  input.setAttribute("aria-label", "Input updated using setAttribute");
  output.textContent = "The link title, input placeholder, and accessible label were updated.";
});

// Attributes can also be changed directly through element properties.
// This button demonstrates the disabled property.
document.querySelector("#toggle-disabled").addEventListener("click", () => {
  input.disabled = !input.disabled;
  output.textContent = `Input disabled: ${input.disabled}`;
});
