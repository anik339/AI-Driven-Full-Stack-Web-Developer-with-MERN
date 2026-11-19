// Classic IIFE: define and call the function in the same expression.
const classicResult = (function() {
  const privateMessage = "Private IIFE scope";
  return privateMessage;
})();

// Arrow IIFE:
const arrowResult = (() => {
  const privateNumber = 42;
  return privateNumber;
})();

document.querySelector("#run").addEventListener("click", () => {
  document.querySelector("#out").textContent =
    `Classic IIFE: ${classicResult}. Arrow IIFE: ${arrowResult}.`;
});
// IIFEs were common before block scope and ES modules became standard.
