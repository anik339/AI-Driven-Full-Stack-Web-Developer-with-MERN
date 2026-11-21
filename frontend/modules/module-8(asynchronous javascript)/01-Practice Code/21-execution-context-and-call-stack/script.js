function firstTask() {
  console.log("3. Enter firstTask");
  secondTask();
  console.log("5. Leave firstTask");
}
function secondTask() {
  console.log("4. Enter and leave secondTask");
}

showSection("Execution context and call stack");
console.log("1. Global execution context starts");
console.log("2. Before calling firstTask");
firstTask();
console.log("6. Back in the global execution context");
showResult("Expected order", [1, 2, 3, 4, 5, 6]);
showNote("A simplified model: the global execution context is created first. Each function call creates a function execution context and is placed on the call stack. When it returns, that context is removed.");
