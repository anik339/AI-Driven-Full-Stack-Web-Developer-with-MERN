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
  const original = {
    name: "Project Alpha",
    settings: { theme: "dark", notifications: true }
  };

  // Spread creates a shallow copy: nested objects are still shared.
  const shallowCopy = { ...original };
  shallowCopy.settings.theme = "light";
  console.log("Original after shallow update:", original.settings.theme);

  // structuredClone creates an independent deep copy for cloneable data.
  const deepCopy = structuredClone(original);
  deepCopy.settings.theme = "contrast";
  console.log("Original after deep update:", original.settings.theme);
  console.log("Deep copy:", deepCopy.settings.theme);
}
