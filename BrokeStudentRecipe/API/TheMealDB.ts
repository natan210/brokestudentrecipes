/**
 * Constants/URL used to invoke the API
 */

const MEAL_KEY: string = "meals";

const URL_BYNAME: string = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
const URL_BYLET: string = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
const URL_BYID: string = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=";
const URL_BYINGD: string = "https://www.themealdb.com/api/json/v1/1/filter.php?i=";
const URL_ALLINGD: string = "BrokeStudentRecipe/API/Ingredients.json";
 
/**
 * JSON Packet Structure
 * Meal Intro, MealDetail, and MealIngredient are three JSON Packets which are return by the API
 * The Interfaces define the Shape of the Data format
 */

interface MealIntro {
     strMeal: string,
     strMealThumb:string,
     idMeal:string,
}
 
interface MealDetail {
     idMeal: string,
     strMeal: string,
     strDrinkAlternate: string,
     strCategory: string,
     strArea: string,
     strInstructions: string,
     strMealThumb: string,
     strTags: string,
     strYoutube: string,
     strIngredient1: string,
     strIngredient2: string,
     strIngredient3: string,
     strIngredient4: string,
     strIngredient5: string,
     strIngredient6: string,
     strIngredient7: string,
     strIngredient8: string,
     strIngredient9: string,
     strIngredient10: string,
     strIngredient11: string,
     strIngredient12: string,
     strIngredient13: string,
     strIngredient14: string,
     strIngredient15: string,
     strIngredient16: string,
     strIngredient17: string,
     strIngredient18: string,
     strIngredient19: string,
     strIngredient20: string,
     strMeasure1: string,
     strMeasure2: string,
     strMeasure3: string,
     strMeasure4: string,
     strMeasure5: string,
     strMeasure6: string,
     strMeasure7: string,
     strMeasure8: string,
     strMeasure9: string,
     strMeasure10: string,
     strMeasure11: string,
     strMeasure12: string,
     strMeasure13: string,
     strMeasure14: string,
     strMeasure15: string,
     strMeasure16: string,
     strMeasure17: string,
     strMeasure18: string,
     strMeasure19: string,
     strMeasure20: string,
     strSource: string,
     strImageSource: string,
     strCreativeCommonsConfirmed: string,
     dateModified: string,
}

interface MealIngredient {
    idIngredient: string,
    strIngredient: string,
    strDescription: string,
    strType: string
}
 
 
/**
  * 
  * 
  * 
  * API Usage:
  * -    Search By Name
  * -    https://www.themealdb.com/api/json/v1/1/search.php?s=<Name>
  * -    Response Format: Array<MealIntro>
  * 
  * -    Search By First Letter
  * -    https://www.themealdb.com/api/json/v1/1/search.php?f=<Letter>
  * -    Response Format: Array<MealDetail>
  * 
  * -    Search By Meal ID
  * -    https://www.themealdb.com/api/json/v1/1/lookup.php?i=<ID>
  * -    Response Format: Array<MealDetail>[0]
  * 
  * -    Search By Main Ingredient
  * -    https://www.themealdb.com/api/json/v1/1/filter.php?i=<Main_Ingredient>
  * -    Response Format: Array<MealIntro>
  * 
  * -    List All Ingredients
  * -    https://www.themealdb.com/api/json/v1/1/list.php?i=list
  * -    OR LOCALLY:
  * -    BrokeStudentRecipe/API/Ingredients.json
  * -    Response Format: Array<MealIngredient>
  */
 
export default class TMD {

    // Field to Store Recipes which matches the User Selection
    static recipeList: MealIntro[] = [];

    // Field to Store User Ingredient Selection with ingredient Index
    static ingredList: MealIngredient[] = [];

    // Initialized to All Ingredient Data before invoke the API
    static allIngred: MealIngredient[] = undefined;

    /**
     * Initialize API Data
     * Fetch all the ingredient from the API
     * @returns 
     */

    static async INIT(): Promise<MealIngredient[]> {
        TMD.allIngred = await TMD.listAllIngredients();
        return TMD.allIngred;
    }

