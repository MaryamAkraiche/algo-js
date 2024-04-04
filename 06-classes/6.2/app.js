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
let rect1 = new Rectangle(2, 2, 5, 5);
let rect2 = new Rectangle(0, 0, 5, 5);
let rect3 = new Rectangle(6, 6, 5, 5);
console.log(rect1.collides(rect2));
console.log(rect2.collides(rect3));