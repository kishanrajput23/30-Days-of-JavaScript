/*
## Challenge 22
Problem Statement: Write a function to deeply compare two objects for equality.  

Description: Given two objects, the function should return true if they are deeply equal and false otherwise.  

Solution Approach: Recursively compare properties of both objects.  
*/

function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 === null || obj2 === null) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

// Example usage:
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
console.log(deepEqual(objA, objB)); // Output: true
