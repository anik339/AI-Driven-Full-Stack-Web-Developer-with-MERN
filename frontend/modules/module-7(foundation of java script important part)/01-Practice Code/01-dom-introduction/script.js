// LESSON 01: UNDERSTANDING THE DOM
// The browser reads HTML and creates a tree of objects called the DOM.

// `document` represents the current HTML page.
console.log("The page title is:", document.title);

// `querySelector()` finds the first element matching a CSS selector.
const heading = document.querySelector("#main-heading");
const paragraph = document.querySelector("#intro-text");
const output = document.querySelector("#dom-output");

// A click event tells JavaScript when the user presses this button.
document.querySelector("#change-button").addEventListener("click", () => {
  // JavaScript changes the content of existing DOM elements.
  heading.textContent = "JavaScript changed this heading!";
  paragraph.textContent = "You just changed the page through the DOM.";
  output.textContent = "Success: JavaScript selected and updated three DOM elements.";
});

// Reset the original text so you can repeat the experiment.
document.querySelector("#reset-button").addEventListener("click", () => {
  heading.textContent = "Welcome to the DOM";
  paragraph.textContent = "This paragraph is an HTML element. JavaScript can find it and update it.";
  output.textContent = "The browser has loaded this HTML document.";
});
