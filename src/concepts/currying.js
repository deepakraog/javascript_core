// Currying using bind

let multiply = function (x, y) {
  console.log(x * y);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);


console.log("-------------------");

// Currying using closure
let multiplyC = function (x) {
  return function(y) {
    console.log(x*y);
  }
}

let multipleCByTwo = multiplyC(2);
multipleCByTwo(5);

let multipleCByThree = multiplyC(3);
multipleCByThree(5);

