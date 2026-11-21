// Function declarations can be called before their source line.
function declaredLater() {
  return "Function declarations are available in their scope.";
}
function demo() {
  // var is hoisted and initialized as undefined.
  console.log("Before assignment:", varValue);
  var varValue = "Now assigned";
  // let/const stay in the Temporal Dead Zone until initialized.
  let blockValue = "Initialized after its declaration";
  return { varValue, blockValue };
}
document.querySelector("#run").addEventListener("click", () => {
  const result = demo();
  document.querySelector("#out").textContent =
    `${declaredLater()} var: ${result.varValue}; let: ${result.blockValue}.`;
});

// A const-held arrow function cannot be called before its initialization line.
