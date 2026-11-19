document.querySelector("#run").addEventListener("click", () => {
  const zero = 0, empty = "", active = false, missing = null;
  document.querySelector("#out").textContent =
    `0 ?? 100 = ${zero ?? 100}; 0 || 100 = ${zero || 100}; ` +
    `empty ?? fallback = "${empty ?? "fallback"}"; empty || fallback = "${empty || "fallback"}"; ` +
    `false ?? true = ${active ?? true}; null ?? fallback = ${missing ?? "fallback"}.`;
});
// ?? preserves valid falsy values such as 0, false and an empty string.
