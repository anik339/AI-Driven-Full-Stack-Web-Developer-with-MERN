// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const price = 125;
  const quantity = 3;
  const total = price * quantity;
  const remainder = 17 % 5;
  output.textContent = `Total price: ${total}\n17 remainder 5: ${remainder}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
