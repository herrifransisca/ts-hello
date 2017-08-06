
// class Point {
//   x: number;
//   y: number;

//   constructor(x: number, y: number) {
//     this.x = x;
//     this.y = y;
//   }

//   draw() {
//     console.log('X: ' + this.x + ', Y: ' + this.y);
//   }
// }

// let point = new Point(1, 2);
// point.draw();


// because in typescript, doesn't have "MULTI CONSTRUCTOR" like in C#, use "optional (?)"

class Point {
  x: number;
  y: number;

  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point();
point.draw();