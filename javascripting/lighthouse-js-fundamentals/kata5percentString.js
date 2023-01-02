const urlEncode = function (text) {
  let phrase = "";
  if (text[0] !== " ") {
    for (let i = 0; i < text.length; i++) {
      text[i] === " " ? (phrase += "%20") : (phrase += text[i]);
    }
    return phrase;
  }
  for (let i = 0; i < text.length - 1; i++) {
    text[i] === " " ? (phrase += "%20") : (phrase += text[i]);
  }
  return phrase;
};
console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
