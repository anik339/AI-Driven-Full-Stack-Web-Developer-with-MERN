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
  class Price {
    // Static methods are called on the class itself.
    static format(amount, currency = "USD") {
      return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
    }

    static addTax(amount, rate) {
      if (amount < 0 || rate < 0) throw new RangeError("Amount and rate must be non-negative.");
      return amount * (1 + rate);
    }
  }

  console.log(Price.format(125.5));
  console.log(Price.addTax(100, 0.15));
}
