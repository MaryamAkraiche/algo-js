// Create a class named Circle with attributes xPos, yPos and radius. 
// Add a method named move(xOffset, yOffset) that will adjust the position of the circle. 
// Add a getter accessor named surface that will return the surface of the circle.
class Circle {
    constructor(xPos, yPos, radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }

    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }

    get surface() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
let circleOne = new Circle(5, 3, 8);
circleOne.move(2, 3);
console.log(circleOne);
