// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const expenses = [
    { category: "Food", amount: 20 },
    { category: "Travel", amount: 30 },
    { category: "Food", amount: 15 },
    { category: "Books", amount: 25 }
  ];
  const totals = expenses.reduce((result, item) => {
    result[item.category] = (result[item.category] ?? 0) + item.amount;
    return result; // Always return the accumulator.
  }, {});
  output.textContent = JSON.stringify(totals, null, 2);
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
