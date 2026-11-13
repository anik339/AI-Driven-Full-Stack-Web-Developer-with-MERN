const values = [
  ["false", false], ["0", 0], ["empty string", ""], ["null", null],
  ["undefined", undefined], ["NaN", NaN], ["empty array", []],
  ["empty object", {}], ["hello", "hello"]
];
document.querySelector("#run").addEventListener("click", () => {
  document.querySelector("#out").textContent =
    values.map(([label, value]) => `${label}: ${Boolean(value) ? "TRUTHY" : "FALSY"}`).join(" | ");
});
// Falsy values: false, 0, -0, 0n, "", null, undefined and NaN.
// Empty arrays and empty objects are truthy.
