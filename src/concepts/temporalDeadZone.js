//let and Const declarations are hoisted or not? yes but there is a something called as TDZ 

// Temporal Dead Zone 
// is the time duration or the phase in which the variable is allocated memory in the execution context, assigned a default undefined value
// ie, time between variable hoisting and initialize or assigned a value to a declaration.


// Reference Error
// console.log(a);

// console.log(x);

// Syntax Error
// let a = 10;
// let a = 10;

// const b;

// Type Error
// const c = 10;
// c = 100;


let a = 10;
console.log(a);
var b = 100;

console.log(b);