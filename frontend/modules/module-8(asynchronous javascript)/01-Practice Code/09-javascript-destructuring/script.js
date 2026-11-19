document.querySelector("#run").addEventListener("click", () => {
  const skills = ["HTML", "CSS", "JavaScript"];
  const [first, second, third] = skills; // Array positions
  const learner = { name: "Sam", level: "Beginner", address: { city: "Dhaka", country: "Bangladesh" } };
  const { name, level: stage } = learner; // Rename level to stage
  const { city, country } = learner.address; // Nested destructuring
  const { score = 0 } = learner; // Default used when score is undefined
  document.querySelector("#out").textContent =
    `Array: ${first}, ${second}, ${third}. ${name} (${stage}). ${city}, ${country}. Default score: ${score}.`;
});
