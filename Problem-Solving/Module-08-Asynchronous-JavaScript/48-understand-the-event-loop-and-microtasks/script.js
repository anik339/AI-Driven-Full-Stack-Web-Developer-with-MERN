// ============================================================
// BEGINNER-FRIENDLY JAVASCRIPT SOLUTION
// Read the comments from top to bottom. Try the challenge after
// running the example in your browser.
// ============================================================
const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  const messages = [];
  const show = message => {
    messages.push(message);
    output.textContent = messages.join("\n");
  };
  show("1. Synchronous code starts");
  setTimeout(() => show("5. setTimeout callback"), 0);
  Promise.resolve().then(() => show("3. Promise microtask"));
  queueMicrotask(() => show("4. queueMicrotask callback"));
  show("2. Synchronous code ends");
}

// The example starts only when you click the Run Solution button.
document.querySelector("#run-example").addEventListener("click", runExample);
