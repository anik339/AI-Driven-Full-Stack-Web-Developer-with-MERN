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
  // A tiny assertion helper keeps this browser example dependency-free.
  function assertEqual(actual, expected, label) {
    if (actual !== expected) throw new Error(`${label}: expected ${expected}, received ${actual}`);
    console.log(`PASS: ${label}`);
  }

  class Cart {
    #items = [];
    add(price, quantity) {
      if (price < 0 || quantity <= 0) throw new Error("Invalid cart item");
      this.#items.push({ price, quantity });
    }
    total() { return this.#items.reduce((sum, item) => sum + item.price * item.quantity, 0); }
    get count() { return this.#items.reduce((sum, item) => sum + item.quantity, 0); }
  }

  // Arrange: create a clean cart for this test.
  const cart = new Cart();
  // Act: add one item.
  cart.add(10, 2);
  // Assert: verify the public behavior.
  assertEqual(cart.total(), 20, "cart total");
  assertEqual(cart.count, 2, "cart item count");
}
