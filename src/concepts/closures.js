// Closure is a function which is bind together with its lexical environment.

// function x() {
//   var a = 10;
//   function y() {
//     console.log(a);
//   }
//   y();
// }

// x();


function x() {
  var a = 10;
  return function y() {
    console.log(a);
  }
}

z = x();
// ..... code

z();