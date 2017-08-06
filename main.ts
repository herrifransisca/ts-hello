// Access modifiers:
// 1. private, 2. public, 3. protected
// default = public

class Point {
  private x: number;
  private y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
// point.x = 3;
// point.y = 4;
point.draw();