/*
## Challenge 15
Problem Description -
create a string_chop function that takes a string and chop factor(size) and chops out the string into the factor(size) that has been passed
Test Data :
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
["Scaler"]
['Sc' , 'al' ,'er']
*/

function string_chop(str, size = 1) {
  if (size <= 0) {
    return ['Invalid chop size'];
  }

  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }

  return result;
}

// Test cases
console.log(string_chop('Scaler'));     // Output: ["Scaler"]
console.log(string_chop('Scaler', 2));  // Output: ['Sc', 'al', 'er']
console.log(string_chop('Scaler', 3));  // Output: ['Sca', 'ler']
