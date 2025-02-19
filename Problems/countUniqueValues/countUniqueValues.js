"use strict";
/*
    Problem:
    Implement a function called countUniqueValues,
    which accpets a "sorted array", and count the unique
    values in the array. There can be negative
    numbers in the array, but it will always be sorted.

    Examples:
    countUniqueValues([1,1,1,1,1,2]); // 2 Because the are unique
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]); // 7 is the sum of all the unique numbers
*/
// My steps to solve this problem:
// 1- I need to sort the array.
// 2- Make 2 Pointers one at index 0 and the other at 1
// 3- Make sum variable and if ptr1 !== ptr2 => sum++
// My Solution:
function countUniqueValues(arr) {
    if (arr.length === 0) {
        return 0;
    }
    ;
    let leftPtr = 0;
    let sum = 1;
    for (let rightPtr = 1; rightPtr < arr.length; rightPtr++) {
        if (arr[rightPtr] !== arr[leftPtr]) {
            sum++;
            leftPtr = rightPtr;
        }
        ;
    }
    return sum;
}
// Testing Solution - All OK!
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([5])); // 1
console.log(countUniqueValues([1, 1, 1, 1, 1, 1])); // 1
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //  7
console.log(countUniqueValues([-3, -3, -2, -1, 0, 1, 1, 2, 3])); // 7
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
