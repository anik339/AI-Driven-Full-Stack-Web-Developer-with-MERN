export function calculateTotal(subtotal, taxRate) {
  if (!Number.isFinite(subtotal) || subtotal < 0 || !Number.isFinite(taxRate) || taxRate < 0) {
    throw new TypeError("Provide valid non-negative numbers.");
  }
  return subtotal + subtotal * taxRate;
}

export function formatMoney(amount) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(amount);
}
