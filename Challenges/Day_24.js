/*
## Challenge 24 

Description:  
Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.  

Solution Approach:  
Use a timer and clear it on each invocation to delay the function execution.
*/

function debounce(func, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

// Example usage:
const delayedLog = debounce((message) => {
  console.log(message);
}, 1000);

delayedLog("Hello"); // This will be logged after a 1000ms delay
delayedLog("World"); // This will override the previous call and be logged after a new 1000ms delay
