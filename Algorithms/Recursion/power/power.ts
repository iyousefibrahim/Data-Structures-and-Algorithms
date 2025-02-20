// Problem:
// Write a function that takes two numbers, a base and an exponent.
// The function should return the base raised to the power of the exponent.
// Solve it recursively without using the built-in Math.pow() function.

// Solution:
function power(number: number, ex: number): number {
    if (ex === 0) {
        return 1;
    }
    return number * power(number, ex - 1);
}
console.log(power(2, 3));
