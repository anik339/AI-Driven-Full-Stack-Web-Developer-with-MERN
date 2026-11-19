// TOPIC 12: WHILE LOOP

// A while loop repeats while its condition remains true.
let count = 1;
while (count <= 5) {
    console.log("Count:", count);
    count++; // I update the counter so the loop can finish.
}

// I am calculating the sum of numbers from 1 to 5.
let number = 1;
let total = 0;
while (number <= 5) {
    total += number;
    number++;
}
console.log("Total:", total);

// I am reading each item from an array with a while loop.
const fruits = ["Apple", "Banana", "Mango"];
let index = 0;
while (index < fruits.length) {
    console.log("Fruit:", fruits[index]);
    index++;
}

// Do not run while (true) without a planned way to stop it.
showSection("While loop practice");
showResult("Sum from 1 to 5", total);
showResult("Fruit list", fruits);
showNote("Decide what makes the condition false. Update the counter or state inside the loop to avoid an infinite loop.");
