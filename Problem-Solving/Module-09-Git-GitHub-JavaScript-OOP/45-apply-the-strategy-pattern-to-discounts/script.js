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
  const percentageDiscount = {
    apply(total) { return total * 0.9; } // 10% off
  };
  const fixedDiscount = {
    apply(total) { return Math.max(0, total - 15); } // $15 off, never below zero
  };

  class Checkout {
    constructor(discountStrategy) { this.discountStrategy = discountStrategy; }
    totalAfterDiscount(subtotal) {
      // Checkout delegates the pricing rule to the injected strategy.
      return this.discountStrategy.apply(subtotal);
    }
  }

  console.log("Percentage:", new Checkout(percentageDiscount).totalAfterDiscount(100));
  console.log("Fixed:", new Checkout(fixedDiscount).totalAfterDiscount(100));
}
