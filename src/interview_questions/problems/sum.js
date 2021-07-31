const addDigits = num => {
  if (num.toString().length == 1) return num;
  let New = num.toString().split("")
  .reduce((accumulate, current) => accumulate + Number(current), 0);
  return addDigits(New); 
};
    
console.log(addDigits(233331));