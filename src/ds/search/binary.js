function binarySearch(arr, search){
  let lPointer = 0;
  let rPointer = arr.length - 1;
  let mid = Math.floor((lPointer + rPointer) / 2);
  while (arr[mid] !== search && lPointer <= rPointer) {
    if (arr[mid] > search) {
      rPointer = mid -1;
    } else if (arr[mid] < search) {
      lPointer = mid + 1;
    }
    mid = Math.floor((lPointer + rPointer) / 2);
  }
  return arr[mid] === search ? mid : -1;
}

let numArray = [1,2,3,4,5,6,7,8]
console.log(binarySearch(numArray, 5));
console.log(binarySearch(numArray, 77));