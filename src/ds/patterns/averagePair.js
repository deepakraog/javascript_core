function averagePair(args, avgSum){
  if (args.length === 0) {
    return false;
  }

  let i = 0;
  let j = args.length - 1;
  while (i < j) {
    let avgVal = (args[i] + args[j]) / 2;
    if ( avgVal === avgSum ) {
      return true;
    } else if (avgVal > avgSum) {
      j--;
    } else {
      i++;
    }
  }
  return false;
}


console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));