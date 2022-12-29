const ingredients = [
  "eggs",
  "milk",
  "flour",
  "sugar",
  "baking soda",
  "baking powder",
  "chocolate chips",
  "bananas",
];

console.log();
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}
for (var x = 0; x < ingredients.length; x++) {
  console.log(ingredients[x]);
}

z = [];
for (y = ingredients.length - 1; y > -1; y--) {
  z.push(ingredients[y]);
}

console.log(z);

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
