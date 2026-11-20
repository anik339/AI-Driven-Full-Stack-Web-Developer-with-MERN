import { calculateTotal, formatMoney } from "./utils.js";

document.querySelector("#calculate").addEventListener("click", () => {
  const total = calculateTotal(120, 0.08);
  document.querySelector("#result").textContent = formatMoney(total);
});