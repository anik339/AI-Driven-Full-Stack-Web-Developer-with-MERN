document.querySelector("#run").addEventListener("click", () => {
  const prices = [10, 20, 30, 40];
  const withTax = prices.map(price => price * 1.1);
  const learners = [{name:"Ava",score:82},{name:"Leo",score:91}];
  const labels = learners.map(({name, score}) => `${name}: ${score}%`);
  document.querySelector("#out").textContent =
    `Original: ${prices.join(", ")}. With tax: ${withTax.map(n => n.toFixed(2)).join(", ")}. Learners: ${labels.join(" | ")}.`;
});
// map() transforms. Use forEach() when you only need to perform an action.
