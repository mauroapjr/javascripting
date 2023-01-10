const multiplicationTable = function (maxValue) {
  result = [];

  for (let i = 1; i <= maxValue; i++) {
    for (let y = 1; y <= maxValue; y++) {
      result.push(y * i);
      result.push(" ");
    }
    result.push("\n");
  }
  return result.join("");
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
