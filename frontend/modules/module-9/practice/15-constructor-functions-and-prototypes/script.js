const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    function Course(name, durationWeeks) {
  this.name = name;
  this.durationWeeks = durationWeeks;
}

Course.prototype.describe = function () {
  return `${this.name} is a ${this.durationWeeks}-week course.`;
};

const javascript = new Course("JavaScript", 4);
const git = new Course("Git and GitHub", 2);

    show("Course 1", javascript.describe());
show("Course 2", git.describe());
show("Shared prototype method", javascript.describe === git.describe);
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
