const prompt = require('prompt-sync')();

// Create a function named calcSurface 
// that takes the length and width of a rectangle 
// and returns its surface.


// Write a documentation for the calcSurface function
/**
 * Calculates the surface of a rectangle.
 * @param {number} length - The length of a rectangle.
 * @param {number} width - The width of a rectangle.
 * @returns {number} The surface of a rectangle.
 */
function calcSurface(length, width) {
    return length * width;
}


// Then create a program that asks the length and width of a rectangle to the user 
let length = prompt("Enter the length of your rectangle: ");
let width = prompt("Enter the width of your rectangle: ");

// That program must use the function you created. 
let surface = calcSurface(length, width);

// Then displays the surface of that rectangle
console.log(surface);