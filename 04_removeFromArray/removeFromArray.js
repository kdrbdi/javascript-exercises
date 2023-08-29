const removeFromArray = function (arr, ...args) {
  let cleanArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (![...args].includes(arr[i])) cleanArr.push(arr[i]);
  }
  return cleanArr;
};

// Do not edit below this line
module.exports = removeFromArray;
