// 12. Your First TypeScript Program
// function log(message) {
//   console.log(message);
// }

// var message = 'Hello World';

// log(message);



// function doSomething() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }

//   console.log('Finally: ' + i);
// }

function doSomething() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  console.log('Finally: ' + i);
}

doSomething();


// Lesson:
// use let instead of var
// eventhought supported version is EcmaScript 5 that doesn't support "let", typescript still could translate let to var without causing error / stuck with our application (cannot be run)