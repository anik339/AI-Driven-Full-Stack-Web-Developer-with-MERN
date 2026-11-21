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
  // This function can be reused by any object with name and role properties.
  function introduce(city, greeting) {
    return `${greeting}, I am ${this.name}, a ${this.role} in ${city}.`;
  }

  const firstProfile = { name: "Anik", role: "Developer" };
  const secondProfile = { name: "Maya", role: "Designer" };

  // call passes arguments one by one.
  console.log(introduce.call(firstProfile, "Dhaka", "Hello"));
  // apply passes arguments as an array.
  console.log(introduce.apply(secondProfile, ["Chattogram", "Hi"]));
  // bind returns a new function with a permanently selected context.
  const introduceAnik = introduce.bind(firstProfile, "Dhaka");
  console.log(introduceAnik("Welcome"));
}
