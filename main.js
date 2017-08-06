// class Point {
//   constructor(private x?: number, private y?: number) {
//   }
//   draw() {
//     console.log('X: ' + this.x + ', Y: ' + this.y);
//   }
//   getX() {
//     return this.x;
//   }
//   setX(value) {
//     if (value <= 0)
//       throw new Error('value cannot be less than 0.');
//     this.x = value;
//   }    
// }
// let point = new Point(1, 2);
// let x = point.getX();
// point.setX(10);
// point.draw();
// USING PROPERTY
var Point = (function () {
    function Point(_x, _y) {
        this._x = _x;
        this._y = _y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this._x + ', Y: ' + this._y);
    };
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            console.log('value: ' + value);
            if (value < 0)
                throw new Error('value cannot be less than 0.');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var point = new Point(1, 2);
var x = point.x;
point.x = 10;
point.draw();
// Here's the lesson:
// a property looks like a field from the outside, but internaly, it's really a method in the class.
// well, more accurately is in one method which is a getter and a setter or a combination of getter and setter. 
