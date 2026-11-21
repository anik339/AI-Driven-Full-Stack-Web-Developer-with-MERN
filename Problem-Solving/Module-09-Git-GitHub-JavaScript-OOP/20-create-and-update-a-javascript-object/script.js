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
  // An object groups related information under named properties.
  const profile = {
    name: "Anik",
    role: "Frontend Learner",
    location: "Dhaka",
    skills: ["HTML", "CSS", "JavaScript"]
  };

  // Update one property without rebuilding the entire object.
  profile.role = "Junior JavaScript Developer";
  // Arrays stored in objects can be updated with their own methods.
  profile.skills.push("Git");

  // Bracket notation is useful when the property name is dynamic.
  const selectedProperty = "location";
  console.log(profile.name);
  console.log(profile[selectedProperty]);
  console.log(profile.skills.join(", "));
}
