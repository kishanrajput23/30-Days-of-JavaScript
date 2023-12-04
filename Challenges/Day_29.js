/*
## Challenge 29
Description: Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.

Solution Approach: Use Promise.race and a timeout promise.
 */

function raceWithTimeout(promises, timeout) {
  return Promise.race([
    Promise.all(promises),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeout)
    ),
  ]);
}

// Example usage:
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 500));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));

raceWithTimeout([promise1, promise2], 800)
  .then((result) => console.log('Resolved:', result))
  .catch((error) => console.error('Rejected:', error.message));
