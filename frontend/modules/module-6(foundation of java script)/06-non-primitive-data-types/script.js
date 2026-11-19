// TOPIC 06: NON-PRIMITIVE DATA TYPES

// An object stores related information as key-value pairs.
const student = {
    name: "Anik Dey",
    age: 22,
    address: { city: "Chattogram", country: "Bangladesh" }
};
console.log(student.name, student.address.city);

// I can add, update, and delete object properties.
student.course = "JavaScript";
student.age = 23;
delete student.course;

// An array stores an ordered collection of values.
const skills = ["HTML", "CSS", "JavaScript"];
console.log(skills[0], skills.length);

// Functions are callable values and can be stored in variables.
const greet = function(name) { return `Hello, ${name}!`; };
console.log(greet("Anik"));

// Date, RegExp, Map, and Set are built-in object types.
const today = new Date();
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const roles = new Map([["Anik", "Developer"]]);
const uniqueNumbers = new Set([1, 2, 2, 3]);
console.log(today, emailPattern.test("anik@example.com"), roles.get("Anik"), [...uniqueNumbers]);

// Object and array assignments copy references.
const firstProfile = { name: "Anik" };
const secondProfile = firstProfile;
secondProfile.name = "Rahim";
console.log("First profile after update:", firstProfile);

// Spread makes a shallow copy. Nested objects are still shared.
const original = { name: "Anik", address: { city: "Dhaka" } };
const shallowCopy = { ...original };
shallowCopy.address.city = "Chattogram";
console.log("Original after shallow copy:", original);

// structuredClone makes a deep copy for supported data.
const deepOriginal = { address: { city: "Dhaka" } };
const deepCopy = structuredClone(deepOriginal);
deepCopy.address.city = "Sylhet";

showSection("Non-primitive data types");
showResult("Student", student);
showResult("Skills", skills);
showResult("Function result", greet("Anik"));
showResult("Map role", roles.get("Anik"));
showResult("Set values", [...uniqueNumbers]);
showResult("Original after shallow copy", original);
showResult("Deep original", deepOriginal);
showResult("Deep copy", deepCopy);
showNote("Arrays and functions are objects in JavaScript. Object assignments copy references; structuredClone can create an independent deep copy for supported values.");
