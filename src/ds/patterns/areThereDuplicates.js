function areThereDuplicatesUsingFrequencyCounter(...args) {
  if (args.length === 0) {
    return false;
  }

  let frequencyCounter = {};

  for (const key of args) {
    frequencyCounter[key] = (frequencyCounter[key] || 0) + 1;
    if (frequencyCounter[key] > 1) {
      return true;
    }
  }
  return false;
}

function areThereDuplicatesUsingPointers(...args) {
  if (args.length === 0) {
    return false;
  }

  args.sort((a,b) => a > b);
  let i = 0;
  for (let j = 1; j < args.length; j++) {
    if (args[i] === args[j]) {
      return true;
    }
    i++;
  }
  return false;
}

console.log(areThereDuplicatesUsingFrequencyCounter(1,2,3));
console.log(areThereDuplicatesUsingFrequencyCounter(1,2,3,1));

console.log(areThereDuplicatesUsingPointers(1,2,3));
console.log(areThereDuplicatesUsingPointers(1,1,2,3));