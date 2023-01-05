const camelCase = function (input) {
  let result = "";
  let arr = input.split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      result += arr[i].charAt().toUpperCase() + arr[i].slice(1);
    } else {
      result += arr[i].toLowerCase();
    }
  }
  return result;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

// manter one upper case string; can use if , break and continue for it

/*Hey guys, 

Working on this challenge and I was trying something that didn't work. I'm using the "continue" statement to skip one iteration and keep going on my loop after that. 

I never used this statement before. Am I thinking too far or this is one of the possibilities to get this case solved?
This is my code:

const camelCase = function (input) {
  input = input.toUpperCase();
  for (i = 0; i < input.length; i++) {
    if (input[i] === /^[A - Z]+$/.test(i)) {
      continue;
    } else {
      return input.toLowerCase(i);
    }
  }
  return input;
};
console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

Thanks for the help!*/
