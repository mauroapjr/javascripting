var repeatNumbers = function (data) {
  let arr = ""; // where Im gonna store the results

  for (y = 0; y < data.length; y++) {
    //this loop grab all the arrays
    for (i = 0; i < data[y][1]; i++) {
      //this loop grabs the nested array
      arr += data[y][0];
    }
    if (y < data.length - 1) {
      arr += ", "; // this if statement create "," in btw strings
    }
  }
  return arr;
};
console.log(repeatNumbers([[1, 10]]));
console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);
console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
