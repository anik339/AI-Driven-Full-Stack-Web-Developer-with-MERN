// Run the reference example only when the learner clicks the button.
function runExample() {
  const output = document.querySelector("#output");
  const lines = [];
  const originalLog = console.log;
  // Capture console output so it is visible on the learning page.
  console.log = (...values) => lines.push(values.map(value => {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value, null, 2); }
    catch { return String(value); }
  }).join(" "));
  try {
    runSolution();
    output.textContent = lines.join("\n") || "Example completed. Inspect the code for details.";
  } catch (error) {
    output.textContent = `${error.name}: ${error.message}`;
  } finally {
    // Restore the original console so the page remains well-behaved.
    console.log = originalLog;
  }
}

function runSolution() {
  // A method is a function stored as an object property.
  const product = {
    name: "Mechanical Keyboard",
    price: 79.99,
    // `this` refers to the object before the dot at the call site.
    getLabel() {
      return `${this.name} — $${this.price.toFixed(2)}`;
    }
  };

  // Calling product.getLabel() sets `this` to product.
  console.log(product.getLabel());
}
