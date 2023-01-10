const organizeInstructors = function (instructors) {
  let orgGroup = {}; // it will organize all the objects

  for (let i = 0; i < instructors.length; i++) {
    let result = instructors[i].course; // it is gonna loop through the objects and return the course object

    if (result in orgGroup) {
      //condition to organize the "course object" inside the orgGroup
      continue; // the loop was stopping at the first iteration, so putting this, keep it to continue
    }

    orgGroup[result] = []; // it will recive the object "name"
    for (let y = [i]; y < instructors.length; y++) {
      // gonna loop again inside the instructors to check the rest of the objects
      let courseName = instructors[y].course; // it brings all courses
      let instName = instructors[y].name; // it brings all name

      if (courseName === result) {
        // condition to bring the course name and push then toghether with the course name first and all the names after
        orgGroup[courseName].push(instName);
      }
    }
  }
  return orgGroup;
};

console.log(
  organizeInstructors([
    { name: "Samuel", course: "iOS" },
    { name: "Victoria", course: "Web" },
    { name: "Karim", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);
console.log(
  organizeInstructors([
    { name: "Brendan", course: "Blockchain" },
    { name: "David", course: "Web" },
    { name: "Martha", course: "iOS" },
    { name: "Carlos", course: "Web" },
  ])
);

/* 
Output: 
{
  iOS: ["Samuel"],
  Web: ["Victoria", "Karim", "Donald"]
}
{
  Blockchain: ["Brendan"],
  Web: ["David", "Carlos"],
  iOS: ["Martha"]
}*/
