/*
## Challenge 6
Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
*/

function computeSumOrTriple(a, b) {
    const sum = a + b;

    return a === b ? 3 * sum : sum;
}

// Taking input from the user
const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));

const result = computeSumOrTriple(num1, num2);
console.log("Result:", result);
