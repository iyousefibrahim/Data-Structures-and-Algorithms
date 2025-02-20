// Binary Search Challenge
/*
    The Challenge:
    - Write a function that accepts a **sorted** array and a value.
    - Create a left pointer at the start of the array and a right pointer at the end of the array.
    - While the left pointer comes before the right pointer:
        - Create a pointer in the middle.
        - If you find the value you want, return the index.
        - If the value is too small, move the left pointer up.
        - If the value is too large, move the right pointer down.
    - If you never find the value, return -1.
*/

// My Solution:
function BinarySearch(sortedArr: number[], value: number) {
    let leftPtr = 0;
    let rightPtr = sortedArr.length - 1;

    while (leftPtr <= rightPtr) {
        let middle = Math.floor((leftPtr + rightPtr) / 2);

        if (sortedArr[middle] === value) {
            return middle;
        } else if (sortedArr[middle] < value) {
            leftPtr = middle + 1;
        } else {
            rightPtr = middle - 1;
        }
    }

    return -1;
}

// Testing
console.log(BinarySearch([1, 2, 3, 4, 5], 5)); // Output: 4
console.log(BinarySearch([1, 2, 3, 4, 5], 2)); // Output: 1
console.log(BinarySearch([1, 2, 3, 4, 5], 6)); // Output: -1
