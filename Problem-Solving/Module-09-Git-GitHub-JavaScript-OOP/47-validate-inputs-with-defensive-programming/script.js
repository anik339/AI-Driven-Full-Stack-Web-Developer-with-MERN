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
  function createProduct(input) {
    // Guard clauses keep invalid data from entering the application.
    const name = String(input.name ?? "").trim();
    const price = Number(input.price);
    const stock = Number(input.stock);

    if (name.length < 2) throw new TypeError("Product name is too short.");
    if (!Number.isFinite(price) || price < 0) throw new TypeError("Price must be a non-negative number.");
    if (!Number.isInteger(stock) || stock < 0) throw new TypeError("Stock must be a non-negative integer.");

    return { name, price, stock };
  }

  console.log(createProduct({ name: "Keyboard", price: "49.99", stock: "12" }));
  try {
    createProduct({ name: "X", price: -1, stock: 2 });
  } catch (error) {
    console.log("Validation:", error.message);
  }
}
