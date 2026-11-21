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
  class Product {
    constructor(id, name, price) {
      if (price < 0) throw new Error("Price cannot be negative");
      Object.assign(this, { id, name, price });
    }
  }

  class ShoppingCart {
    #items = new Map();
    add(product, quantity = 1) {
      if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("Quantity must be positive");
      const current = this.#items.get(product.id);
      this.#items.set(product.id, { product, quantity: (current?.quantity ?? 0) + quantity });
    }
    remove(productId) { return this.#items.delete(productId); }
    getTotal() {
      return [...this.#items.values()].reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    }
    getItemCount() {
      return [...this.#items.values()].reduce((sum, item) => sum + item.quantity, 0);
    }
  }

  const cart = new ShoppingCart();
  const mouse = new Product(1, "Mouse", 20);
  const keyboard = new Product(2, "Keyboard", 50);
  cart.add(mouse, 2);
  cart.add(keyboard, 1);
  console.log("Items:", cart.getItemCount());
  console.log("Total:", cart.getTotal());
}
