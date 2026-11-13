// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function createBankAccount(startingBalance) {
    let balance = startingBalance; // Private variable.
    return {
      deposit(amount) {
        if (amount <= 0) return "Deposit must be positive.";
        balance += amount; return `Deposited ${amount}.`;
      },
      withdraw(amount) {
        if (amount <= 0 || amount > balance) return "Invalid withdrawal.";
        balance -= amount; return `Withdrew ${amount}.`;
      },
      getBalance() { return balance; }
    };
  }
  const account = createBankAccount(1000);
  output.textContent = `${account.deposit(500)}\n${account.withdraw(200)}\nBalance: ${account.getBalance()}`;
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
