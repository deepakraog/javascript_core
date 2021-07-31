//const fetch = require("node-fetch");

console.log('Start');

setTimeout(() => {
  console.log('Callback1');
}, 5000);

setTimeout(() => {
  console.log('Callback2');
}, 200);

document.getElementById('btn')
.addEventListener('click', () => {
  console.log('Button clicked');
});

// for (var i = 0; i < 20000; i++) {
//   console.log(i);
// }

var startDate = new Date().getTime();
var endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

// fetch('https://api.netflix.com').then(function cbF() {
// console.log('Netflix response!');
// });

console.log('End');