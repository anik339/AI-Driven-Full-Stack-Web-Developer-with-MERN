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
  // Custom errors make expected business failures easy to identify.
  class InsufficientFundsError extends Error {
    constructor(requested, available) {
      super(`Requested ${requested}, but only ${available} is available.`);
      this.name = "InsufficientFundsError";
    }
  }

  class BankAccount {
    constructor(balance) { this.balance = balance; }
    withdraw(amount) {
      if (amount > this.balance) {
        throw new InsufficientFundsError(amount, this.balance);
      }
      this.balance -= amount;
      return this.balance;
    }
  }

  try {
    new BankAccount(50).withdraw(80);
  } catch (error) {
    // Check the error type before choosing a recovery action.
    if (error instanceof InsufficientFundsError) {
      console.log(`${error.name}: ${error.message}`);
    } else {
      throw error; // Do not hide unexpected programming errors.
    }
  }
}
