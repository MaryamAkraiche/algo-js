const prompt = require('prompt-sync')();

let price = prompt("Enter the item cost: ");
let moneyHanded = prompt("Enter the handed money: ");

function computeChange(price, moneyHanded){
    if (isNotNumber(price) || isNotNumber(moneyHanded)){
        console.log([]);
    } else if (price < 0 && moneyHanded < 0){
        console.log([]);
    } else if (price > moneyHanded){
        console.log([]);
    } else {
        return moneyHanded - price;
    }
  }
  let change = moneyHanded - price;
  console.log(change)