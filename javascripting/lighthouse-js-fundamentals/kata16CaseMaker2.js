const makeCase = function (input, casing) {
  let result = "";
  let consonantCase = "";
  let arr = input.split(" ");
  for (let i = 0; i < arr.length; i++) {
    for (y = i; y <= casing.length; y++) {
      if (y === "camel") {
        result += arr[i].charAt().toUpperCase() + arr[i].slice(1);
        console.log(result);
      } else if (casing === "kebab") {
        result += arr[i]
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map((x) => x.toLowerCase())
          .join("-");
      } else if (casing === "snake") {
        result += arr[i]
          .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
          )
          .map((x) => x.toLowerCase())
          .join("_");
      } else if (casing === "pascal") {
        result += arr[i].replace(
          /\w\S*/g,
          (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
        );
      } else if (casing === "title") {
        result += arr[i].toLowerCase().split(" ");
        result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      } else if (
        (casing === "vowel" && arr[i] === "a") ||
        arr[i] === "e" ||
        arr[i] === "i" ||
        arr[i] === "o" ||
        arr[i] === "u"
      ) {
        result += arr[i].toUpperCase();
      } else if (
        (casing === "consonant" && arr[i] === "a") ||
        arr[i] === "e" ||
        arr[i] === "i" ||
        arr[i] === "o" ||
        arr[i] === "u"
      ) {
        result += consonantCase
          .toLowerCase()
          .map((x) => x.toUpperCase(consonantCase));
      } else
        (casing == "upper + snake" && arr[i] === "a") ||
          arr[i] === "e" ||
          arr[i] === "i" ||
          arr[i] === "o" ||
          arr[i] === "u";
      result += arr[i]
        .match(
          /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
        )
        .map((x) => x.toUpperCase())
        .join("_");
    }

    return result;
  }
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/* Output
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/
