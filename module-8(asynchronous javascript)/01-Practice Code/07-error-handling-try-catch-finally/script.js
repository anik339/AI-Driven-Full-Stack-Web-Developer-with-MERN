function divide(a, b) {
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error("Both values must be valid numbers.");
  }
  if (b === 0) throw new Error("Division by zero is not allowed.");
  return a / b;
}
document.querySelector("#run").addEventListener("click", () => {
  const a = Number(document.querySelector("#first").value);
  const b = Number(document.querySelector("#second").value);
  try {
    document.querySelector("#out").textContent = `Result: ${divide(a, b)}`;
  } catch (error) {
    document.querySelector("#out").textContent = `Handled error: ${error.message}`;
  } finally {
    console.log("Calculation attempt finished.");
  }
});
