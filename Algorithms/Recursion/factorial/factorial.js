"use strict";
// Writing Factorial Iteratively
// function factorial(num: number) {
//     let total = 1;
//     for (let i = num; i > 0; i--) {
//         total *= i;
//     }
//     return total;
// }
// console.log(factorial(3));
// Writing Factorial with Recursion
function factorialWithRecursion(num) {
    if (num === 1) {
        return 1;
    }
    else {
        return num * factorialWithRecursion(num - 1);
    }
}
console.log(factorialWithRecursion(3)); // 6
