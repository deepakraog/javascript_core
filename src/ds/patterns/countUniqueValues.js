function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let uniqueIndex = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[uniqueIndex] !== arr[j]) {
      uniqueIndex++;
      arr[uniqueIndex] = arr[j];
    }
  }
  return uniqueIndex + 1;
}


console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([1, 1, 1, 4, 4]));
console.log(countUniqueValues([1, 1, 1, 1, 1]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([-2, -1, -1, 0, 1, 1, 2, 3]));