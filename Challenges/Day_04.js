/*
## Challenge 4:
Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
*/

function triangleArea(side1, side2, side3) {
    // Heron's formula to find the area of the triangle
    const s = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
    return area;
}

const sideA = 5;
const sideB = 6;
const sideC = 7;

const area = triangleArea(sideA, sideB, sideC);
console.log("The area of the triangle is: " + area);
