/*
## Challenge 9
Write a JavaScript function to find the first not repeated character.  
Sample arguments : 'abacddbec'  
Expected output : 'e'
*/

function firstNotRepeated(str) {
  const charCount = {};

  // Count occurrences of each character
  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Find the first character with count 1
  for (const char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  // If no unique character found
  return null;
}

const sampleString = 'abacddbec';
const result = firstNotRepeated(sampleString);
console.log(result);
