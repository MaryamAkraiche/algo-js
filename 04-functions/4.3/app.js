// By reusing the function rand10()
// write a function named multiRand(n) that returns an array of n numbers between 1 and 10.

/**
 * Generate a random integer between two numbers.
 * @param {number} min - A minimum value.
 * @param {number} max - A maxmimum value.
 * @returns {number} A random integer between two numbers.
 */
function rand10(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

/**
 * Generate an array of n numbers between two numbers.
 * @param {number} n - The number of numbers of the array.
 * @returns {number} An array of n numbers between two numbers.
 */

function multiRand(n) {
    let arrayOfNumbers = [];
    for (i = 1; i <= n; i ++) {
        let randomNumber = rand10(1, 10);
        arrayOfNumbers.push(randomNumber);
    }
    return arrayOfNumbers ;
}
let arrayOfNumbers = multiRand(3);
console.log(arrayOfNumbers);
