/*
## Challenge 17
Problem Description:
Write a JavaScript function named filterOutOdd that uses the filter() method to filter out odd numbers from an array.
Inputs:
An array of numbers.
Outputs:
An array of numbers without odd numbers.
Hints:
Use the filter() method to create a new array with all elements that pass the test implemented by the provided function.
Solution Approach:
Use the filter() method and provide a callback that checks if the number is even.
*/

function filterOutOdd(numbers) {
  if (!Array.isArray(numbers)) {
    return 'Invalid input. Please provide an array of numbers.';
  }

  const filteredNumbers = numbers.filter((number) => number % 2 === 0);
  return filteredNumbers;
}

// Test case
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterOutOdd(numbersArray));  // Output: [2, 4, 6, 8, 10]
