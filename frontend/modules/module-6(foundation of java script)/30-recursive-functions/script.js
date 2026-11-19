// A recursive function solves a problem by reducing it to a smaller version.
function factorial(number) {
  // Base case: stop when the input reaches 0 or 1.
  if (number <= 1) return 1;
  // Recursive case: call factorial with a smaller number.
  return number * factorial(number - 1);
}

function countdown(number) {
  if (number <= 0) return ["Done"];
  return [number, ...countdown(number - 1)];
}

showSection("Recursive functions");
showResult("factorial(5)", factorial(5));
showResult("countdown(4)", countdown(4));
showResult("factorial(0)", factorial(0));
showNote("Without a correct base case, recursion can continue until the call stack overflows. Validate inputs in real applications.");
