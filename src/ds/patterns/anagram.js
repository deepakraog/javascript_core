function validAnagram(str1, str2){
  // add whatever parameters you deem necessary - good luck!

  if (str1.length !== str2.length) {
    return false;
  }

  let lookup = {};

  for (let val of str1) {
    lookup[val] = (lookup[val] || 0) + 1;
  }

  for (let key of str2) {
    if (!lookup[key]) {
      return false;
    } else {
      lookup[key] -= 1;
    }
  }
  return true;
}

console.log(validAnagram('cinema', 'deepak'));
console.log(validAnagram('deepak', 'deepak'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('bat', 'tab'));