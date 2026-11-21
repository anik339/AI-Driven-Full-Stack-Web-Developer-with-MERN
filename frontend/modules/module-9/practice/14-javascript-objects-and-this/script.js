const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    const developer = {
  name: "Anik",
  role: "Junior Developer",
  skills: ["HTML", "CSS", "JavaScript"],
  introduce() {
    return `${this.name} is a ${this.role}.`;
  },
  skillSummary() {
    return this.skills.join(", ");
  }
};

const message = developer.introduce();
const skills = developer.skillSummary();

    show("Profile", developer.introduce());
show("Skills", developer.skillSummary());
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
