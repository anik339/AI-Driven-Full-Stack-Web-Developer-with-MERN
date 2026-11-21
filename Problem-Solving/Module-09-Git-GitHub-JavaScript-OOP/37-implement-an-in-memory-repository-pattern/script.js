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
  class ProductRepository {
    #products = [];
    create(product) {
      // Store a copy so callers cannot mutate repository data by reference.
      const saved = { ...product };
      this.#products.push(saved);
      return { ...saved };
    }
    findById(id) {
      const found = this.#products.find(product => product.id === id);
      return found ? { ...found } : null;
    }
    update(id, changes) {
      const index = this.#products.findIndex(product => product.id === id);
      if (index === -1) return null;
      this.#products[index] = { ...this.#products[index], ...changes };
      return { ...this.#products[index] };
    }
    delete(id) {
      const before = this.#products.length;
      this.#products = this.#products.filter(product => product.id !== id);
      return this.#products.length < before;
    }
  }

  const repository = new ProductRepository();
  repository.create({ id: 1, name: "Keyboard", price: 50 });
  console.log(repository.update(1, { price: 45 }));
  console.log(repository.findById(1));
  console.log("Deleted:", repository.delete(1));
}
