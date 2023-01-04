function merge(arr1, arr2) {
  let arr3 = [];
  arr3 = arr1.concat(arr2);

  for (let i = 0; i < arr3.lenght; i++) {
    return arr3;
  }
  return arr3.sort();
}

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);

/*const merge = function (list) {
  for (let i = 0; i < list.length; i++) {
    for (let y = 0; y < list[i].length; y++) {
      console.log(list[i][y]);
    }
  }
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);*/
