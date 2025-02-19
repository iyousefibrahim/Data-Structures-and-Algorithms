/*
    Problem:
    Write a function called sumZero which accepts a sorted
    array of integers. The function should find the first pair
    where the sum is 0. Return an array that includes both
    values that sum to zero or undefined if a pair does not exist.

    // Examples:
    // sumZero([-3,-1,-2,0,3]) // [-3,3]
    // sumZero([-2,0,1,3]) // undefined
    // sumZero([1,2,3]) // undefined
*/

// My steps to solve the problem:
// 1- 2 pointers points at the start & the end of the array.
// 2- Check if the 2 numbers is equal to 0 if true return []
// 3- if its not true then i will move the 2 pointers
// 4- if no results found return undefined

// My Solution:

function sumZero(arr: number[]) {
    let ptr1 = 0;
    let ptr2 = arr.length - 1;

    while (ptr1 < ptr2) {
        let sum = arr[ptr1] + arr[ptr2];

        if (sum === 0) {
            return [arr[ptr1], arr[ptr2]];
        } else if (sum > 0) {
            ptr2--;
        } else {
            ptr1++;
        }
    }

    return undefined;
}

// Testing
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-3, -1, -2, 0, 55])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-3, 1, 2, 3])); // [-3,3]
console.log(sumZero([-3, -1, -2, 0, 55]));

