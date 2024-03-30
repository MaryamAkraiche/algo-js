const prompt = require('prompt-sync')();
let n = Number(prompt("enter a number: "));
var result = 0
for (let i = 1; i <= n; i++) {
    let number = Number(prompt("enter a number again: "));
    result = result + number
}
console.log(result);
