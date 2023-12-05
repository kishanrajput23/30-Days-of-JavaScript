/*
## Challenge 30
Description: Implement a throttle function that ensures a given function is not called more than once in a specified time interval.

Solution Approach: Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.
 */

function throttle(func, interval) {
  let lastInvocationTime = 0;

  return function (...args) {
    const currentTime = Date.now();

    if (currentTime - lastInvocationTime >= interval) {
      func.apply(this, args);
      lastInvocationTime = currentTime;
    }
  };
}

// Example usage:
const throttledFunction = throttle(() => console.log('Hello Throttle!'), 1000);

// This will log 'Hello Throttle!' only once every 1000 milliseconds.
setInterval(throttledFunction, 100);
