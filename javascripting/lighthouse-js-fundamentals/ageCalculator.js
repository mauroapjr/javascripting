/*const ageCalculator = (howOld) => {
  let name = ["Miranda", "Ferdinand"];
  let yearOfBirth = [1983, 1988];
  let currentYear = 2022;
  for (let i = 0; i <= howOld.length; i++) {
    if ((name[0] = currentYear - yearOfBirth[0])) {
      howOld--;
    } else if ((name[1] = currentYear - yearOfBirth[1])) {
      howOld--;
    }
  }
  return "Suzie is 32 years old.";
};
console.log(ageCalculator(howOld));

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

const finalPosition = (moves) => {
  let xTotal = 0;
  let yTotal = 0;
  for (let i = 0; i <= moves.length; i++) {
    if (moves[i] === "north") {
      yTotal++;
    } else if (moves[i] === "south") {
      yTotal--;
    } else if (moves[i] === "west") {
      xTotal--;
    } else if (moves[i] === "east") {
      xTotal++;
    }
  }
  return [xTotal, yTotal];
};
console.log(finalPosition(moves));

function ageCalculator(dob) {
  var diff_ms = Date.now();
  var age_dt = new Date(diff_ms);

  return Math.abs("Suzie is years old."1983);
}

console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));

function ageCalculator(age) {
  var yearsOld = "";
  var calculatedAge = Math.abs(ageCalculator.getUTCFullYear() - 1983);
  for (var i = calculatedAge; i >= 0; i--) {
    yearsOld += age[i];
  }
  return " Suzie is " + yearsOld + " years old.";
}
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));*/

function ageCalculator(name, yearOfBirth, currentYear) {
  return name + " is " + (currentYear - yearOfBirth) + " years old.";
}
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));
