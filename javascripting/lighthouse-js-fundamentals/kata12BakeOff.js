const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let list = ""; // holds the result
  let ingredientCheck = bakeryA.concat(bakeryB); // put together both arrays

  for (let i = 0; i < recipes.length; i++) {
    // loop on the recipes arrays
    recipes[i].ingredients;

    for (let j = 0; j < ingredientCheck.length; j++) {
      // loop on the first ingredients
      if (recipes[i].ingredients[0] === ingredientCheck[j]) {
        // checking if the recipe array has the same ingredients
        recipes[i].ingredients[1];

        for (let x = 0; x < ingredientCheck.length; x++) {
          // loop on the second ingredient
          if (recipes[i].ingredients[1] === ingredientCheck[x]) {
            list = recipes[i].name; // checking if the recipe array has the same ingredients and returning the name of the recipe to the list
          }
        }
      }
    }
  }
  return list;
};

let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
let bakeryB = ["milk", "butter", "cream cheese"];
let recipes = [
  {
    name: "Coconut Sponge Cake",
    ingredients: ["coconut", "cake base"],
  },
  {
    name: "Persian Cheesecake",
    ingredients: ["saffron", "cream cheese"],
  },
  {
    name: "Custard Surprise",
    ingredients: ["custard", "ground beef"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ["potatoes", "bay leaf", "raisins"];
bakeryB = ["red bean", "dijon mustard", "apples"];
recipes = [
  {
    name: "Potato Ganache",
    ingredients: ["potatoes", "chocolate"],
  },
  {
    name: "Sweet Fish",
    ingredients: ["anchovies", "honey"],
  },
  {
    name: "Nima's Famous Dijon Raisins",
    ingredients: ["dijon mustard", "raisins"],
  },
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// function that check if recipe has 1 ingredient of each bakery

/*                    // function to check all ingredients from bakery A
      
      for (y = 0; y <= bakeryB.length; y++) {                 // function to check all ingredients from bakery B
        
        check.concat(y + i);
      }
    }
    return check;
  };
  
  
  for (const recipe of recipes) {
    if (recipe.ingredients === )
  }

for (const solid of solids) {
  if (solid.type === "sphere") {
    total += sphereVolume(solid.radius);
  } else if (solid.type === "cone") {
    total += coneVolume(solid.radius, solid.height);
  } else if (solid.type === "prism") {
    total += (solid.height, solid.width, solid.depth);
  }
}



let result = "";
  let ingredientCheck = bakeryA.concat(bakeryB); // function to check all ingredients and push then together

  for (i = 0; i <= recipes.length; i++) {
    recipes[i].ingredients;

    for (y = 0; y <= ingredientCheck.length; y++) {
      if (recipes[i].ingredients[0] === ingredientCheck[y]) {
        recipes[1].ingredients[1];

        for (x = 0; x <= ingredientCheck.length; x++) {
          if (recipes[i].ingredients[1] === ingredientCheck[x]) {
            result = recipes[i].name;
          }
        }
      }
    }
  }

  return result;
};

const chooseRecipe = function (bakeryA, bakeryB, recipes) {
  let result = "";
  let ingredientCheck = bakeryA.concat(bakeryB);
  let check = Object.values(recipes);
  // console.log(check);

  for (i = 0; i <= ingredientCheck.length; i++) {
    for (y = 0; y <= check.length; y++) {
      if (ingredientCheck[i] === check[y]) {
        result.push(recipes.name);
      }
      console.log(result);
    }
  }
};



*/

// if has 1 ingredient of each, return the name of the recipe
