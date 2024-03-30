const prompt = require('prompt-sync')();
let weekDay = new Number (prompt ("enter a number between 1 and 7"));
if (weekDay == 1){
    console.log("Monday");
} else if (weekDay == 2){
    console.log("Tuesday");
} else if (weekDay == 3){
    console.log("twednesday");
} else if (weekDay == 4){
    console.log("thursday");
} else if (weekDay == 5){
    console.log("friday");
} else if (weekDay == 6){
    console.log("saturday");
} else {
    console.log("sunday");
}

