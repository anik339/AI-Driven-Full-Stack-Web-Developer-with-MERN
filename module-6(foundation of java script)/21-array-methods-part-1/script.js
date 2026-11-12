// TOPIC 21: ARRAY METHODS - PART 1

const fruits = ["Apple", "Banana", "Mango"];

// push() adds items to the end; pop() removes the last item.
fruits.push("Orange");
const lastFruit = fruits.pop();

// unshift() adds items at the beginning; shift() removes the first item.
fruits.unshift("Grapes");
const firstFruit = fruits.shift();

// slice() returns a selected portion without changing the original array.
const numbers = [10, 20, 30, 40, 50];
const selectedNumbers = numbers.slice(1, 4);

// splice() can remove, insert, or replace items in the original array.
const colours = ["Red", "Blue", "Green"];
const removedColours = colours.splice(1, 1, "Yellow");

// concat() combines arrays into a new array; join() creates a string.
const frontEnd = ["HTML", "CSS"];
const backEnd = ["Node.js", "Express"];
const fullStack = frontEnd.concat(backEnd);

// includes() checks for a value; indexOf() finds its first index.
const hasCSS = fullStack.includes("CSS");
const cssIndex = fullStack.indexOf("CSS");

// reverse() changes the order of the original array.
const letters = ["A", "B", "C"];
letters.reverse();

showSection("Array methods part 1");
showResult("Fruits", fruits);
showResult("Popped fruit", lastFruit);
showResult("Shifted fruit", firstFruit);
showResult("Selected numbers", selectedNumbers);
showResult("Original numbers", numbers);
showResult("Updated colours", colours);
showResult("Removed colours", removedColours);
showResult("Full-stack skills", fullStack);
showResult("Joined skills", fullStack.join(", "));
showResult("Has CSS / CSS index", `${hasCSS} / ${cssIndex}`);
showResult("Reversed letters", letters);
showNote("push, pop, shift, unshift, splice, and reverse change the original array. slice and concat return new arrays.");
