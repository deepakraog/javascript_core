// Hoisting
// Global execution context GEC has 2 execution context with 2 components 
// ie a. Memory Creation which will create variables in the memory and assigns default value 
// ie undefined for variables and functions for a function name
// b. Code Execution where in code is executed line by line and creates another EC if another function is invoked.


getName();
console.log(x);

var x = 7;

console.log(getName);

function getName() {
  console.log('Deepak');
}

var getName2 = function() {
  console.log('Deepak2');
}

var getName3 = () => {
  console.log('Deepak3');
};

console.log(getName);