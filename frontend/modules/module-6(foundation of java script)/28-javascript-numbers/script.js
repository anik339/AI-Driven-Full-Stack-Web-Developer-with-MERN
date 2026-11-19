// TOPIC 28: JAVASCRIPT NUMBERS

// JavaScript uses Number for regular integers and decimals.
const wholeNumber = 100;
const decimalNumber = 99.75;
console.log("Whole number:", wholeNumber);
console.log("Decimal number:", decimalNumber);
console.log("Number type:", typeof wholeNumber);

// Number() converts a value when possible.
console.log("Convert numeric text:", Number("250"));
console.log("Convert empty text:", Number(""));
console.log("Convert invalid text:", Number("hello"));

// parseInt() reads an integer from the beginning of a string.
console.log("parseInt:", parseInt("42px", 10));

// parseFloat() reads a decimal number from the beginning of a string.
console.log("parseFloat:", parseFloat("19.95 taka"));

// Number.isNaN() and Number.isFinite() check numeric values.
console.log("Is NaN:", Number.isNaN(Number("hello")));
console.log("Is finite:", Number.isFinite(100));
console.log("Is Infinity finite:", Number.isFinite(Infinity));

// toFixed() formats decimal places and returns a string.
const price = 125.567;
console.log("Price to 2 decimals:", price.toFixed(2));
console.log("Type after toFixed:", typeof price.toFixed(2));

// Number.isInteger() checks for an integer.
console.log("Is 10 an integer:", Number.isInteger(10));
console.log("Is 10.5 an integer:", Number.isInteger(10.5));

// JavaScript has safe integer limits.
console.log("Maximum safe integer:", Number.MAX_SAFE_INTEGER);
console.log("Minimum safe integer:", Number.MIN_SAFE_INTEGER);

// Floating-point calculations can have small precision differences.
const roundedResult = Number((0.1 + 0.2).toFixed(2));
console.log("0.1 + 0.2 rounded:", roundedResult);

showSection("Number practice");
showResult("Number conversion", Number("250"));
showResult("parseInt result", parseInt("42px", 10));
showResult("parseFloat result", parseFloat("19.95 taka"));
showResult("Price with two decimals", price.toFixed(2));
showResult("Is integer", Number.isInteger(10));
showResult("Maximum safe integer", Number.MAX_SAFE_INTEGER);
showResult("0.1 + 0.2 rounded", roundedResult);
showNote("Number('42px') returns NaN, while parseInt('42px', 10) returns 42. toFixed() returns a string.");
