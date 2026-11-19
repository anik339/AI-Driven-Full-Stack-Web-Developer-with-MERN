// TOPIC 08: IF ELSE STATEMENT

// if runs its block when the condition is true.
const age = 22;
if (age >= 18) {
    console.log("You are an adult.");
}

// if...else chooses between two possible paths.
const marks = 75;
if (marks >= 40) {
    console.log("Result: Passed");
} else {
    console.log("Result: Failed");
}

// else if checks another condition when earlier conditions are false.
const score = 82;
let grade;
if (score >= 80) {
    grade = "A";
} else if (score >= 70) {
    grade = "B";
} else if (score >= 60) {
    grade = "C";
} else if (score >= 40) {
    grade = "D";
} else {
    grade = "F";
}
console.log("Grade:", grade);

// Nested if means an if statement inside another if statement.
const isLoggedIn = true;
const userRole = "admin";
if (isLoggedIn) {
    if (userRole === "admin") {
        console.log("Welcome, Admin!");
    } else {
        console.log("Welcome, User!");
    }
} else {
    console.log("Please log in first.");
}

// An empty string is falsy, so the else block runs.
const userName = "";
if (userName) {
    console.log("Welcome", userName);
} else {
    console.log("A username was not provided.");
}

// Practical example: check whether an order can be placed.
const productStock = 5;
const requestedQuantity = 2;
const paymentComplete = true;
let orderMessage;
if (productStock <= 0) {
    orderMessage = "Product is out of stock.";
} else if (requestedQuantity > productStock) {
    orderMessage = "Not enough stock for this order.";
} else if (!paymentComplete) {
    orderMessage = "Please complete the payment.";
} else {
    orderMessage = "Order placed successfully!";
}

showSection("If...else practice");
showResult("Age check", age >= 18 ? "Adult" : "Minor");
showResult("Exam result", marks >= 40 ? "Passed" : "Failed");
showResult("Grade", grade);
showResult("Order status", orderMessage);
showNote("Conditions are checked from top to bottom. The first matching if or else if block runs, and the remaining branches are skipped.");
