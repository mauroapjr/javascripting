const talkingCalendar = function (date) {
  let splitDate = date.split("/");
  const month = monthName(splitDate[1]);
  const day = parseInt(splitDate[2]) + addSuffix(splitDate[2]); // Parse the numeric value into a number. Prevents a 0 from preceding the day number.
  const year = splitDate[0];

  return `${month} ${day}, ${year}`;
};

// Returns the appropriate suffix to use.
const addSuffix = function (num) {
  remainder = num % 10;
  if (remainder === 1 && num !== 11) {
    return "st";
  }
  if (remainder === 2 && num !== 12) {
    return "nd";
  }
  if (remainder === 3 && num !== 13) {
    return "rd";
  }
  return "th";
};

// Converts a numbers 1-12 into the corresponding month name.
const monthName = function (num) {
  const month = new Date();
  month.setMonth(parseInt(num - 1));
  return month.toLocaleString("default", { month: "long" });
};
console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*let year = "";
  let month = "";
  let day = "";

let result = date.split("/");
  for (i = 0; i < date.length; i++) {
    result += new Date(+year, month - 1, +day);
  }
  
    for (x = 0; x < result[0]; x++) {
      year += result[x];
    }
    console.log(year);
    console.log(result.split("/"));
    return result;
  }*/
