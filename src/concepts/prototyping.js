let object = {
  name: 'Deepak',
  city: 'Bengaluru',
  getInfo: function() {
    console.log(this.name + ' from ' + this.city);
  }
};

let object2 = {
  name: 'Shruti'
};


// prototypal inheritance


// Never do this
object2.__proto__ = object;
console.log(object2);
console.log(object2.name);
console.log(object2.city);
console.log(object.getInfo());
console.log(object2.getInfo());


function Dog() {
}
Dog.prototype.bark = function() {
 console.log('woof!');
};
var fido = new Dog();
console.log(typeof Dog.__proto__); // 'function'
console.log(typeof Dog.prototype); // 'object'
console.log(typeof fido.prototype); // undefined
console.log(typeof fido.__proto__); // 'object'
console.log(Dog.hasOwnProperty('bark')); // false
console.log(fido.hasOwnProperty('bark')); // false
fido.bark(); // ‘woof!’


var parent = {
  foo: function() {
    console.log('bar');
  }
};

var child = Object.create( parent );
console.log(parent.hasOwnProperty('foo')); // true
console.log(child.hasOwnProperty('foo')); // false
console.log(typeof child); // 'object'
console.log(typeof child.__proto__); // 'object'
console.log(typeof child.prototype); // undefined
console.log(typeof parent.prototype); // undefined
console.log(typeof parent.__proto__); // 'object'
console.log(typeof parent); // 'object'
child.foo(); // bar


function Car() {

}

Car.prototype.drive = function() {
  console.log('driving...');
}

var ride = new Car();

ride.drive();


function Rectangle( width, height ) {
  this.width = width;
  this.height = height;
 }

var rect = new Rectangle( 3, 4 );
rect.width; // 3
rect.height; // 4

Rectangle.prototype.area = function() {
  return this.width * this.height;
};


console.log(rect.area());

function Square( length ) {
  this.width = this.height = length;
}


Square.prototype = Object.create( Rectangle.prototype );

var square = new Square( 4 );
console.log(square.area()); // 16

Square.prototype.diagonal = function() {
  return Math.sqrt( this.area() * 2 );
};

// Here’s an example (for illustrative purposes only. Don’t ever do this):
var arr = [ 1, 2, 3, 4, 5 ];
Array.prototype.shuffle = function() {
 return this.sort(function() {
 return Math.round( Math.random() * 2 ) - 1;
 });
};
console.log(arr.shuffle()); // [ 3, 1, 4, 5, 2 ]

function Rectangle( width, height ) {
  this.width = width;
  this.height = height;
};
Rectangle.prototype.area = function() {
  return this.width * this.height;
};
var shape = Object.create( Rectangle.prototype );
Rectangle.call( shape, 3, 4 );
console.log(shape.area());


