function capitalizedWords (arr) {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  let res = capitalizedWords(arr.slice(0, -1));
  res.push(arr.slice(arr.length-1)[0].toUpperCase());
  return res;
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizedWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']