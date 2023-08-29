const repeatString = function (str, num) {
  let repStr = "";
  if (num >= 0) {
    for (let i = 0; i < num; i++) {
      repStr += str;
    }
    return repStr;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
