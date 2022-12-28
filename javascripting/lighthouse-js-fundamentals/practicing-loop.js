let loopy = 0;

for (let loopy = 100; loopy <= 200; loopy++) {
  if (loopy % 3 == 0) console.log(loopy);
}

function replaceNumbers(string, replacement) {
  return string.replace(/\d/g, replacement);
}
console.log(replaceNumbers(loopy, "Loopy"));

//let replaced = loopy.replace(/ \d /+g, "Loopy");
//console.log(loopy.replace(/[loopy % 3 == 0]/g, "Loopy"));
