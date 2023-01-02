const instructorWithLongestName = function (instructors) {
  let biggest = "";
  let index = 0;
  let result = "";

  for (let i = 0; i < instructors.length; i++) {
    let nameSize = instructors[i].name;
    if (biggest.length < nameSize.length) {
      biggest = nameSize;
      index = biggest.indexOf(biggest[i]);
      result = instructors[index];
    }
  }
  return result;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
