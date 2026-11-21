const output = document.querySelector("#output");
    const lines = [];
    const show = (label, value) => lines.push(`${label}: ${value}`);

    class Course {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }

  describe() {
    return `${this.name} (${this.level})`;
  }
}

const course = new Course("Object-Oriented JavaScript", "Intermediate");

    show("Course", course.describe());
show("Instance check", course instanceof Course);
output.textContent = lines.join("\n");
console.log(lines.join("\n"));
