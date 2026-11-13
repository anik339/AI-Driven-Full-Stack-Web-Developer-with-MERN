// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const fruits = ["Apple", "Banana", "Orange"];
  const removed = fruits.splice(1, 1, "Mango");
  output.textContent = `Updated: ${fruits.join(", ")}\nRemoved: ${removed.join(", ")}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
