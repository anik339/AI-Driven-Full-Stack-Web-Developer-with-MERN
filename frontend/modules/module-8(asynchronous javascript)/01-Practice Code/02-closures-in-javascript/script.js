// The returned methods keep access to count after createCounter() finishes.
function createCounter() {
  let count = 0; // Private state: not directly accessible outside.
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getValue() { return count; }
  };
}
const counter = createCounter();

document.querySelector("#run").addEventListener("click", () => {
  document.querySelector("#out").textContent =
    `Private counter value: ${counter.increment()}`;
});
document.querySelector("#reset").addEventListener("click", () => {
  document.querySelector("#out").textContent =
    `A new closure starts at ${createCounter().getValue()}.`;
});

// Each call to createCounter() creates a separate private count variable.
