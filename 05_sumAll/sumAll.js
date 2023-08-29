const sumAll = function (firstNum, secondNum) {
  if (
    typeof firstNum !== "number" ||
    typeof secondNum !== "number" ||
    firstNum < 0 ||
    secondNum < 0
  )
    return "ERROR";
  let start = firstNum < secondNum ? firstNum : secondNum;
  let end = firstNum > secondNum ? firstNum : secondNum;

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
