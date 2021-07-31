function power(base, exponent) {
  if (exponent === 0) return 1;
  return base * power(base, exponent - 1); 
}

function factorial(input) {
  if (input === 0) return 1;
  return input * factorial(input - 1);
}

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

function recursiveRange(input) {
  if (input === 1) return 1;
  return input + recursiveRange(input - 1);
}

function fibonacci(range) {
  if (range <= 2 ) return 1;
  return fibonacci(range - 1) + fibonacci(range - 2);
}

console.log(fibonacci(3));


function reverse(string) {
  if (string.length <= 1) {
    return string;
  }   
  return reverse(string.slice(1)) + string[0];
}

function isPalindrome(str) {
  if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

const isOdd = val => val % 2 !== 0;

function someRecursive(arr, callback) {
  if (arr.length === 0) return false;
    if (callback(arr[0])) return true;
    return someRecursive(arr.slice(1),callback);
}

// console.log(someRecursive([1,2,3,4], isOdd));
// console.log(someRecursive([4,6,8], val => val > 10));
// console.log(someRecursive([4,6,8], isOdd));


function flatten(oldArr){
  var newArr = []
  	for(var i = 0; i < oldArr.length; i++){
    	if(Array.isArray(oldArr[i])){
      		newArr = newArr.concat(flatten(oldArr[i]))
    	} else {
      		newArr.push(oldArr[i])
    	}
  } 
  return newArr;
}


// console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
// console.log(flatten([[1],[2],[3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3


// let users = [
//   { "firstName": "Deepak", "lastName": "Rao", "age": "32"},
//   { "firstName": "Dilip", "lastName": "Rao", "age": "26"},
//   { "firstName": "Chinnamma", "lastName": "Rao", "age": "56"},
//   { "firstName": "Shruthi", "lastName": "Rao", "age": "32"},
// ];

// const output = users.reduce(function(acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] += acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(output);


// const out2 = users.filter((user) => user.age > 30).map((user) => user.firstName);

// console.log(out2);

// const out3 = users.reduce((acc, curr) => {
// if (curr.age > 30) {
//   acc.push(curr.firstName);
// }
// return acc;
// }, []);

// console.log(out3);