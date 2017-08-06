var Point = (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
// Object
// let point: Point = new Point();
var point = new Point(); // shorter way
point.x = 1;
point.y = 2;
point.draw();
