// Run the reference example only when the learner clicks the button.
function runExample() {
  const output = document.querySelector("#output");
  const lines = [];
  const originalLog = console.log;
  // Capture console output so it is visible on the learning page.
  console.log = (...values) => lines.push(values.map(value => {
    if (typeof value === "string") return value;
    try { return JSON.stringify(value, null, 2); }
    catch { return String(value); }
  }).join(" "));
  try {
    runSolution();
    output.textContent = lines.join("\n") || "Example completed. Inspect the code for details.";
  } catch (error) {
    output.textContent = `${error.name}: ${error.message}`;
  } finally {
    // Restore the original console so the page remains well-behaved.
    console.log = originalLog;
  }
}

function runSolution() {
  // The prototype provides behavior shared by related objects.
  const vehicle = {
    start() {
      return `${this.brand} engine started.`;
    }
  };

  // car inherits from vehicle but owns its brand and model properties.
  const car = Object.create(vehicle);
  car.brand = "Toyota";
  car.model = "Corolla";

  console.log(car.start());
  console.log("Own keys:", Object.keys(car).join(", "));
  console.log("Has own start:", Object.hasOwn(car, "start"));
  console.log("Prototype is vehicle:", Object.getPrototypeOf(car) === vehicle);
}
