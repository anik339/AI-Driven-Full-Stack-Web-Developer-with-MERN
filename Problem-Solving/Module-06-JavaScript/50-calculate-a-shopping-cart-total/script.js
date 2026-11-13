// MODULE 6: JavaScript Foundations
// Read each comment before changing the code.
// The Run Solution button calls runExample() and shows the result on the page.
const output = document.querySelector("#output");

function runExample() {
  const cart = [
    { name: "Keyboard", price: 35, quantity: 1 },
    { name: "Mouse", price: 20, quantity: 2 },
    { name: "USB Cable", price: 8, quantity: 3 }
  ];
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const lines = cart.map(item => `${item.name}: ${item.quantity} × ${item.price} = ${item.quantity * item.price}`);
  output.textContent = `${lines.join("\n")}\nGrand total: ${total}`;
}

// Keep the browser page quiet until you click the button.
document.querySelector("#run-example").addEventListener("click", runExample);
