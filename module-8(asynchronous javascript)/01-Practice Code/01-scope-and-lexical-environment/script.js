// Scope tells us where a variable can be accessed.
const course = "JavaScript"; // Global scope

function outer() {
  const parentMessage = "Visible to the inner function";
  function inner() {
    // Lexical scope: inner() can access variables from outer().
    return parentMessage;
  }
  return inner();
}

function scopeDemo() {
  var functionScoped = "var belongs to this function";
  if (true) {
    let blockScoped = "let belongs only to this block";
    return { functionScoped, blockScoped, lexical: outer() };
  }
}

document.querySelector("#run").addEventListener("click", () => {
  const result = scopeDemo();
  document.querySelector("#out").textContent =
    `Global: ${course}. Function: ${result.functionScoped}. Block: ${result.blockScoped}. Lexical lookup: ${result.lexical}.`;
});

// let/const are in the Temporal Dead Zone before their declaration line.
// Reading them too early throws ReferenceError, so do not run that mistake here.
