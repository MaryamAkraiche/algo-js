function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min;
}

class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length){
        this.topLeftXPos = topLeftXPos;
        this.topLeftYPos = topLeftYPos;
        this.width = width;
        this.length = length;
    }
 
    collides(otherRectangle){
        let leftA = this.topLeftXPos;
        let rightA = this.topLeftXPos + this.width;
        let topA = this.topLeftYPos;
        let bottomA = this.topLeftYPos + this.length;

        let leftB = otherRectangle.topLeftXPos;
        let rightB = otherRectangle.topLeftXPos + otherRectangle.width;
        let topB = otherRectangle.topLeftYPos;
        let bottomB = otherRectangle.topLeftYPos + otherRectangle.length;

        if (leftA < rightB && rightA > leftB && topA < bottomB && bottomA > topB) {
            return true;
        } else {
            return false;
        }
        }
}
let arrayOfRectangle = [];
for (let i = 1; i <= 1000; i++){
    let topLeftXPos = getRandom(1,20);
    let topLeftYPos = getRandom(1,20);
    let width = getRandom(1,20);
    let length = getRandom(1,20);
    let rectangle = new Rectangle(topLeftXPos, topLeftYPos, width, length);
    arrayOfRectangle.push(rectangle);
}

collidingRectangles = [];
for (let i = 0; i < arrayOfRectangle.length; i++) {
    for (let j = i + 1; j < arrayOfRectangle.length; j++) {
        if (arrayOfRectangle[i].collides(arrayOfRectangle[j])) {
            collidingRectangles.push(arrayOfRectangle[i]);
        }
    }
}
console.log(collidingRectangles)