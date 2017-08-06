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
class Point {
  constructor(private _x?: number, private _y?: number) {
  }

  draw() {
    console.log('X: ' + this._x + ', Y: ' + this._y);
  }

  get x() {
    return this._x;
  }

  set x(value) {
    if (value < 0)
      throw new Error('value cannot be less than 0.');

    this._x = value;
  }

  setX(value) {
    this._x = value;
  }
}

let point = new Point(1, 2);
let x = point.x;
point.x = 10;
// point.x(10);   // why cannot write this ? is it the same with point.x = 10 ?
                  // the answer: because x is KNOWN as a property, not a METHOD
point.setX(10);   // setX is a METHOD. Kesimpulannya, bila ada kata "SET" / "GET", itu berarti PROPERTY
point.draw();


// Here's the lesson:
// a property looks like a field from the outside, but internaly, it's really a method in the class.
// well, more accurately is in one method which is a getter and a setter or a combination of getter and setter.