"use strict";
// Linear Search Challenge
/*
    The Challenge:
    Write a function accepts an array and a value
    loop through the array and check if the current
    array element is equal to the value
    if it is, return the index at which the element is found
    if the value is never found return -1
*/
// My Solution:
function Search(arr, value) {
    if (arr.length === 0) {
        return -1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}
// Testing || All OK!
// Test Case 1: Value exists in the array (middle element)
console.log(Search([1, 2, 3, 4, 5], 3)); // Expected output: 2
// Test Case 2: Value exists at the beginning
console.log(Search(["yousef", "ahmed", "mohamed"], "yousef")); // Expected output: 0
// Test Case 3: Value exists at the end
console.log(Search([10, 20, 30, 40], 40)); // Expected output: 3
// Test Case 4: Value not in the array
console.log(Search(["apple", "banana", "cherry"], "grape")); // Expected output: -1
// Test Case 5: Empty array
console.log(Search([], "anything")); // Expected output: -1
// Test Case 6: Value is present multiple times (should return first index)
console.log(Search([1, 2, 3, 2, 4], 2)); // Expected output: 1
