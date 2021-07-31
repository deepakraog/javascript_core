function maxSubArraySum(arr, num) {
  if (arr.length < num) return null;
  let maxSum = 0;
  let tempSum = 0;
  
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let j = num; j < arr.length; j++) {
    tempSum = tempSum - arr[j - num] + arr[j];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySum([2, 6, 9, 11, 2, 1 ,12, 6, 9, 1], 3));
console.log(maxSubArraySum([2, -6, 9, 11, 2, 1 ,-12], 5));
console.log(maxSubArraySum([], 2));