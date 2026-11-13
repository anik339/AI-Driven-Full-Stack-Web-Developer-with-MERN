// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const products = [{name:"Mouse",price:20},{name:"Keyboard",price:45},{name:"Monitor",price:180}];
  const keyboard = products.find(product => product.name === "Keyboard");
  const hasExpensive = products.some(product => product.price > 100);
  const allAvailable = products.every(product => product.price > 0);
  output.textContent = `Found: ${keyboard.name}\nExpensive item exists: ${hasExpensive}\nAll prices valid: ${allAvailable}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
