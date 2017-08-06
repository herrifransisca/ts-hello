
// #1
// let drawPoint = (x, y) => {
//   //...
// }

// #2
// let drawPoint = (x, y, a, b, c, d, e, f) => {
//   //...
// }

// #3
// let drawPoint = (point) => {
//   //...
// }

// drawPoint({
//   x: 1,
//   y: 2
// })

// drawPoint({
//   x: 'Mosh'    // will break the function (expect number for drawing point)
// })

// #4  // using inline annotation (to solve breaking the function, x: 'Mosh')
// let drawPoint = (point: { x: number, y: number }) => {
//   //...
// }

// drawPoint({
//   x: 1,
//   y: 2
// })


#5  // using interface (best way)
interface Point {
  x: number,
  y: number  
}

let drawPoint = (point: Point) => {
  //...
}