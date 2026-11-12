// TOPIC 23: ARRAY METHODS - PART 3

// reduce() combines array values into one result.
const prices = [100, 200, 300, 400];
const totalPrice = prices.reduce((total, price) => total + price, 0);

// reduce() can also count repeated values.
const fruits = ["Apple", "Banana", "Apple", "Mango", "Banana", "Apple"];
const fruitCounts = fruits.reduce((counts, fruit) => {
    counts[fruit] = (counts[fruit] || 0) + 1;
    return counts;
}, {});

// flat() creates a new array with nested arrays flattened.
const nestedNumbers = [1, [2, 3], [4, [5, 6]]];
const flatNumbers = nestedNumbers.flat(Infinity);

// flatMap() maps each item and flattens one level.
const sentences = ["I love JS", "I love React"];
const words = sentences.flatMap(sentence => sentence.split(" "));

// sort() changes the original array. Use a comparator for numbers.
const numbers = [40, 5, 100, 25];
numbers.sort((a, b) => a - b); // Ascending.
const ascendingNumbers = [...numbers];
numbers.sort((a, b) => b - a); // Descending.

// Array.from() creates an array from an iterable.
const nameArray = Array.from("Anik");

// Method chaining combines multiple array methods.
const cart = [
    { name: "Keyboard", price: 1200, available: true },
    { name: "Mouse", price: 500, available: false },
    { name: "Headphone", price: 1800, available: true }
];
const availableCartTotal = cart
    .filter(item => item.available)
    .map(item => item.price)
    .reduce((total, price) => total + price, 0);

showSection("Array methods part 3");
showResult("Total price", totalPrice);
showResult("Fruit counts", fruitCounts);
showResult("Flattened array", flatNumbers);
showResult("Words", words);
showResult("Ascending numbers", ascendingNumbers);
showResult("Descending numbers", numbers);
showResult("Name array", nameArray);
showResult("Available cart total", availableCartTotal);
showNote("sort changes the original array. Use (a, b) => a - b for ascending numeric order and (a, b) => b - a for descending order.");
