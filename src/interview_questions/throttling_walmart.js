let counter = 0;
const expensive = () => {
  console.log('Expensive '+counter++);
}

const throttle = (fn, limit) => {
  let flag = true;
  return function () {
    let context = this;
    let args = arguments;
    if (flag) {
      fn.apply(context, args);
      flag = false;
      setTimeout(() => {
        flag = true;
      }, limit);
    }
  };
}

const betterExpensive = throttle(expensive, 500);

window.addEventListener('resize', betterExpensive);
