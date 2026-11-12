// TOPIC 22: ARRAY METHODS - PART 2

const marks = [35, 50, 65, 80, 95];

// forEach() runs a callback for each item; it does not return a new array.
marks.forEach((mark, index) => console.log(`Mark ${index + 1}:`, mark));

// map() transforms each item and returns a new array.
const doubledMarks = marks.map(mark => mark * 2);

// filter() returns a new array containing items that pass a condition.
const passedMarks = marks.filter(mark => mark >= 40);

// find() returns the first matching item; findIndex() returns its index.
const firstHighMark = marks.find(mark => mark >= 80);
const firstHighIndex = marks.findIndex(mark => mark >= 80);

// some() checks whether at least one item passes; every() checks all items.
const hasPerfectMark = marks.some(mark => mark === 100);
const allPassed = marks.every(mark => mark >= 40);

// These methods also work with arrays of objects.
const products = [
    { name: "Keyboard", price: 1200 },
    { name: "Mouse", price: 500 },
    { name: "Monitor", price: 12000 }
];
const affordableProducts = products.filter(product => product.price < 2000);

showSection("Array methods part 2");
showResult("Doubled marks", doubledMarks);
showResult("Passed marks", passedMarks);
showResult("First high mark", firstHighMark);
showResult("First high mark index", firstHighIndex);
showResult("Has perfect mark", hasPerfectMark);
showResult("All passed", allPassed);
showResult("Affordable products", affordableProducts);
showNote("map transforms, filter selects, find returns the first match, some checks at least one, and every checks all.");
