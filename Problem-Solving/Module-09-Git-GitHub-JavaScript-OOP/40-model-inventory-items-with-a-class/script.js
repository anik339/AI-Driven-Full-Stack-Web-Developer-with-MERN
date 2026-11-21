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
  class InventoryItem {
    #stock;
    constructor(name, openingStock = 0) {
      if (!Number.isInteger(openingStock) || openingStock < 0) throw new Error("Invalid opening stock");
      this.name = name;
      this.#stock = openingStock;
    }
    get stock() { return this.#stock; }
    restock(quantity) {
      if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("Restock quantity must be positive");
      this.#stock += quantity;
      return this.#stock;
    }
    sell(quantity) {
      if (!Number.isInteger(quantity) || quantity <= 0) throw new Error("Sale quantity must be positive");
      if (quantity > this.#stock) throw new Error("Insufficient stock");
      this.#stock -= quantity;
      return this.#stock;
    }
  }

  const keyboard = new InventoryItem("Keyboard", 10);
  keyboard.sell(3);
  keyboard.restock(5);
  console.log(`${keyboard.name}: ${keyboard.stock} units`);
}
