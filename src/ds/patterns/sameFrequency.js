function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false;

  let frequencyCounter = {};
  
  for (let key of num1.toString()) {
    frequencyCounter[key] = (frequencyCounter[key] || 0 ) + 1;
  }
  
  for (let val of num2.toString()) {
    if (!frequencyCounter[val]) {
      return false;
    } else {
      frequencyCounter[val] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(1223, 2234));
console.log(sameFrequency(122, 221));
console.log(sameFrequency(111, 1111));
console.log(sameFrequency(3, 3));
console.log(sameFrequency(3, 1));
console.log(sameFrequency( '',''));