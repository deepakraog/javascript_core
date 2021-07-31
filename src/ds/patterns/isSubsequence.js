function isSubsequence(subString, mainString) {
  if (subString.length > mainString.length) {
    return false;
  }

  if (!subString) return true;

  let i = 0;
  let j = 0;
  let tempString = subString;
  while ( i < subString.length && j < mainString.length) {
    if (subString[i] === mainString[j]) {
      i++;
      j++;
      tempString = tempString.substring(1);
    } else {
      j++;
    }
  }
  if (tempString.length === 0) {
    return true;
  }
  return false;
}

function isSubsequenceFromColtSteele(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'string'));
console.log(isSubsequence('abc', 'acb'));

console.log('=========');

console.log(isSubsequenceFromColtSteele('hello', 'hello world'));
console.log(isSubsequenceFromColtSteele('sing', 'string'));
console.log(isSubsequenceFromColtSteele('abc', 'acb'));