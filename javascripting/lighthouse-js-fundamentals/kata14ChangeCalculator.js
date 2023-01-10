function calculateChange(total, cash) {
  let change = cash - total;
  let result = {};
  let notes = [
    "twentyDollars",
    "tenDollars",
    "fiveDollars",
    "twoDollars",
    "oneDollar",
    "quarter",
    "dime",
    "nickel",
    "penny",
  ];
  let values = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];

  let amount = 0;

  // I left it in on the example, but the while statement shouldn't be needed anymore,
  // but it's also not doing any harm..
  // while (change > 0) {
  for (let i = 0; i < values.length; i++) {
    // This works because we're checking for the biggest values first
    // so you will always get the largest denominators back,
    // Math.floor() makes sure the amount will return 0 if it is not fitting (rather than 0.xxx)
    // (Also since we're dealing with cents as the unit, we don't want to go into decimals.)
    // If the amount doesn't fit into the change that's owed back,
    // then it returns 0 and doesn't get through the conditional.
    amount = Math.floor(change / values[i]);

    if (amount > 0) {
      // [] on the empty object adds the appropriate tenders.
      // This works easily with the loop since the notes have the same indices as the values.
      result[notes[i]] = amount;

      // reduce the change owed by the amount of values given back
      // before looping next value.
      change -= amount * values[i];
    }
  }

  return result;
}

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

/*let result = "";
  for (i = 0; i <= total; i++) {
    console.log(total);
    for (y = 0; y <= cash; y++) {
      console.log(cash);
    }
    result = i - y;
  }
  console.log(result[y] - [i])
  
  
  const calculateChange = function (total, cash) {
  result = [];
  //

  for (let i = 0; i === total; i++) {
    for (let y = 0; y === cash; y++) {
      let subtract = result(y - i);
      result.push(" ");
      return subtract;
    }
  }
};*/
