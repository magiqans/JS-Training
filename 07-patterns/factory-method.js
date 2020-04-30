class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    // method build itself
    static build(x, y) {
        return new Point(x, y);
    }
}

// Before. 
// What is constructor is changed?
// We need to change all NEW usages
const pointA = new Point(0, 0);
const pointB = new Point(10, 30);

// Alfter.
// Used when we need to create a lot of objects, E.g. via step(loop)
const pointC = Point.build(0, 0);
const pointD = Point.build(0, 0);
