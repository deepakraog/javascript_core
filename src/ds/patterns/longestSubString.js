function findLongestSubstring(inputString){
  if (inputString.length === 0) {
    return 0;
  }

  let maxLength = 0;
  let tempString = '';
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < inputString.length; windowEnd++) {
    if (tempString.indexOf(inputString[windowEnd]) > -1) {
      windowStart = tempString.indexOf(inputString[windowEnd]);
      tempString = tempString.slice(windowStart + 1, tempString.length);
    }
    tempString += inputString[windowEnd];
    maxLength = Math.max(maxLength, tempString.length);
  }
  return maxLength;
}

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('abca'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('bbbbbbbbbbbbbbbb'));