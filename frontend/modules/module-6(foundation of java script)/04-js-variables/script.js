// TOPIC 04: JAVASCRIPT VARIABLES

// A variable is a named place where I can store a value.
let studentName; // Declaration without an initial value.
studentName = "Anik Dey"; // Assignment after declaration.

let age = 22; // let can be reassigned.
age = 23;

const country = "Bangladesh"; // const cannot be reassigned.
// country = "India"; // Uncommenting this line causes an error.

var course = "Full Stack Web Development with MERN"; // Older syntax.

// Variable names are case-sensitive.
let userName = "Anik";
let username = "Rahim";

// I use meaningful camelCase names.
const totalProductPrice = 1500;

// let and const are block-scoped.
if (true) {
    let blockMessage = "I am inside this block.";
    console.log(blockMessage);
}

// A const object can have its properties changed.
const profile = { name: "Anik", role: "Student" };
profile.role = "Junior Developer";

console.log(studentName, age, country, course);
console.log(userName, username, totalProductPrice, profile);

showSection("Variable practice");
showResult("Student name", studentName);
showResult("Updated age", age);
showResult("Country", country);
showResult("Course", course);
showResult("Profile", profile);
showNote("Use const by default. Use let when reassignment is needed. Avoid var in new code unless you are studying older code.");
