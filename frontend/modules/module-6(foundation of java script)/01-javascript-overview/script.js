// TOPIC 01: JAVASCRIPT OVERVIEW
// HTML creates structure, CSS styles it, and JavaScript adds behaviour.

// I am printing a welcome message in the browser console.
console.log("Hello! Welcome to JavaScript.");

// I am storing my personal information in variables.
const myName = "Anik Dey";
const myGoal = "Become a Junior MERN Stack Developer";
const firstNumber = 10;
const secondNumber = 20;

// I am showing the values and a simple calculation.
console.log("My name:", myName);
console.log("My goal:", myGoal);
console.log("10 + 20 =", firstNumber + secondNumber);

// I am selecting an HTML element and changing its text.
document.getElementById("demo-heading").textContent = "JavaScript is working!";

showSection("JavaScript overview");
showResult("My name", myName);
showResult("My learning goal", myGoal);
showResult("Addition", firstNumber + secondNumber);
showNote("Change the values and run the page again. JavaScript can also respond to clicks, forms, and user actions.");
