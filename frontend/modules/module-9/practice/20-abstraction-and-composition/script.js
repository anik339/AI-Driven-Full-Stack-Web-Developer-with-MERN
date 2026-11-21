const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class TaxCalculator {
  calculate(subtotal) {
    return subtotal * 0.05;
  }
}

class OrderSummary {
  constructor(taxCalculator) {
    this.taxCalculator = taxCalculator;
  }

  calculate(subtotal) {
    const tax = this.taxCalculator.calculate(subtotal);
    return { subtotal, tax, total: subtotal + tax };
  }
}

const summary = new OrderSummary(new TaxCalculator());

    show("Order summary", `subtotal: ${summary.subtotal} | tax: ${summary.tax} | total: ${summary.total}`);
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
