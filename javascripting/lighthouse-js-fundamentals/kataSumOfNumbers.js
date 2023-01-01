const sumLargestNumbers = function (data) {
  let firstBig = 0;
  let secondBig = 0;

  for (let i = 0; i < data.length; i++) {
    if (data[i] > firstBig) {
      firstBig = data[i];
    }
  }

  for (let j = 0; j < data.length; j++) {
    if (data[j] > secondBig && data[j] < firstBig) {
      secondBig = data[j];
    }
  }
  return firstBig + secondBig;
};
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
