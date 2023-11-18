/*
## Challenge 13
Problem Statement: Implement a memoization function.

Description: Write a function that takes a function as its argument and returns a memoized version of the function.

Solution Approach: Store the function's results for previous inputs and return the stored result for repeated inputs.
*/

function memoize(func) {
  const cache = {};

  return (...args) => {
    const key = args.join(',');

    return key in cache ? cache[key] : (cache[key] = func(...args));
  };
}

// Example function to be memoized
function add(a, b) {
  console.log("Adding");
  return a + b;
}

// Create a memoized version of the 'add' function
const memoizedAdd = memoize(add);

// Test the memoized function
console.log(memoizedAdd(1, 2)); // Calculates and logs 'Adding', returns 3
console.log(memoizedAdd(1, 2)); // Fetches from cache, returns 3 (no additional 'Adding' log)
console.log(memoizedAdd(3, 4)); // Calculates and logs 'Adding', returns 7
console.log(memoizedAdd(3, 4)); // Fetches from cache, returns 7 (no additional 'Adding' log)
