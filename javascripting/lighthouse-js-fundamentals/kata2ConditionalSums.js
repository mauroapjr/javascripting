let conditionalSum = function (values, condition) {
  let result = 0;

  if (condition == "odd") {
    remain = 1;
  } else {
    remain = 0;
  }

  for (i = 0; i < values.length; i++) {
    if (values[i] % 2 === remain) {
      result += values[i];
    }
  }
  return result;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));
