// Import the default function from the supporting module file.
import makeGreeting from "./greeting.js";

const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  output.textContent = makeGreeting("Anik");
  area.textContent = "The default export can be imported with any local name.";
}
document.querySelector("#run-example").addEventListener("click", runExample);
