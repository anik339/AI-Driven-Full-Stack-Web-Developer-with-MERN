// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  function debounce(callback, delay) {
    let timerId;
    return function (...args) {
      clearTimeout(timerId); // Cancel the previous timer.
      timerId = setTimeout(() => callback(...args), delay);
    };
  }
  const input = document.createElement("input");
  input.className = "demo-input"; input.placeholder = "Type quickly...";
  area.replaceChildren(input);
  const searchLater = debounce(value => {
    output.textContent = `Search now for: ${value}`;
  }, 500);
  input.addEventListener("input", () => {
    output.textContent = "Waiting for you to stop typing...";
    searchLater(input.value);
  });
  output.textContent = "Type in the input and wait half a second after your last key.";
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
