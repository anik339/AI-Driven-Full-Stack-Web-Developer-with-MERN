
// Problem 1: Find the Smallest Number

function findSmallest(arr) {
    if (arr.length === 0) {
        return undefined;
    }

    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return smallest;
}

console.log(findSmallest([4, 2, 8, 1, 9]));
// Output: 1


// Problem 2: Merge Two Arrays

function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(mergeArrays([1, 2], [3, 4]));
// Output: [1, 2, 3, 4]
