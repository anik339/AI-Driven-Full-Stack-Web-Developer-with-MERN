// TOPIC 27: JAVASCRIPT MATH OBJECT

// Math provides built-in constants and mathematical methods.
console.log("PI:", Math.PI);
console.log("Euler's number:", Math.E);

// Rounding methods have different behaviours.
const decimalNumber = 7.6;
console.log("round:", Math.round(decimalNumber));
console.log("floor:", Math.floor(decimalNumber));
console.log("ceil:", Math.ceil(decimalNumber));
console.log("trunc:", Math.trunc(decimalNumber));

// abs() returns an absolute value; pow() calculates a power.
console.log("Absolute value:", Math.abs(-25));
console.log("Power:", Math.pow(2, 3));
console.log("Square root:", Math.sqrt(81));

// min() and max() find the smallest and largest values.
console.log("Minimum:", Math.min(10, 5, 20, 3));
console.log("Maximum:", Math.max(10, 5, 20, 3));

// random() returns a value >= 0 and < 1.
const randomDecimal = Math.random();
const randomInteger = Math.floor(Math.random() * 10) + 1;

// This function returns an integer including both range endpoints.
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

showSection("Math object practice");
showResult("Math.PI", Math.PI);
showResult("Rounded 7.6", Math.round(7.6));
showResult("Floor 7.6", Math.floor(7.6));
showResult("Ceil 7.6", Math.ceil(7.6));
showResult("Square root of 81", Math.sqrt(81));
showResult("Minimum", Math.min(10, 5, 20, 3));
showResult("Maximum", Math.max(10, 5, 20, 3));
showResult("Random decimal", randomDecimal);
showResult("Random integer 1-10", randomInteger);
showResult("Random integer 5-15", randomBetween(5, 15));
showNote("Math.random() does not include 1. The randomBetween() example includes both the minimum and maximum values.");
