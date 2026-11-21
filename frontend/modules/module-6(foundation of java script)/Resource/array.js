let array = new Array(5);
// console.log('this is the array length ' + array.length);


// array[0] = 1;
// array[1] = 2;
// array[2] = 3;
// array[3] = 4;
// array[4] = 5;

// console.log('this is the array ' + array);


const dynamicArray = [];

dynamicArray.push(1);
dynamicArray.push(2);
dynamicArray.push(3);
dynamicArray.push(4);
dynamicArray.push(5);

// console.log('this is the dynamic array ' + dynamicArray);



// console.log('this is the dynamic array length ' + dynamicArray.length);

// console.log(array.indexOf(1));
// console.log(array.indexOf(2));
// console.log(array.indexOf(3));
// console.log(array.indexOf(4));
// console.log(array.indexOf(5));


const fruits = ['apple', 'banana', 'orange', 'grape', 'mango'];


// for (item of fruits) {
// 	console.log(item);
// }

function middle(length) {
	if (length % 2 === 0) {
		return length / 2 - 1;
	} else {
		return Math.floor(length / 2);
	}
}

console.log("this is the middle element: " + fruits[middle(fruits.length)]);

const topic = { name: "DNS", done: true, lecture: 'done', exam: 'not-done' };

// console.log(topic);

// for (const key in topic) { 
// 	console.log(topic[key]);
// }

// for (const key in topic) {
// 	console.log(key, topic[key]);
// 	// name DNS
// 	// done true
// }


// for (let i = 0; i < fruits.length; i++) { 
// 	console.log(fruits[i]);
// }


// const arrayObject = ['apple', 1, true, { name: 'John', age: 30 }, [1, 2, 3], [1, 'orange', true]];



// console.log('this the array object ' + arrayObject);
// console.log('this the array object: ' + arrayObject[3].name);