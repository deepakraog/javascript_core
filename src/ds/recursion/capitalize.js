function capitalizeFirst (arr) {
  if (arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return [arr[0].toString().charAt(0).toUpperCase().concat(arr[0].slice(1))];
  }

  let res = capitalizeFirst(arr.slice(0, -1));
  let str = arr.slice(arr.length-1)[0];
  res.push(str.charAt(0).toUpperCase().concat(str.slice(1)));
  return res;
}

function capitalizeWords (array) {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length-1)[0].toUpperCase());
  return res;
}

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
console.log(capitalizeFirst(['car','taco','banana']));

console.log(capitalizeWords(['car','taco','banana']));