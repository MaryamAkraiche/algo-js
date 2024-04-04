// Create a function named rand10() 
// that returns a random integer between 1 and 10.

/**
 * Generate a random integer between two numbers.
 * @param {number} min - A minimum value.
 * @param {number} max - A maxmimum value.
 * @returns {number} A random integer between two numbers.
 */
function rand10(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}
  
// Create a program that will display the result of that function each time it is run.
let randomNumber = rand10(1, 10);
console.log(randomNumber);