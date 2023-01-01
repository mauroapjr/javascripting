const numberOfVowels = function (data) {
  let result = 0;

  for (i = 0; i < data.length; i++) {
    if (
      data[i] === "a" ||
      data[i] === "e" ||
      data[i] === "i" ||
      data[i] === "o" ||
      data[i] === "u"
    ) {
      result++;
    }
  }
  return result;
};
console.log(numberOfVowels("orange")); //3
console.log(numberOfVowels("lighthouse labs")); //5
console.log(numberOfVowels("aeiou")); //5
