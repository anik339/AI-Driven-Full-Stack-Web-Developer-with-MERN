// A class is a reusable blueprint for objects.
class Person {
  constructor(name) { this.name = name; }
  introduce() { return `Hello, I am ${this.name}.`; }
}
class Developer extends Person {
  constructor(name, language) {
    super(name); // Run the parent constructor.
    this.language = language;
  }
  introduce() { // Method overriding
    return `${this.name} writes ${this.language}.`;
  }
}
document.querySelector("#run").addEventListener("click", () => {
  const person = new Person("Ava");
  const developer = new Developer("Noah", "JavaScript");
  document.querySelector("#out").textContent =
    `${person.introduce()} ${developer.introduce()} Inherits Person: ${developer instanceof Person}.`;
});

// Static methods belong to the class. Private fields use #fieldName.
