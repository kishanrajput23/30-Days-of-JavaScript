/*
## Challenge 5
Write a JavaScript exercise to get the filename extension.
*/

function getFileExtension(filename) {
    const parts = filename.split('.');
    return parts.length > 1 ? parts[parts.length - 1] : null;
}

const exampleFilename = "example_file.txt";
const extension = getFileExtension(exampleFilename);

console.log("File extension:", extension);
