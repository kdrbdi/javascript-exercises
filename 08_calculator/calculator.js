const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => (acc += curr), 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => (acc *= curr), 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (num) {
  if (num === 0) return 1;

  // obvious and simple solution
  let total = 1;
  for (let index = 1; index <= num; index++) {
    total *= index;
  }
  return total;

  // Complicated for nothing, solution:
  // const arr = (num) => {
  //   let tempArr = [];
  //   for (let i = 1; i <= num; i++) {
  //     tempArr.push(i);
  //   }
  //   return tempArr;
  // };
  // return arr(num).reduce((acc, curr) => (acc *= curr), 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
