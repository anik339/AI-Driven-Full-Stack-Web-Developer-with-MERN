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
  class BankAccount {
    // The # prefix makes balance private to the class body.
    #balance = 0;

    constructor(owner, openingBalance = 0) {
      this.owner = owner;
      if (openingBalance < 0) throw new Error("Opening balance cannot be negative.");
      this.#balance = openingBalance;
    }

    deposit(amount) {
      if (!Number.isFinite(amount) || amount <= 0) throw new Error("Deposit must be positive.");
      this.#balance += amount;
      return this.#balance;
    }

    getBalance() {
      // Public method exposes a safe read-only view.
      return this.#balance;
    }
  }

  const account = new BankAccount("Anik", 100);
  account.deposit(50);
  console.log("Balance:", account.getBalance());
  console.log("Private field accessible:", "#balance" in account);
}
