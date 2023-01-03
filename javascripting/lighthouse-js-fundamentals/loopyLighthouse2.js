const loopyLighthouse = (range, multiples, words) => {
  let result = "";
  for (result = range[0]; result <= range[1]; result++) {
    if (result % multiples[0] === 0 && result % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (result % multiples[0] === 0) {
      console.log(words[0]);
    } else if (result % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(result);
    }
  }
};

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));
