// ANOTHER SOLUTION FOR WICH SCHOOL CHALLENGE
/*
var output = "";
var age = 25;
function whichSchool(output) {
  if (age <= 12) {
    output += "Elementary School";
  } else if (age >= 13 && age <= 18) {
    output += "Secondary School";
  } else if (age > 19) {
    output += "Lighthouse Labs";
  }
  return "You should go to " + output + ".";
}
console.log("I am " + age + ". Which school should I go to?");
console.log(whichSchool(output));
*/

const whichSchool = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Secondary School";
  } else {
    return "Lighthouse Labs";
  }
};

whichSchool(35);
whichSchool(10);
whichSchool(17);
