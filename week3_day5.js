//   Create a function to determine the max amount of
//   servings that can be made based on a recipe and
//   available ingredients.
//   Input:


// recipe object where keys are ingredient names
//     and values are unit required (int)
// available ingredients object where keys are ingredient
//   names and values are unit available (int)

//   Output:
//     int (max servings)

//   Side note (not needed for solution): Realistically, the values
//   would be an object as well with the keys: unit (unit of measure), and amount.
//   If the available ingredient was stored in a different unit,
//   a conversion table would be needed to convert units of measure.


const recipe1 = {
    "organic fat": 99,
    "broccoli seeds": 1,
    okra: 1,
    potato: 1,
    spicy: 5,
    "gourmet memes": 4200,
};

const available1 = {
    "organic fat": 990,
    "broccoli seeds": 1,
    okra: 10,
    potato: 10,
    spicy: 50,
    "gourmet memes": 42000,
    sugar: 9001,
    spice: 5,
    "everything nice": 1,
    "triple point water": 5,
};
const expected1 = 1;
// because only 1 broccoli seeds is available and that is the limiting ingredient

// same as available1, except broccoli seeds has 10.
const available2 = { ...available1, ["broccoli seeds"]: 10 };
const expected2 = 10;

// same as available1 except broccoli seeds key is deleted.
const available3 = { ...available1 };
delete available3["broccoli seeds"];
const expected3 = 0; // broccoli seeds key doesn't exist in available ingredients

/**
 * Determines how many servings can be made of the given recipe.
 * - Time: O(?).
 * - Space: O(?).
 * @typedef {string} IngredientName
 * @typedef {number} Quantity
 * @typedef {Object<IngredientName, Quantity>} Ingredients
 * @param {Ingredients} recipe
 * @param {Ingredients} available
 * @returns {number} Max servings of the recipe that can be made.
 */


//My attempt
// function getMaxServings(recipe, available) { 
//     let amount = [];
//     let lowest = 1;
//     for(let key1 in recipe) {
//         for(let key2 in available) {
//             if(key1 == key2) {
//                 amount.push((available[key2]-recipe[key1]))
//             }
//         }
//     }
//     return amount;
// }

// Mark's Solution
const howManyRecipes = (recipe, available) => {
    const receipeKeys = Object.keys(recipe);
    const availableKeys = Object.keys(available);
    let servings = [];

    for (index in receipeKeys) {
        if (availableKeys.indexOf(receipeKeys[index]) === -1) {
            return 0;
        }
        servings.push(Math.floor(available[receipeKeys[index]] / recipe[receipeKeys[index]]));
    }

    let minServings = servings[0];
    for (index in servings) {
        if (servings[index] < minServings) {
            minServings = servings[index];
        }
    }
    return minServings;
};

console.log(getMaxServings(recipe1, available1));
console.log(getMaxServings(recipe1, available2));
console.log(getMaxServings(recipe1, available3));