/*
## Challenge 8
 Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.  
Sample array : [1, 2, 3] and subset length is 2  
Expected output : [[1, 2], [1, 3], [2, 3]]
*/

function getSubsets(array, length) {
  const subsets = [];

  function generate(current, start) {
    if (current.length === length) {
      subsets.push([...current]);
      return;
    }

    for (let i = start; i < array.length; i++) {
      current.push(array[i]);
      generate(current, i + 1);
      current.pop();
    }
  }

  generate([], 0);
  return subsets;
}

const sampleArray = [1, 2, 3];
const subsetLength = 2;
const result = getSubsets(sampleArray, subsetLength);
console.log(result);
