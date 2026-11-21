// LESSON 06: CHANGING CSS WITH THE style PROPERTY

const card = document.querySelector("#style-card");
const output = document.querySelector("#style-output");

document.querySelector("#blue-style").addEventListener("click", () => {
  // CSS property names become camelCase in JavaScript.
  card.style.backgroundColor = "#eaf0ff";
  card.style.color = "#2448c7";
  card.style.borderColor = "#a9bcff";
  card.style.borderRadius = "24px";
  output.textContent = "Applied blue background, blue text, border, and 24px radius.";
});

document.querySelector("#green-style").addEventListener("click", () => {
  card.style.backgroundColor = "#eaf8f0";
  card.style.color = "#126c48";
  card.style.borderColor = "#9bd5b7";
  card.style.borderRadius = "12px";
  output.textContent = "Applied green styles.";
});

document.querySelector("#large-text").addEventListener("click", () => {
  card.style.fontSize = "1.2rem";
  output.textContent = "The card text size is now 1.2rem.";
});

document.querySelector("#reset-style").addEventListener("click", () => {
  // An empty string removes the inline style value and returns to CSS rules.
  card.style.backgroundColor = "";
  card.style.color = "";
  card.style.borderColor = "";
  card.style.borderRadius = "";
  card.style.fontSize = "";
  output.textContent = "Inline styles removed. The original stylesheet is active again.";
});
