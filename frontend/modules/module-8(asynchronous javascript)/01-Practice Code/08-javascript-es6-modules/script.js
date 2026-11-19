// Import named exports with their exact exported names.
import { add, multiply } from "./math.js";
// Import the default export without curly braces.
import createGreeting from "./greeting.js";

document.querySelector("#run").addEventListener("click", () => {
  document.querySelector("#out").textContent =
    `Named exports: 8 + 4 = ${add(8, 4)}; 8 × 4 = ${multiply(8, 4)}.`;
});
document.querySelector("#default").addEventListener("click", () => {
  document.querySelector("#out").textContent = createGreeting("JavaScript learner");
});
