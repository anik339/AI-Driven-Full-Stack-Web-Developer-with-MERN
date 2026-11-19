// TOPIC 13: DO WHILE LOOP

// do...while runs the body before checking the condition.
let count = 1;
do {
    console.log("Count:", count);
    count++;
} while (count <= 5);

// The body runs at least once, even when the condition is false.
let number = 10;
do {
    console.log("This runs once. Number:", number);
} while (number < 5);

// I am calculating the total of numbers from 1 to 5.
let currentNumber = 1;
let total = 0;
do {
    total += currentNumber;
    currentNumber++;
} while (currentNumber <= 5);

showSection("Do while loop practice");
showResult("Total from 1 to 5", total);
showResult("First-run example", "The block ran once even though 10 < 5 is false.");
showNote("while checks first. do...while runs the body first and checks the condition afterward.");
