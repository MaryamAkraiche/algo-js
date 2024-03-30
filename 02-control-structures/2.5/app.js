const prompt = require('prompt-sync')();
let favoriteNumber = new Number(prompt("Enter your favorite number"));
while (favoriteNumber !== 42){
    console.log("Are you sure?");
    if (favoriteNumber == 42){
        break;
    }
}