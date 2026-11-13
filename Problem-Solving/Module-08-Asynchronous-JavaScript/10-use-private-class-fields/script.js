// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  class BankAccount {
    #balance;
    constructor(startingBalance) { this.#balance = startingBalance; }
    deposit(amount) { if (amount > 0) this.#balance += amount; }
    getBalance() { return this.#balance; }
  }
  const account = new BankAccount(500);
  account.deposit(250);
  output.textContent = `Balance: ${account.getBalance()}`;
  area.textContent = "The #balance field cannot be read directly outside the class.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
