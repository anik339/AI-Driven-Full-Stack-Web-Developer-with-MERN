// JavaScript Function Assignment - 8 Questions
// Each function is followed by a console.log() example as instructed.

// 1. Return the largest number in an array.
function findMax(numbers) {
  if (numbers.length === 0) {
    return undefined;
  }
  return Math.max(...numbers);
}
console.log("1. Largest number:", findMax([10, 25, 7, 99, 42]));

// 2. Count the number of words in a string.
function countWords(str) {
  const trimmed = str.trim();
  if (trimmed === "") {
    return 0;
  }
  return trimmed.split(/\s+/).length;
}
console.log("2. Word count:", countWords("JavaScript is fun to learn"));

// 3. Subtract the second argument from the first.
function calculateDifference(first, second) {
  return first - second;
}
console.log("3. Difference:", calculateDifference(20, 8));

// 4. Return a new array containing only even numbers.
function filterEvenNumbers(numbers) {
  return numbers.filter((number) => number % 2 === 0);
}
console.log("4. Even numbers:", filterEvenNumbers([1, 2, 3, 4, 5, 6, 8]));

// 5. Return a new array sorted from largest to smallest.
function sortArrayDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}
console.log("5. Descending order:", sortArrayDescending([5, 1, 9, 3, 12]));

// 6. Return true for leap years and false for other years.
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
console.log("6. Is leap year:", isLeapYear(2024));

// 7. Reverse a string.
function reverseString(str) {
  return Array.from(str).reverse().join("");
}
console.log("7. Reversed string:", reverseString("JavaScript"));

// 8. Return the sum of all numbers in an array.
function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log("8. Array sum:", sumArray([10, 20, 30, 40]));
