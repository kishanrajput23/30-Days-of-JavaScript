/*
## Challenge 1:
Write a JavaScript function that reverses a number.
Sample Data and output:
Example: 
x = 32243;
Expected Output: 34223
*/

function reverseNumber(num) {
  let rev = 0;
  while (num != 0) {
    let rem = num%10;
    rev = rev*10 + rem;
    num = Math.floor(num/10);
  }
  return rev;
}

let n = 32243;
console.log("Before Reverse:", n);

let num = reverseNumber(n);
console.log("After Reverse:", num);
