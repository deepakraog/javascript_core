let nameV = {
  firstName: 'Deepak',
  lastName: 'Rao Gaikwad'
};

let printName = function(hometown, state, country) {
  console.log(this.firstName + " " + this.lastName + ", " + hometown + ", " + state + ", " + country);
}

let printMyName = printName.bind(nameV, "Belgaum");
printMyName("KA", "India");

Function.prototype.mybind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function(...args2) {
    //obj.call(args[0]);
    obj.apply(args[0], [...params, ...args2]);
  }
}

let printMyName2 = printName.mybind(nameV, "Bidar");
printMyName2("KARNATAKA", "India");