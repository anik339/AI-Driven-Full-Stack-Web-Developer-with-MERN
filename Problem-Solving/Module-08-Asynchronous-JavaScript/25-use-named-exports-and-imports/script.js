// Named imports must appear at the top of an ES module.
import { add, subtract } from "./math.js";

const output = document.querySelector("#output");
const area = document.querySelector("#demo-area");

function runExample() {
  // Call the imported functions just like local functions.
  output.textContent = `add(12, 5) = ${add(12, 5)}\nsubtract(12, 5) = ${subtract(12, 5)}`;
  area.textContent = "These functions are imported from math.js.";
}
document.querySelector("#run-example").addEventListener("click", runExample);
