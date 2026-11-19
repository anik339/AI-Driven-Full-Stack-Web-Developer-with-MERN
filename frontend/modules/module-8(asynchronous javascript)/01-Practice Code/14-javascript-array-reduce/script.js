document.querySelector("#run").addEventListener("click", () => {
  const sales = [120, 80, 250, 50];
  // accumulator stores the result built so far.
  const total = sales.reduce((accumulator, current) => accumulator + current, 0);
  const expenses = [{category:"Food",amount:20},{category:"Travel",amount:30},{category:"Food",amount:15}];
  const grouped = expenses.reduce((result, item) => {
    result[item.category] = (result[item.category] ?? 0) + item.amount;
    return result;
  }, {});
  document.querySelector("#out").textContent =
    `Sales total: ${total}. Grouped expenses: ${JSON.stringify(grouped)}.`;
});
// Choose an initial value: 0 for sums, {} for grouped objects, [] for arrays.
