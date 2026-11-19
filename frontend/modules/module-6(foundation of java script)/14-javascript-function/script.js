// TOPIC 14: JAVASCRIPT FUNCTION

// A function is a reusable block of code.
function sayHello() {
    console.log("Hello! I am learning JavaScript.");
}

// Calling the function runs its code.
sayHello();
sayHello();

// A function expression stores a function in a variable.
const showWelcome = function() {
    console.log("Welcome to my practice project.");
};
showWelcome();

// An arrow function is a shorter function syntax.
const showMessage = () => {
    console.log("I am practising arrow functions.");
};
showMessage();

// A function can use a variable from its outer scope.
const courseName = "Full Stack Web Development with MERN";
function showCourse() {
    console.log("My course:", courseName);
}
showCourse();

showSection("Function practice");
showResult("Function declaration", "sayHello() was called.");
showResult("Function expression", "showWelcome() was called.");
showResult("Arrow function", "showMessage() was called.");
showResult("Course", courseName);
showNote("A function runs when it is called. Function declarations are hoisted, but function expressions are not usable before initialization.");