    /**
     * GET A List of Recipes which match the user selection(Ingredient List)
     * 
     * 1. Search By the Main Ingredient to get Meal List
     * 2. Traverse the List to see which Meals Match all the Ingredient Selection
     * 3. Add the Matching Meal to the Recipe List
     * 
     * @returns Promise<MealIntro[]>
     */
    static async GET(includesDetail: boolean = false): Promise<MealIntro[]> {
        if (TMD.ingredList.length <= 0) return undefined;
        TMD.recipeList = [];
        const mainRcps = await TMD.searchByIngred(TMD.ingredList[0].strIngredient);
        await mainRcps.forEach(async rcps => {
            const detail = await TMD.searchByID(rcps.idMeal);
            for (let ingdind = 1; ingdind < TMD.ingredList.length; ingdind++) {
                let found = false;
                for (let index = 1; index <= 20; index++) {
                    if (detail["strIngredient" + index] == 
                        TMD.ingredList[ingdind].strIngredient) {
                        found = true;
                    }
                }
                if (!found) return;
            }
            TMD.recipeList.push(includesDetail ? detail : rcps);
        });
        return TMD.recipeList;
    }


    /**
     * Post the User Selected Ingredient and add it to the Ingredient List
     * 
     * 1. Check the Input to be ID(a) or Name(b) of the Ingredient
     * 2(a). Retrieve the Ingredient Information from the API by Indexing
     * 2(b). Traverse All the Ingredients to find matching Ingredient
     * 3. Add the Ingredient Information to Ingredient List
     * 
     * @param idIngred The ID or Name of the Ingredient
     * @returns The Ingredient Index List
     */
    static POST(idIngred: string): MealIngredient[] {
        let found = false;
        if (Number.isInteger(idIngred)) {
            TMD.allIngred.every(ingred => {
                if (ingred.idIngredient == idIngred) {
                    TMD.ingredList.push(ingred);
                    found = true;
                    return false;
                }
                return true
            });
        } else {
            TMD.allIngred.every(ingred => {
                if (ingred.strIngredient == idIngred) {
                    TMD.ingredList.push(ingred);
                    found = true;
                    return false;
                }
                return true;
            });
        }
        if (!found) return undefined;
        return TMD.ingredList;
    }

    /**
     * Delete User Ingredient Selection
     * 
     * 1. Check the Input to be ID(a) or Name(b) of the Ingredient
     * 2. Traverse the Ingredient List to Remove designated Ingredient
     * 
     * @param idIngred The ID or Name of the Ingredient
     * @returns The Ingredient List
     */
    static DELETE(idIngred: string): MealIngredient[] {
        if (Number.isInteger(idIngred)) {
            TMD.ingredList = TMD.ingredList.filter((ingred) => (ingred.idIngredient != idIngred));
        } else {
            TMD.ingredList = TMD.ingredList.filter((ingred) => (ingred.strIngredient != idIngred));
        }
        return TMD.ingredList;
    }


    /**
     * Clear the Ingredient List of User Selection
     */
    static CLEAR(): void {
        TMD.ingredList = [];
    }
    
    /**
     * Invoke the API to search for Recipe by Name
     * @param name The name of recipe
     * @returns Array of MealIntro with the name
     */
    static async searchByName(name: string): Promise<MealIntro[]> {
        return (await TMD.search(URL_BYNAME, name))[MEAL_KEY];
    }

    /**
     * Invoke the API to search for Recipe by First Letter
     * @param letter The first Letter of the recipes
     * @returns Array of MealDetail start with the Letter
     */
    static async searchByLetter(letter: string): Promise<MealDetail[]> {
        return (await this.search(URL_BYLET, letter))[MEAL_KEY];
    }

    /**
     * Invoke the API to search for Recipe by the recipe's ID
     * @param id The id of the recipe
     * @returns The MealDetail of the recipe with the ID
     */
    static async searchByID(id: string): Promise<MealDetail> {
        return (await this.search(URL_BYID, id))[MEAL_KEY][0];
    }
 
    /**
     * Invoke the API to search for Recipe by the Main Ingredients
     * @param ingredient the name of the main ingredient
     * @returns Array of MealIntro with the ingredient as the main ingredient
     */
    static async searchByIngred(ingredient: string): Promise<MealIntro[]> {
        return (await this.search(URL_BYINGD, ingredient))[MEAL_KEY];
    }
    /**
     * Invoke the API to Fetch all the Ingredient Information
     * @returns Array of MealIngredient
     */
    static async listAllIngredients(): Promise<MealIngredient[]> {
        return (await this.search(URL_ALLINGD, ""))[MEAL_KEY];
    }

    /**
     * General URL Request function
     * @param url the URL of the API
     * @param keyword the input paramter for the Request
     * @returns Invocation Response
     */
    static async search(url:string, keyword: string) {
 
        let res = await fetch(url + keyword);
  
        if (res.status == 200) {
            let json = await res.json();
            return json;
        }

        throw new Error(res.status.toString());
    }
 }