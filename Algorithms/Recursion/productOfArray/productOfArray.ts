// Problem:
// Write a function that takes an array of numbers.
// The function should return the product of all numbers in the array.
// Solve it recursively without using loops.

function productOfArray(arr: any[]): any {
    if (arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}

// Testing
console.log(productOfArray([2, 2]));
