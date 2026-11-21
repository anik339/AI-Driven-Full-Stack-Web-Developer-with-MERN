// TOPIC 17: JAVASCRIPT OBJECT

// An object stores related information as key-value pairs.
const student = { name: "Anik Dey", age: 22, course: "JavaScript", isLearning: true };

// Dot notation and bracket notation both access properties.
console.log("Name:", student.name);
console.log("Course:", student["course"]);

// I can add, update, and delete properties.
student.city = "Chattogram";
student.age = 23;
delete student.isLearning;

// A nested object stores another object as a property.
const user = { name: "Anik", address: { city: "Chattogram", country: "Bangladesh" } };
console.log("City:", user.address.city);

// A method is a function stored in an object.
const profile = {
    name: "Anik",
    introduce() { return `My name is ${this.name}.`; }
};

// Object helper methods return keys, values, or key-value pairs.
console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));
console.log("Has name:", Object.hasOwn(student, "name"));
console.log("Phone:", user.contact?.phone);

showSection("Object practice");
showResult("Student object", student);
showResult("Nested city", user.address.city);
showResult("Object method", profile.introduce());
showResult("Object keys", Object.keys(student));
showResult("Object values", Object.values(student));
showNote("Object properties can be added, updated, or deleted. In this method call, this refers to the profile object.");
