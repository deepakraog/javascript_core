function minSubArrayLen(arr, sum) {
  if (arr.length === 0) {
    return -1;
  }

  let minArrayLength = Infinity;
  let windowStart = 0;
  let tempSum = arr[windowStart];
  // arr.sort((a, b) => a - b);
  for (let windowEnd = 1; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] >= sum) {
      return 1;
    }
    tempSum += arr[windowEnd];
    while (tempSum >= sum) {
      minArrayLength = Math.min(minArrayLength, (windowEnd - windowStart + 1));
      tempSum -= arr[windowStart];
      windowStart++;
    }
  }
  return minArrayLength === Infinity ? 0 : minArrayLength;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7));
console.log(minSubArrayLen([2,1,6,5,4], 9));
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 39));
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95));