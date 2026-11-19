// TOPIC 11: LOOP BREAK AND CONTINUE

// break stops the nearest loop immediately.
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Stopping the loop at 5.");
        break;
    }
    console.log(i);
}

// continue skips the current iteration and moves to the next one.
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue; // I am skipping even numbers.
    }
    console.log("Odd number:", i);
}

// I am finding the first number divisible by 7.
const numbers = [10, 15, 21, 28, 35];
let firstMatch;
for (const number of numbers) {
    if (number % 7 === 0) {
        firstMatch = number;
        break;
    }
}

// I am skipping invalid negative scores.
const scores = [80, -1, 65, -5, 90];
let validTotal = 0;
for (const score of scores) {
    if (score < 0) continue;
    validTotal += score;
}

showSection("Break and continue");
showResult("First number divisible by 7", firstMatch);
showResult("Total of valid scores", validTotal);
showNote("break exits the nearest loop. continue skips only the current iteration.");
