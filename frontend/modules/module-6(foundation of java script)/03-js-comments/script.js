// TOPIC 03: JAVASCRIPT COMMENTS

// A single-line comment starts with two forward slashes.
// JavaScript ignores comments when it runs the program.
const myName = "Anik Dey"; // I am storing my name.
const myAge = 22; // I am storing my age.

/*
    This is a multi-line comment.
    I can use it to explain a longer section of code.
    The JavaScript engine does not execute this text.
*/

console.log("Name:", myName);
console.log("Age:", myAge);

// I am calculating how many years remain until age 30.
const yearsUntilThirty = 30 - myAge;
console.log("Years until age 30:", yearsUntilThirty);

showSection("Comment practice");
showResult("Name", myName);
showResult("Age", myAge);
showResult("Years until age 30", yearsUntilThirty);
showNote("Good comments explain why code is written. Avoid comments that only repeat an obvious line.");
