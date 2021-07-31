function linearSearch(arr, searchedString) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchedString) {
      return i;
    }
  }
  return -1;
}

let input = [ 'foo', 'bar', 'baz' ];
console.log(linearSearch(input, 'foobar'));
console.log(linearSearch(input, 'bar'));