const prompt = require('prompt-sync')();
let age = prompt("how old are you?");

if (age >= 18) {
    console.log("You are an adult");
} else {
    console.log("You are not yet an adult");
}
