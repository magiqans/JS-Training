class Shape {
    draw() {
        /** draw */
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
    }
    draw() {
        /** draw */
    }
}
class Square extends Shape {
    constructor(length) {
        super();
    }
}

const shapes: Shape[] = [];
shapes.push(
    new Square(1),
    new Circle(2)
);
shapes.forEach(shape => {
    shape.draw(); // draw any of shape
});