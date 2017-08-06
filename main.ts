// Access modifiers:
// 1. private, 2. public, 3. protected
// default = public

class Point {
  // # 1 Way 
  // private x: number;
  // private y: number;

  // constructor(x?: number, y?: number) {
  //   this.x = x;
  //   this.y = y;
  // }


  // # 2 Other and BEST Way and has the exactly the same with #1
  constructor(private x?: number, private y?: number) {
  }



  draw() {
    console.log('X: ' + this.x + ', Y: ' + this.y);
  }
}

let point = new Point(1, 2);
// point.x = 3;
// point.y = 4;
point.draw();