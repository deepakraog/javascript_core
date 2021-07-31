function subString(str, sub) {
  if (sub.length > str.length) return -1;

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (sub[j] !== str[i+j]) break;
      // if (sub[j] === str[i]) {
      //   i++;
      // }
      if (j === sub.length - 1) count++;
    }
  }
  return count;
}

console.log(subString('deepakepaepa', 'epa'));