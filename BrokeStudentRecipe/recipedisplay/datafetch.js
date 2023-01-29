import allRecipes from /API/TheMealDB.js;


/**
 * @author Nathaniel Israel
 * This class gets the data neccessary to show on the screen.
 */

var e;
/**
 * This is the recipe object. This object will contain all
 * the necessary attributes for the project. 
 */
class Recipe {
    contructor(name, image, ingridients, instructions) {
        this.name = name;
        this.image = image;
        this.ingridients = ingridients;
        this.instructions = instructions;
    }
}

/**
 * 
 * @param {*} id of the recipe
 * @returns the object reformatted for the app display
 */
async function getDetailsbyID(id) {
    let num = 0;
    let found = 0;
    for(let a = 0; a < allRecipes.length; a++) {
    if (allRecipes[a].idMeal == id) {
        num = a;
        found = 1
        break;
    }
    if (found == 0){
        return null;
    }
}
let meal = allRecipes[num];

return getDetails(meal)

}

/**
 * 
 * @param {*} name  of the app
 * @returns the object of the app reformatted
 */
async function getDetailsbyname(name) {
    let num = 0;
    let found = 0;
    for(let a = 0; a < allRecipes.length; a++) {
    if (allRecipes[a].strMeal == name) {
        found = 1;
        num = a;
        break;
    }
    if (found == 0) {
        return null;
    }
}
let meal = allRecipes[num];

return getDetails(meal)
}

/**
 * This collects all the values we're trying to get, and 
 * collects them so they can be easily displayed. 
 * @param {*} Meal that we are trying to get data from 
 * @returns Meal object created above that will be displayed
 */
async function getDetails(meal) {
let name = meal. strMeal;
let image = meal.strImageSource;

let ingredients = [];

ingredients.push(addString(meal.strIngredient1, meal.strMeasure1));
ingredients.push(addString(meal.strIngredient2, meal.strMeasure2));
ingredients.push(addString(meal.strIngredient3, meal.strMeasure3));
ingredients.push(addString(meal.strIngredient4, meal.strMeasure4));
ingredients.push(addString(meal.strIngredient5, meal.strMeasure5));
ingredients.push(addString(meal.strIngredient6, meal.strMeasure6));
ingredients.push(addString(meal.strIngredient7, meal.strMeasure7));
ingredients.push(addString(meal.strIngredient8, meal.strMeasure8));
ingredients.push(addString(meal.strIngredient9, meal.strMeasure9));
ingredients.push(addString(meal.strIngredient10, meal.strMeasure10));
ingredients.push(addString(meal.strIngredient11, meal.strMeasure11));
ingredients.push(addString(meal.strIngredient12, meal.strMeasure12));
ingredients.push(addString(meal.strIngredient13, meal.strMeasure13));
ingredients.push(addString(meal.strIngredient14, meal.strMeasure14));
ingredients.push(addString(meal.strIngredient15, meal.strMeasure15));
ingredients.push(addString(meal.strIngredient16, meal.strMeasure16));
ingredients.push(addString(meal.strIngredient17, meal.strMeasure17));
ingredients.push(addString(meal.strIngredient18, meal.strMeasure18));
ingredients.push(addString(meal.strIngredient19, meal.strMeasure19));
ingredients.push(addString(meal.strIngredient20, meal.strMeasure20));
ingredients.push(addString(meal.strIngredient21, meal.strMeasure21));

let instructions = meal.strInstructions.split(". ");
return Recipe(name, image, ingredients, instructions);
}


/**
 * This function adds the measurement of the ingridients and the string together
 * @param {*} ingredient string
 * @param {*} measure string
 * @returns the finished string
 */
async function addString(ing, measure) {
    return (ing.concat(" ", measure))
}

/**
 * This function takes in whatever recipe the app wants displayed. 
 * @param {} args 
 */
function main(args) {
    e = getDetailsbyID(args);
    if (e == null) {
        e = getDetailsbyname(args);
    }
    if (e == null) {
        e = Recipe(null, null, null, null)
    }
}




/**
 * @Test
 * checking if object can run correctly. 
 */
    const MealDetail = {
        idMeal: '545',
        strMeal: 'omelette',
        strDrinkAlternate: null,
        strCategory: 'breakfast',
        strArea: null,
        strInstructions: `1.Dice onions. 
        2.Whisk three eggs in bowl. 
        3.Add ham, onion, and garlic powder to bowl. 
        4.Dump bowl into medium pan, let cook for 3 minutes. 
        5.Flip over and  let cook for 90 seconds. 
        6.Take out of pan onto plate, let cool for 5 minutes
        7.Enjoy food!`
,
        strMealThumb: null,
        strTags: null,
        strYoutube: null,
        strIngredient1: 'eggs',
        strIngredient2: 'ham',
        strIngredient3: 'onion',
        strIngredient4: 'garlic powder',
        strIngredient5: null,
        strIngredient6: null,
        strIngredient7: null,
        strIngredient8: null,
        strIngredient9: null,
        strIngredient10: null,
        strIngredient11: null,
        strIngredient12: null,
        strIngredient13: null,
        strIngredient14: null,
        strIngredient15: null,
        strIngredient16: null,
        strIngredient17: null,
        strIngredient18: null,
        strIngredient19: null,
        strIngredient20: null,
        strMeasure1: '1',
        strMeasure2: '2 ounces of',
        strMeasure3: '1',
        strMeasure4: '2 tsp',
        strMeasure5: null,
        strMeasure6: null,
        strMeasure7: null,
        strMeasure8: null,
        strMeasure9: null,
        strMeasure10: null,
        strMeasure11: null,
        strMeasure12: null,
        strMeasure13: null,
        strMeasure14: null,
        strMeasure15: null,
        strMeasure16: null,
        strMeasure17: null,
        strMeasure18: null,
        strMeasure19: null,
        strMeasure20: null,
        strSource: null,
        strImageSource: 'https://images.app.goo.gl/7XHQ3DqZnb4jEXCK8',
        strCreativeCommonsConfirmed: null,
        dateModified: null,
        };

        allRecipes.push(MealDetail);
        expect((MealDetail.getDetailsbyID(545).name).toBe('omelette'));
        expect((MealDetail.getDetailsbyname(omelette).name).toBe('omelette'));


    












