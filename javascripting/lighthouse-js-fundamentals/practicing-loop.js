/*let loopy = 0;

for (let loopy = 100; loopy <= 200; loopy++) {
  if (loopy % 3 == 0) console.log(loopy);
}

function replaceNumbers(string, replacement) {
  return string.replace(/\d/g, replacement);
}
console.log(replaceNumbers(loopy, "Loopy"));

let replaced = loopy.replace(/ \d / + g, "Loopy");
console.log(loopy.replace(/[loopy % 3 == 0]/g, "Loopy"));


for (let x = 100; x <= 200; x++) {
  switch (x <= 200) {
    case x % 3 === 0 && x % 4 !== 0:
      console.log("Loopy");
      break;
    case x % 4 === 0 && x % 3 !== 0:
      console.log("Lighthouse");
      break;
    case x % 3 === 0 && x % 4 === 0:
      console.log("LoopyLighthouse");
      break;
    default:
      console.log(x);
      break;
  }
}*/

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

// your code goes here
crew.push(doctor);
crew.push(sister);
crew.push(shepherd);

console.log(crew);
