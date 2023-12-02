/*
## Challenge 27
Description:  
Write a generator function range that takes two arguments, start and end, and yields all the numbers in that range.  

Solution Approach:  
Use the function syntax for generator functions and the yield keyword.  
*/


function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Example usage:
const myRange = range(1, 5);

for (const number of myRange) {
  console.log(number);
}
// Output: 1, 2, 3, 4, 5
