
class Point {
  x: number;
  y: number;

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }

  getDistance(another: Point) {
    //...
  }
}

// Object
// let point: Point = new Point();
let point = new Point();    // shorter way
point.x = 1;
point.y = 2;
point.draw();