document.querySelector("#run").addEventListener("click", () => {
  const frontend = ["HTML", "CSS"];
  const backend = ["Node.js", "MongoDB"];
  const skills = [...frontend, ...backend]; // Spread copies values into a new array.
  const original = { name: "Taylor", role: "Student" };
  const updated = { ...original, role: "Junior Developer" }; // Copy and override.
  function sum(...numbers) { // Rest collects arguments into an array.
    return numbers.reduce((total, number) => total + number, 0);
  }
  const [main, ...others] = skills; // Rest collects remaining array values.
  document.querySelector("#out").textContent =
    `Skills: ${skills.join(", ")}. Role: ${updated.role}. Sum: ${sum(5, 10, 15)}. Main: ${main}; others: ${others.join(", ")}.`;
});
