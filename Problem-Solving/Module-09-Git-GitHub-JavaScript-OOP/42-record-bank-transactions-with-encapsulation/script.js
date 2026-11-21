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
    #balance = 0;
    #transactions = [];
    constructor(owner, openingBalance = 0) {
      if (openingBalance < 0) throw new Error("Opening balance cannot be negative");
      this.owner = owner;
      this.#balance = openingBalance;
    }
    #record(type, amount) {
      // Store a timestamped record whenever the balance changes.
      this.#transactions.push({ type, amount, balanceAfter: this.#balance, at: new Date().toISOString() });
    }
    deposit(amount) {
      if (amount <= 0) throw new Error("Amount must be positive");
      this.#balance += amount;
      this.#record("deposit", amount);
    }
    withdraw(amount) {
      if (amount <= 0 || amount > this.#balance) throw new Error("Invalid withdrawal");
      this.#balance -= amount;
      this.#record("withdrawal", amount);
    }
    get balance() { return this.#balance; }
    getTransactions() { return this.#transactions.map(item => ({ ...item })); }
  }

  const account = new BankAccount("Anik", 100);
  account.deposit(40);
  account.withdraw(25);
  console.log("Balance:", account.balance);
  console.log("Transactions:", account.getTransactions().length);
}
