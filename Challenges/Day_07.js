/*
## Challenge 7
Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.
*/

function checkNumberPair() {
    // Taking input from the user
    const num1 = parseInt(prompt("Enter the first number:"));
    const num2 = parseInt(prompt("Enter the second number:"));

    // Checking the conditions
    return num1 === 50 || num2 === 50 || num1 + num2 === 50;
}

// Calling the function
const result = checkNumberPair();

// Displaying the result
console.log(result);
