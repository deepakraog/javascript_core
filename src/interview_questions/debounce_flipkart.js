// Debouncing in javascript

let counter = 0;
const getData = () => {
// Calls an API and Get Data
console.log('Fetching Data ... '+ counter++);
};

const debounce = (fn, delay) => {
  let timer;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delay);
  }
}

const betterFunction = debounce(getData, 300);