/**
 * Generate a random integer between two numbers.
 * @param {number} min - A minimum value.
 * @param {number} max - A maxmimum value.
 * @returns {number} A random integer between two numbers.
 */
function rand10(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

// Array of learners
let learners = ["Lyne", "Illies", "Mohamed", "Zahra", "Isabelle", "Julie", "Caroline", "Justine"];

// Create a function pickLearner(inputAr, n) that takes 2 parameters.
function pickLearner(learners, n) {
    let selectedLarners = [];
    for (i = 1; i <= n; i++){
        let randomNumber = rand10(0, learners.length - 1);
        let selectedLearner = learners[randomNumber];
        selectedLarners.push(selectedLearner);
        learners.splice(randomNumber, 1);
    }
    return selectedLarners;
}

let selectedLarners = pickLearner(learners, 5);
console.log(selectedLarners);