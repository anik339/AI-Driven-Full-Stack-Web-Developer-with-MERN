// LESSON 02: ACCESSING ELEMENTS

const output = document.querySelector("#selection-output");

// Method 1: getElementById() finds one element by its unique id.
document.querySelector("#by-id").addEventListener("click", () => {
  const element = document.getElementById("target-heading");
  element.textContent = "Found with getElementById()!";
  output.textContent = `Selected element: ${element.tagName} with id="${element.id}".`;
});

// Method 2: querySelector() accepts a CSS selector and returns the first match.
document.querySelector("#by-query").addEventListener("click", () => {
  const element = document.querySelector(".description");
  element.textContent = "Found with querySelector('.description')!";
  output.textContent = `Selected the first matching element: ${element.className}.`;
});

// Method 3: querySelectorAll() returns a NodeList containing every match.
document.querySelector("#all-items").addEventListener("click", () => {
  const elements = document.querySelectorAll(".topic");
  const names = [];

  // forEach() lets us work with every selected element.
  elements.forEach((element, index) => {
    element.classList.add("selected-topic");
    names.push(element.textContent);
  });

  output.textContent = `Found ${elements.length} elements: ${names.join(", ")}.`;
});
