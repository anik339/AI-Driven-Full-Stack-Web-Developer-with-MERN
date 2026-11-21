const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");
const log = document.querySelector("#log");
let stopPropagationEnabled = false;
function write(message) { const item = document.createElement("li"); item.textContent = message; log.append(item); }

outer.addEventListener("click", () => write("Outer — capture"), true);
middle.addEventListener("click", () => write("Middle — capture"), true);
inner.addEventListener("click", (event) => {
  write("Button — target phase");
  if (stopPropagationEnabled) event.stopPropagation();
});
middle.addEventListener("click", () => write("Middle — bubble"));
outer.addEventListener("click", () => write("Outer — bubble"));

document.querySelector("#clear").addEventListener("click", () => log.replaceChildren());
document.querySelector("#stop").addEventListener("click", () => {
  stopPropagationEnabled = !stopPropagationEnabled;
  document.querySelector("#stop").textContent = stopPropagationEnabled ? "stopPropagation: ON" : "Toggle stopPropagation demo";
  write(`stopPropagation demo is ${stopPropagationEnabled ? "ON" : "OFF"}. Click the nested button.`);
});
