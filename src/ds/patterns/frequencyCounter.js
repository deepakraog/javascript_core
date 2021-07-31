class FrequencyPattern {
  same(arr1, arr2) {
     
    if (arr1.length !== arr2.length) {
      return false;
     }

    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for ( let val1 of arr1) {
      frequencyCounter1[val1] = (frequencyCounter1[val1] || 0 ) + 1;
    }

    for ( let val2 of arr2) {
      frequencyCounter2[val2] = (frequencyCounter2[val2] || 0 ) + 1;
    }

    for (let key in frequencyCounter1) {
      if (!(key ** 2 in frequencyCounter2)) {
        return false;
      }

      if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
        return false;
      }
    }
    return true;
  }
}

const result = new FrequencyPattern();

console.log(result.same([1, 2, 1, 3], [4, 1, 9, 1]));
console.log(result.same([1, 2, 8], [4, 1, 9, 1]));
console.log(result.same([1, 2, 1, 8], [4, 1, 9, 1]));
console.log(result.same([1, 2, 8], [4]));
console.log(result.same([2, 8], [64, 4]));