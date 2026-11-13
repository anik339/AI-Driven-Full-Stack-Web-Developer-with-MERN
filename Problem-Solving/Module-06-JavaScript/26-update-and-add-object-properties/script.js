// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const product = { name: "Keyboard", price: 35 };
  product.price = 32; // Update existing property.
  product.inStock = true; // Add a new property.
  output.textContent = JSON.stringify(product, null, 2);
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
