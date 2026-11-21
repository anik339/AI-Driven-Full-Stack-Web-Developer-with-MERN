const list = document.querySelector("#log");
function add(message) {
  const item = document.createElement("li");
  item.textContent = message;
  list.append(item);
}
document.querySelector("#run").addEventListener("click", () => {
  list.replaceChildren();
  add("1. Synchronous code starts");
  setTimeout(() => add("5. setTimeout task"), 0);
  Promise.resolve().then(() => add("3. Promise microtask"));
  queueMicrotask(() => add("4. queueMicrotask callback"));
  add("2. Synchronous code ends");
});
// Expected: synchronous code first, then microtasks, then timer task.
