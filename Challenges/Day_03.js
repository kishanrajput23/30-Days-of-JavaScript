/*
## Challenge 3
Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). 

Return true if either of them falls within the range.
*/
function checkRange(num1, num2) {
    return (num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99);
}
const firstNumber = 55;
const secondNumber = 101;
const result = checkRange(firstNumber, secondNumber);
console.log(result);
