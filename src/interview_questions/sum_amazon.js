let sum = function (a) {
  return function (b) {
    if (b) {
      return sum(a + b);
    }
    return a;
  }
}

let sumInES6 = a => b => b ? sum(a+b) : a;

const result = sum(1)(2)(3)(4)();
console.log(result);

console.log(sumInES6(1)(2)(3)(4)(1)(2)(3)(4)());