const prompt = require('prompt-sync')();
let max = prompt();
let min = prompt();
let current = prompt();
if (min > max) {
    console.log("Sorry, but it seems you've made an error");
} else if (current >= min && current <= max) {
    console.log("current is between min and max");
} else {
    console.log("current is not between min and max");
}