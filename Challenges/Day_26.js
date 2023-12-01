/*
## Challenge 26
Description:
Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.

Solution Approach:
Combine map, filter, and reduce array methods.
*/


function calculateTotal(numbers) {
  // Filter out even numbers
  const oddNumbers = numbers.filter(number => number % 2 !== 0);
  
  // Square the remaining numbers
  const squaredNumbers = oddNumbers.map(number => number ** 2);

  // Calculate their sum
  const total = squaredNumbers.reduce((sum, squaredNumber) => sum + squaredNumber, 0);

  return total;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const result = calculateTotal(numbers);
console.log(result); // Output: 35
