// Problem
function x() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Nameste - Deepak");
}

x();

// Solution 1 with let - block scope
function y() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
  console.log("Nameste - Dilip");
}

y();

// Solution 2 with closure

function z() {
  for (var i = 1; i <= 5; i++) {
    function close(val) {
      setTimeout(function () {
        console.log(val);
      }, val * 1000);
    }
    close(i);
  }
  console.log("Nameste - Chinnamma");
}

z();