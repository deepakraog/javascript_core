console.log('Start');

setTimeout(() => {
  console.log('Callback1');
}, 5000);

setTimeout(() => {
  console.log('Callback2');
}, 2000);

// document.getElementById('btn')
// .addEventListener('click', () => {
//   console.log('Button clicked');
// });

// for (var i = 0; i < 20000; i++) {
//   console.log(i);
// }

fetch('https://api.netflix.com').then(function cbF(result) {
console.log(result);
});

console.log('End');